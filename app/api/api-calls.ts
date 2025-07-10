import { TMediaInfo } from "@Types";
import { http } from "./fetch-client";

export const getTrending = async ():Promise< TMediaInfo[] | unknown> => {
  try {
    const response = await http.get(`trending/all/day`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending data:", error);
    throw error;
  }
};

export const getMovies = async ():Promise< TMediaInfo[] | unknown> => {
  try {
    const response = await http.get(`movie/popular?language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies data:", error);
    throw error;
  }
}

export const getMovieDetails = async (id: number):Promise< TMediaInfo[] | unknown> => {
  try {
    const response = await http.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const getTvShows = async ():Promise< TMediaInfo[] | unknown> => {
  try {
    const response = await http.get(`tv/popular?language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching TV shows data:", error);
    throw error;
  }
};

export const getTvShowDetails = async (id: number):Promise< TMediaInfo[] | unknown> => {
  try {
    const response = await http.get(`tv/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching TV show details:", error);
    throw error;
  }
};

export const getSearchResults = async (query: string):Promise< TMediaInfo[] | unknown> => {
  try {
    const response = await http.get(`search/multi?query=${encodeURIComponent(query)}&include_adult=true&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};