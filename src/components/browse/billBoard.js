import { Headings,PlayButton } from "../../styles/globalStyles";
import { IMG_PATH } from "../../constants/apiConstants";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Trailer from "../../helper/trailerButton";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {
  ContentContainer,
  Main,
  InfoContainer,
  Para,
  ButtonsContainer,
  InfoButton,
  ContentPosterImage,
  Overlay,
} from "../../styles/browseStyle/billboard";
import { useState } from "react";
import { BsFillPlayFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const BillBoard = ({ info, type }) => {
  const [random] = useState(Math.floor(Math.random() * 19));
  const { data, isLoading } = info;
  const navigate=useNavigate()
  
  return (
    <>
      {!isLoading && data ? (
        <>
          <Overlay
            style={{
              backgroundImage: `url(${IMG_PATH}/${data.results[random].backdrop_path})`,
            }}
          ></Overlay>
          <Main>
            <ContentContainer alignCenter spaceBetween>
              <InfoContainer>
                <Headings color="white" size="2.5rem">
                  {data.results[random].title || data.results[random].name}
                </Headings>
                <Para>
                  <span>{data.results[random].overview}</span>
                </Para>
                <ButtonsContainer gap="20px">
                  <Trailer id={data.results[random].id}>
                    <PlayButton>
                      <BsFillPlayFill />
                      <div>Trailer</div>
                    </PlayButton>
                  </Trailer>
                  <InfoButton
                    onClick={(e) => {
                     navigate({
                       search: `?q=&${type}Id=${data.results[random].id}`,
                     });
                    }}
                  >
                    <IoMdInformationCircleOutline />
                    <div>More Info</div>
                  </InfoButton>
                </ButtonsContainer>
              </InfoContainer>
              <ContentPosterImage
                src={`${IMG_PATH}/${data.results[random].poster_path}`}
              />
            </ContentContainer>
          </Main>
        </>
      ) : (
        <div style={{padding:'1rem',height:'100vh'}}>
          <SkeletonTheme baseColor="#222" highlightColor="#333">
            <Skeleton
              count={1}
              height='100%'
              width='100%'
              style={{ marginRight: '10px' }}
              inline={true}
            />
          </SkeletonTheme>
        </div>
      )}
    </>
  );
};

export default BillBoard;
