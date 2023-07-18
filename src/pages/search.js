import { useSearchQuery } from '../reduxStore/apiSlice';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Image, SearchContainer,NotFoundContainer } from '../styles/browseStyle/listStyle';
import { IMG_PATH } from '../constants/apiConstants';
import Footer from '../components/Footer';
import HoverCard from '../components/browse/HoverCard';
import { Wrapper } from '../styles/globalStyles';


const Search = () => {
  const [params] = useSearchParams();
  const [param, setparam] = useState();
  const [position,setPosition]=useState();

  useEffect(() => {
    setparam(params.get('q'));
    if(params.get('movieId')||params.get('tvId')){
      setPosition('fixed')
    }else{
      setPosition('relative')
    }

  }, [params]);

  const { data, isLoading } = useSearchQuery(param);
  return (
    <>
    {!isLoading && data.results.filter((e)=>{return e.backdrop_path?e:''}).length>0 ? (
        <div style={{ margin:'auto',position:`${position}`,width:'100%'}}>
            <div style={{paddingTop:'3rem'}}>
              <Wrapper>
          <SearchContainer>
            {data.results
              .filter((e) => {
                return e.backdrop_path ? e : '';
              })
              .map((data, i) => {
                return (
                <Card data={data} type={`${data.media_type}Id`} param={param} key={data.id}></Card>
                );
              })}
          </SearchContainer>
          <Footer bgColor={'#141414'} />
        </Wrapper>
            </div>
        </div>
      ) : (
        <NotFoundContainer>
            <p>{`Your search for "${param}" did not find any matches`}</p>
            <div style={{paddingTop:'0.7rem'}}>Suggestions:</div>
            <ul style={{margin:'0.7rem 0 0 1.5rem'}}>
                <li>Try different keywords</li>
                <li>Looking for a movie or a TV show?</li>
                <li>Try using a movie, TV show title,an actor or director.</li>
            </ul>
        </NotFoundContainer>
      )}
    </>
  );
};

export default Search;


const Card=({data,param,type})=>{
  const [display,setDisplay]=useState()
    return (
      <>
        <div
          key={data.id}
          style={{ marginTop: '3rem', position: 'relative' }}
          onClick={() =>{setDisplay(true)}}
          onMouseLeave={()=>{setDisplay(false)}}
        >
          <Image
          style={{maxWidth:`${window.innerWidth>1400?'210px':'195px'}`}}
            src={`${IMG_PATH}/${data.backdrop_path}`}
            alt={'contentImage'}
          ></Image>
          {display && <HoverCard data={data} type={type} param={param} />}
        </div>
      </>
    );
}