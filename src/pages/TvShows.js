import BillBoard from "../components/browse/billBoard";
import {
useTvAiringTodayQuery,
useTopRatedTvQuery,
usePopularTvShowsQuery,
useOnAirTvQuery,
useTrendingTvShowsQuery,
} from "../reduxStore/apiSlice";
import List from "../components/browse/list";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import Footer from '../components/Footer'
import TopTen from "../components/browse/top10List";

    const Section = styled.section`
      position: ${(props) => props.position};
    `;
    
const TvShows=()=>{
  const location = useLocation(); 
  const [position, setPosition] = useState();
  useEffect(() => {
    if (location.search === "") { 
      setPosition("relative");
    }else{setPosition("fixed");}  
  }, [location]);

  return (
    <>
        <Section position={position} >
          <BillBoard info={useOnAirTvQuery()} type={'tv'} />
          <List getQuery={useTvAiringTodayQuery} topic={"Airing Today"} type={'tv'} />
          <List getQuery={useTopRatedTvQuery} topic={"Top Rated Tv shows"} type={'tv'} />
          <List getQuery={usePopularTvShowsQuery} topic={"Poular Tv shows"} type={'tv'} />
          <TopTen getQuery={useTrendingTvShowsQuery} topic={'Top Tv Shows of the week'} type='tv'/>
          <List getQuery={useOnAirTvQuery} topic={"On Air Tv shows"} type={'tv'} />

          <Footer bgColor={'#141414'}/>
        </Section>
    </>
  );
};

export default TvShows;

