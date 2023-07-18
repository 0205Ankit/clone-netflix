import {
  Adult,
  Headings,
  NonAdult,
  ReleaseYear,
} from "../../styles/globalStyles";
import { IMG_PATH } from "../../constants/apiConstants";
import {
  Section,
  Box,Card,
  ImageBox,PlayIcon,Image,Icon,
  Info,Trivia,
  Title,OverView,
} from "../../styles/browseStyle/movieDetailStyle";
import movieTrailer from "movie-trailer";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { errorMessageSliceActions } from "../../reduxStore/store";
import  Buttons from "../../helper/buttons";

const ContentReccomendation = ({ id,type,getData}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {data,isLoading}=getData(id)

  const cardClickHandler = async (eve) => {
      await movieTrailer(
      null,
      { id: true, tmdbId: eve.id },
      (error, response) => {
        if (response === null) {
          dispatch(
            errorMessageSliceActions.setErrorMessage("Sorry, we can't find any Trailer for this"));
          dispatch(errorMessageSliceActions.showError(true));
        } else {
          navigate({
            pathname: `/watch`,
            search: `?showId=${response}`,
          });
        }
      }
    );
  };

  return (
    <Section>
      <Headings color="white" size="1.5rem" weight="600">
        More Like This
      </Headings>
      {!isLoading && data.results.length>0 ? (
        <Box>
          {data.results.filter((e) => {return e.backdrop_path ? e : "";}).map((item, i) => {
              return (
                <Card key={i}>
                  <ImageBox onClick={()=>{cardClickHandler(item)}}>
                    <Image src={`${IMG_PATH}/${item.backdrop_path}`} />
                    <Icon>
                      <PlayIcon />
                    </Icon>
                  </ImageBox>
                  <Info>
                    <Trivia spaceBetween>
                      <div>
                        {type === 'movie' && <Title>{item.title}</Title>}
                        {type==='tv'&& <Title>{item.name}</Title>}
                        <div style={{ paddingTop: "5px" }}>
                          {false ? (
                            <Adult>A</Adult>
                          ) : (
                            <NonAdult>U/A 16+</NonAdult>
                          )}
                          {type === 'movie' && <ReleaseYear padding={"0 0 0 8px"}>
                            {item.release_date.slice(0, 4)}
                          </ReleaseYear>}
                          {type === 'tv' && <ReleaseYear padding={"0 0 0 8px"}>
                            {item.first_air_date.slice(0, 4)}
                          </ReleaseYear>}
                        </div>
                      </div>
                      <Buttons item={item} type={`${type}Id`}/>
                    </Trivia>
                    <OverView>{item.overview}</OverView>
                  </Info>
                </Card>
              );
            })}
        </Box>
      ) : (
        <Headings
          size="1.2rem"
          color="white"
          align="center"
          weight="500"
          padding="2rem 0"
        >
          Sorry, we don't have any Data to show
        </Headings>
      )}
    </Section>
  );
};

export default ContentReccomendation;

