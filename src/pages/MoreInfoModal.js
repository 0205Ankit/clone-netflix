import {
  Overlay,Main,BillBoardContainer,
  BackgroundImage,Titlecontainer,
  InteractContainer,TotalSeasons,
  SeasonNumber,
  ContentInfoContainer,Info,
  Quality,OverView,
  AdditionalInfo,Span,
  Button,TvSeasonsDetail,SeasonDropDown,
} from '../styles/browseStyle/moreInfoModal';
import { useSearchParams } from 'react-router-dom';
import { IMG_PATH } from '../constants/apiConstants';
import { IoCloseSharp } from 'react-icons/io5';
import Trailer from '../helper/trailerButton';
import LikeIcon from '../assets/like';
import CheckIcon from '../assets/check';
import AddIcon from '../assets/add';
import { AiFillCaretDown } from 'react-icons/ai';
import {
  useTvRecommendationQuery,
  useMovieRecommendationQuery,
} from '../reduxStore/apiSlice';
import {
  Adult, NonAdult,Rating,
  MovieLength,ReleaseYear,
  HoverButtons,Headings,PlayButton,
} from '../styles/globalStyles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ContentRecommendation from '../components/browse/ContentReccomendation';
import Episodes from '../components/browse/Episodes';
import {  useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router';
import { activeProfile, addToList, removeFromList } from '../services/firebase';
import useAutoId from '../hooks/autoIdHook';
import _ from 'lodash'


const MoreInfoModal = ({ type, getData }) => {
  const [params] = useSearchParams();
  const { data, isLoading } = getData(params.get(type));
  const [dropdown, setDropdown] = useState('none');
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [showAddIcon, setShowAddIcon] = useState(false);
  const userId=useAutoId()
  const [loadingContent,setLoadingContent]=useState(false)
  const location=useLocation()
  
  useEffect(()=>{
     const profId = JSON.parse(localStorage.getItem('user-profile')).profileId;
    const currentProfile= async()=>{
      const currProfile = await activeProfile(userId, profId);
      const currData= currProfile.myList.filter((item)=>item.id===data.id).length>0?true:false
      setShowAddIcon(currData)
      setLoadingContent(true) 
    }
   if(userId&&data){currentProfile()};
   
   },[userId,data])


  
  const addListHandler=async(content)=>{
    const profId=JSON.parse(localStorage.getItem('user-profile')).profileId
    try{setShowAddIcon((prev)=>{return !prev});await addToList(userId,profId,{...content,type})}
    catch{setShowAddIcon((prev)=>{return !prev})}
    
  }

  const removeFromListHandler=async(content)=>{
    const profId=JSON.parse(localStorage.getItem('user-profile')).profileId
 const currProfile = await activeProfile(userId, profId);
      const currData= currProfile.myList.filter((item)=>item.id===content.id)
     try{setShowAddIcon((prev)=>{return !prev});await removeFromList(userId,profId,...currData)}
    catch{setShowAddIcon((prev)=>{return !prev})}
  }


  const navigate = useNavigate();
  
  
  return (
    <>
      <Overlay
        onClick={() => {
          if(location.pathname==='/browse/search'){
            navigate({
              search: `?q=${params.get('q')}`,
            });
          }else{navigate({
            search: null,
          });}
        }}/>
      <Main onClick={() => {dropdown === 'block' && setDropdown('none');}}>
        <Button
         onClick={() => {
          if(location.pathname==='/browse/search'){
            navigate({
              search: `?q=${params.get('q')}`,
            });
          }else{navigate({
            search: null,
          });}
        }}
        >
          <IoCloseSharp />
        </Button>
        {!isLoading && data &&loadingContent ? (
          <>
            <BillBoardContainer>
              <BackgroundImage
                src={`${IMG_PATH}/${data.backdrop_path}`}
                alt="posterPic"
              />
              <Titlecontainer>
                <Headings color="white" size="2.2rem">
                  {data.title || data.name}
                </Headings>
                <InteractContainer alignCenter gap="8px">
                  <Trailer id={data.id}>
                    <PlayButton>
                      <BsFillPlayFill />
                      <div>Trailer</div>
                    </PlayButton>
                  </Trailer>  
                    {showAddIcon ? (
                      <HoverButtons onClick={()=>{removeFromListHandler(data)}}>
                        <CheckIcon fill="white"/>
                        </HoverButtons>
                    ) : (
                      <HoverButtons onClick={()=>{addListHandler(data)}}>
                        <AddIcon fill="white"/>
                        </HoverButtons>
                    )}
                  <HoverButtons>
                    <LikeIcon fill="white" />
                  </HoverButtons>
                </InteractContainer>
              </Titlecontainer>
            </BillBoardContainer>
            <ContentInfoContainer gap="4rem">
              <div style={{ width: '60%' }}>
                <Info gap="10px">
                  <Rating>{`Rating ${Number(data.vote_average).toFixed(
                    1,
                  )}`}</Rating>
                  {type === 'movieId' ? (
                    <ReleaseYear>{data.release_date.slice(0, 4)}</ReleaseYear>
                  ) : (
                    <ReleaseYear>{data.last_air_date.slice(0, 4)}</ReleaseYear>
                  )}
                  {!data.adult ? (<NonAdult>U/A 16+</NonAdult> ) : (<Adult>A</Adult>)}
                  {data.runtime ? (
                    <MovieLength>
                      {data.runtime > 60
                        ? `${(data.runtime - (data.runtime % 60)) / 60}h ${
                            data.runtime % 60
                          }m`
                        : `${data.runtime}m`}
                    </MovieLength>
                  ) : (
                    <MovieLength>{`${data.number_of_seasons} Seasons`}</MovieLength>
                  )}
                  <Quality>HD</Quality>
                </Info>
                <OverView>{data.overview}</OverView>
              </div>
              <div>
                <AdditionalInfo>
                  <Span>Genres: </Span>
                  <span>{data.genres.map((g) => g.name).join(',')}</span>
                </AdditionalInfo>
                <AdditionalInfo>
                  <Span>Status: </Span>
                  <span>{data.status}</span>
                </AdditionalInfo>
                <AdditionalInfo>
                  <Span>Languages: </Span>
                  <span>
                    {data.spoken_languages.map((e) => e.english_name || e.name).join(',')}
                  </span>
                </AdditionalInfo>
              </div>
            </ContentInfoContainer>
            {type === 'tvId' && (
              <TvSeasonsDetail id={params.get(type)}>
                <div>Episodes</div>
                <SeasonDropDown
                  onClick={() => {setDropdown('block');}}>
                  <div>{`Season ${seasonNumber}`}</div>
                  <AiFillCaretDown />
                </SeasonDropDown>
                <TotalSeasons display={dropdown}>
                  {[...new Array(data.number_of_seasons)].map((e, i) => {
                    return (
                      <SeasonNumber onClick={() => {setSeasonNumber(i + 1)}} key={i}>
                        {`Season ${i + 1} (${
                          data.seasons.filter((e) => {
                            return e.name !== 'Specials';
                          })[i].episode_count
                        } Episodes)`}
                      </SeasonNumber>
                    );
                  })}
                </TotalSeasons>
              </TvSeasonsDetail>
            )}
            {type === 'tvId' && (
              <Episodes id={params.get(type)} seasonNumber={seasonNumber} />
            )}
            {type === 'movieId' ? (
              <ContentRecommendation
                id={params.get(type)}
                getData={useMovieRecommendationQuery}
                type="movie"
              />
            ) : (
              <ContentRecommendation
                id={params.get(type)}
                getData={useTvRecommendationQuery}
                type="tv"
              />
            )}
          </>
        ) : (
          <div
            style={{ margin: 'auto', padding: '1rem 1rem', height: '100vh' }}
          >
            <SkeletonTheme baseColor="#222" highlightColor="#333">
              <Skeleton count={1} height={400} inline={true} />
              <div style={{ padding: '1rem 0 0 0' }}>
                <Skeleton count={1} inline={true} height={40} width={150}  />
              </div> <div style={{ padding: '1rem 0 0 0' }}>
                <Skeleton count={1} inline={true} height={40} width={400}  />
              </div>
            </SkeletonTheme>
          </div>
        )}
      </Main>
    </>
  );
};

export default MoreInfoModal;


