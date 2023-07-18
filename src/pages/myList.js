import { useEffect, useState } from 'react';
import { activeProfile } from '../services/firebase';
import {
  Image,
  SearchContainer,
  NotFoundContainer,
} from '../styles/browseStyle/listStyle';
import useAutoId from '../hooks/autoIdHook';
import { useSearchParams, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { IMG_PATH } from '../constants/apiConstants';
import HoverCard from '../components/browse/HoverCard';
import { Headings, Wrapper } from '../styles/globalStyles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useWindowDimensions from '../hooks/useWindowDimension-hook';

const MyList = () => {
  const userid = useAutoId();
  const [data, setData] = useState(null);
  const [params] = useSearchParams();
  const [display, setDisplay] = useState('relative');
  const location = useLocation();

  useEffect(() => {
    const getListData = async () => {
      const profId = JSON.parse(localStorage.getItem('user-profile')).profileId;
      const currProfile = await activeProfile(userid, profId);
      setData(currProfile.myList);

      if (location.search === '') {
        setDisplay('relative');
      } else {
        setDisplay('fixed');
      }
    };
    if (userid) {
      getListData();
    }
  }, [userid, data, location]);


  return (
    <>
      {data && userid ? (
        <>
          {data.length > 0 ? (
            <div style={{ width: '100%', position: `${display}`}}>
              <Wrapper>
                <Headings
                  size={'2rem'}
                  weight="400"
                  color="white"
                  padding="6rem 0 0 0"
                >
                  My List
                </Headings>
                <SearchContainer>
                  {data.map((item, i) => {
                    return (
                      <Card
                        data={item}
                        type={item.type}
                        param={params.get('q')}
                        key={i}
                      ></Card>
                    );
                  })}
                </SearchContainer>
                <Footer bgColor={'#141414'} />
              </Wrapper>
            </div>
          ) : (
            <NotFoundContainer>
              You haven't added any titles to your list yet .
            </NotFoundContainer>
          )}
        </>
      ) : (
        <Wrapper>
          <div style={{ marginTop: '8rem' }}>
            <SkeletonTheme baseColor="#222" highlightColor="#333">
              <Skeleton
                count={6}
                height={110}
                width={200}
                style={{ marginRight: '6px' }}
                inline={true}
              />
            </SkeletonTheme>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default MyList;

const Card = ({ data, param, type }) => {
  const [display, setDisplay] = useState();
const { width } = useWindowDimensions();


    let imageWidth
    if (width > 900 && width < 1200) {
        imageWidth = 160;
    }
    if (width >= 1200 && width < 1300) {
        imageWidth = 180;
    }
    if (width >= 1300 && width < 1400) {
        imageWidth = 190;
    }
    if (width >= 1400 && width < 1500) {
        imageWidth = 200;
    }
    if (width >= 1500 && width < 1600) {
        imageWidth = 210;
    }
    if (width >= 1600 && width < 1700) {
        imageWidth = 230;
    }
    if (width >= 1700 && width < 1800) {
        imageWidth = 250;
    }
    if (width >= 1800 && width < 1900) {
        imageWidth = 270;
    }
    if (width >= 1900 && width < 2000) {
        imageWidth = 290;
    }
    if (width >= 2000 && width < 2100) {
        imageWidth = 300;
    }
    if (width >= 2100 && width < 2200) {
        imageWidth = 310;
    }
    if (width >= 2200 && width < 2300) {
        imageWidth = 330;
    }
    if (width >= 2300 && width < 2400) {
        imageWidth = 340;
    }
    if (width >= 2400 && width < 2500) {
        imageWidth = 355;
    }
    if (width >= 2500 && width < 2600) {
        imageWidth = 370;
    }
    if (width >= 2600 && width < 2700) {
        imageWidth = 385;
    }


  return (
    <>
      <div
        style={{ marginBottom: '3rem', position: 'relative' }}
        key={data.id}
        onClick={() => {
          setDisplay(true);
        }}
        onMouseLeave={() => {
          setDisplay(false);
        }}
      >
        <Image
        style={{maxWidth:`${imageWidth}px`}}
          src={`${IMG_PATH}/${data.backdrop_path}`}
          alt={'contentImage'}
        ></Image>
        {display && <HoverCard type={type} data={data} param={param} />}
      </div>
    </>
  );
};
