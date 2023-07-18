import BillBoard from "../components/browse/billBoard";
import {
  usePopularMoviesQuery,
  useNowPlayingMovieQuery,
  useTopRatedMovieQuery,
  useUpComingMovieQuery,
  useTrendingMovieQuery,
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

const Movie=()=>{
     const location = useLocation();
  const [position, setPosition] = useState();
  useEffect(() => {
    if (location.search === "" ) {
      setPosition("relative");
    } else {
      setPosition("fixed");
    }  
  }, [location]);

  return (
    <>
        <Section position={position}>
          <BillBoard info={useTrendingMovieQuery()} type={'movie'} />
          <List getQuery={useNowPlayingMovieQuery} topic={"Now Playing"} type={'movie'} />
          <List getQuery={usePopularMoviesQuery} topic={"Poular Movies"} type={'movie'} />
          <List getQuery={useTopRatedMovieQuery} topic={"Top Rated Movies"} type={'movie'} />
          <TopTen getQuery={useTrendingMovieQuery} topic={'Top Movies of the week'} type='movie'/>
          <List getQuery={useUpComingMovieQuery} topic={"Upcoming Movies"} type={'movie'} />
          <Footer bgColor={'#141414'}/>
        </Section>
    </>
  );
}

export default Movie