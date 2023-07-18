import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../constants/apiConstants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (build) => ({
    ////////////////////////////
    movieDetail: build.query({
      query: (name) => `movie/${name}?api_key=${API_KEY}&language=en-US`,
    }),

    movieRecommendation: build.query({
      query: (name) =>
        `movie/${name}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    nowPlayingMovie: build.query({
      query: (name) =>
        `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    popularMovies: build.query({
      query: (name) => `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    topRatedMovie: build.query({
      query: (name) =>
        `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    upComingMovie: build.query({
      query: (name) =>
        `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    trendingMovie: build.query({
      query: (name) => `trending/movie/week?api_key=${API_KEY}`,
    }),

    //////////////////////////////////////////////////////////////////////////////////////////////

    trendingTvShows: build.query({
      query: (name) => `trending/tv/week?api_key=${API_KEY}`,
    }),

    tvAiringToday: build.query({
      query: (name) =>
        `tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    onAirTv: build.query({
      query: (name) => `tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    topRatedTv: build.query({
      query: (name) => `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    popularTvShows: build.query({
      query: (name) => `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    tvRecommendation: build.query({
      query: (name) =>
        `tv/${name}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    tvDetail: build.query({
      query: (name) => `tv/${name}?api_key=${API_KEY}&language=en-US`,
    }),

    tvEpisodes: build.query({
      query: (arg) =>
        `tv/${arg.id}/season/${arg.seasonNumber}?api_key=${API_KEY}&language=en-US`,
    }),

    search: build.query({
      query: (name) =>
        `search/multi?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`,
    }),
  }),
});

export const {
  usePopularMoviesQuery,
  useMovieDetailQuery,
  useMovieRecommendationQuery,
  useNowPlayingMovieQuery,
  useTopRatedMovieQuery,
  useUpComingMovieQuery,
  useTrendingMovieQuery,
  useTrendingTvShowsQuery,
  useOnAirTvQuery,
  usePopularTvShowsQuery,
  useTopRatedTvQuery,
  useTvAiringTodayQuery,
  useTvRecommendationQuery,
  useTvDetailQuery,
  useTvEpisodesQuery,
  useSearchQuery,
} = api;
