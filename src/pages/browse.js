import BrowseHeader from "../components/browse/browseHeader";
import { lazy, Suspense, useState } from "react";
import { Main } from "../styles/globalStyles";
import Fallback from "./fallback";
import { Route, Routes,Navigate } from "react-router-dom";
import Message from "../components/browse/message";
import MoreInfoModal from './MoreInfoModal'
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useTvDetailQuery, useMovieDetailQuery } from "../reduxStore/apiSlice";
import ScrollToTop from "../helper/scroll-to-top";

const Movies = lazy(() => import("./movie.js"));
const TvShows = lazy(() => import("./TvShows.js"));
const Home=lazy(()=>import('./home.js'))
const Search=lazy(()=>import('./search.js'))
const MyList=lazy(()=>import('./myList.js'))
const NotFound=lazy(()=>import('../pages/notFound'))

const Browse = () => {
  const profData = JSON.parse(localStorage.getItem("user-profile"));
  let error = profData ? false : true;
  const [params] = useSearchParams();
  const [type, setType] = useState(Object.keys(Object.fromEntries(params.entries())))


  useEffect(() => {
    setType((_prev) => Object.keys(Object.fromEntries(params.entries())))
  }, [params])

  return (
    <>
      {!error ? (
        <section style={{ minHeight: "100vh" }}>
          <ScrollToTop/>
          <BrowseHeader profData={profData} />
          <Main>
            <Suspense fallback={<Fallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie"  element={<Movies />} />
                <Route path="/tv"  element={<TvShows />} />
                <Route path="/search"  element={<Search />} />
                <Route path='/myList' element={<MyList/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
              { type[1]==='movieId' && <MoreInfoModal getData={useMovieDetailQuery} type={type[1]}/>}
              {type[1]==='tvId'&&<MoreInfoModal getData={useTvDetailQuery} type={type[1]}/>}
            </Suspense>
          </Main>
          <Message />
        </section>
      ) : (
        <Navigate replace to='/profile'/>
      )}
    </>
  );
};

export default Browse;
