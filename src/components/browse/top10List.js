import styled from 'styled-components'
import { Headings } from '../../styles/globalStyles';
import { Div,Section,Box } from '../../styles/browseStyle/listStyle';
import Swipe from '../../helper/swiper';
import { SwiperSlide } from 'swiper/react';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import Top10 from '../../assets/top10';
import { IMG_PATH } from '../../constants/apiConstants';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router';
import { useEffect,useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimension-hook';

const PositionContainer=styled.div`
display: flex;
justify-content: space-between;
min-height: 160px;
min-width: 150px;
`
const Image=styled.img`
position: absolute;
right: 12%;
width: 120px;
height: 155px;
`

const TopTen=({getQuery,type,topic})=>{

  const navigate=useNavigate()
    const { inView, ref } = useInView({
      delay: 100,
      triggerOnce: true,
      threshold: 0.2,
    });
    const { data, isLoading } = getQuery(undefined, {
      skip: !inView,
    });

      const { width } = useWindowDimensions();

      let slidesPerView;
      if (width > 900 && width < 1200) {
        slidesPerView = 5;
      }
      if (width > 1200 && width < 1500) {
        slidesPerView = 6;
      }
      if (width > 1500 && width < 1800) {
        slidesPerView = 7;
      }
      if (width > 1800 && width < 2300) {
        slidesPerView = 8;
      }
      if (width > 2300 && width < 2600) {
        slidesPerView = 10;
      }

  

    return (
      <div ref={ref}>
        {!isLoading && data ? (
          <>
            <Div>
              <Headings color="white" padding="0 0 1rem 0" weight="600">
                {topic}
              </Headings>
            </Div>
            <Section>
              <Swipe
                spaceBetween={0}
                slidesPerGroup={slidesPerView}
                slidesPerView={slidesPerView}
                loopFillGroupWithBlank={false}
                loop={true}
                navigation={true}
              >
                {data.results.slice(0,9).map((e, i) => {
                  return (
                    <SwiperSlide key={i} onClick={()=>{
                       navigate({
                         search: `?q=&${type}Id=${e.id}`,
                       });
                    }}
                    >
                      <PositionContainer>
                        <Top10 index={i} width="100px" />
                        <Image  src={`${IMG_PATH}/${e.poster_path}`} />
                      </PositionContainer>
                    </SwiperSlide>
                  );
                })}
              </Swipe>
            </Section>
          </>
        ) : (
          <Box>
            <SkeletonTheme baseColor="#222" highlightColor="#333">
              <Skeleton
                count={6}
                height={110}
                width={195}
                style={{ marginRight: "8px" }}
                inline={true}
                />
            </SkeletonTheme>
          </Box>
        )}
      </div>
    );
  }
  
  export default TopTen
  
  
