import { TMediaInfo } from "@/shared/types";
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


export const getTvShows = async ():Promise< TMediaInfo[] | unknown> => {
  try {
    const response = await http.get(`tv/popular?language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching TV shows data:", error);
    throw error;
  }
};


export const getSearchResults = async (query: string):Promise< TMediaInfo[] | unknown> => {
  try {
    const response = await http.get(`search/multi?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};