// animeEpisodes.ts

import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

export const fetchAnimeEpisodes = async (animeId) => {
    try {
        const response = await axios.get(`${BASE_URL}/anime/${animeId}/episodes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching anime episodes:', error);
        throw error;
    }
};

export const fetchEpisodeById = async (animeId, episodeId) => {
    try {
        const response = await axios.get(`${BASE_URL}/anime/${animeId}/episodes/${episodeId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching episode ${episodeId} for anime ${animeId}:`, error);
        throw error;
    }
};