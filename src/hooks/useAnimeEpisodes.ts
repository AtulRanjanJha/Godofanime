import { useQuery } from '@tanstack/react-query';
import { getAnimeEpisodes, getAnimeEpisodesPaginated, Episode } from '@/lib/api/animeEpisodes';

export const useAnimeEpisodes = (animeId: number, page: number = 1) => {
  return useQuery({
    queryKey: ['animeEpisodes', animeId, page],
    queryFn: () => getAnimeEpisodesPaginated(animeId, page),
    enabled: !!animeId,
    staleTime: 1000 * 60 * 60,
    retry: 2,
  });
};

export const useAllAnimeEpisodes = (animeId: number) => {
  return useQuery({
    queryKey: ['allAnimeEpisodes', animeId],
    queryFn: () => getAnimeEpisodes(animeId),
    enabled: !!animeId,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  });
};