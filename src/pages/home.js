import BillBoard from "../components/browse/billBoard";
import {
  usePopularMoviesQuery,
  useNowPlayingMovieQuery,
  useTvAiringTodayQuery,
  useTopRatedMovieQuery,
  useTopRatedTvQuery,
  useUpComingMovieQuery,
  useOnAirTvQuery,
  useTrendingMovieQuery,
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
const Home = () => {
  const location = useLocation();
  const [position, setPosition] = useState();
  useEffect(() => {
    if (location.search === "") {
      setPosition("relative");
    } else {
      setPosition("fixed");
    }  
  }, [location]);

  return (
    <>
        <Section position={position}>
          <BillBoard info={usePopularMoviesQuery()} type={'movie'} />
          <List getQuery={useNowPlayingMovieQuery} topic={"Now Playing"} type={'movie'} />
          <List getQuery={useTvAiringTodayQuery} topic={"Airing Today"} type={'tv'} />
          <TopTen getQuery={useTrendingMovieQuery} topic={'Top Movies of the week'} type='movie'/>
          <List getQuery={useTopRatedTvQuery} topic={"Top Rated Tv shows"} type={'tv'} />
          <List getQuery={useUpComingMovieQuery} topic={"Upcoming Movies"} type={'movie'} />
          <TopTen getQuery={useTrendingTvShowsQuery} topic={'Top Tv Shows of the week'} type='tv'/>
          <List getQuery={useOnAirTvQuery} topic={"On Air Tv shows"} type={'tv'} />
          <List getQuery={useTopRatedMovieQuery} topic={"Top Rated Movies"} type={'movie'} />
          <Footer bgColor={'#141414'}/>
        </Section>
    </>
  );
};

export default Home;
