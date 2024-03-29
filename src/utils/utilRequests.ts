import api from "../services/api";
import { handleError } from "./errorHandling";

export const getCountries = async () => {
  try {
    const response = await api.get("/countries");
    return response.data;
  } catch (error) {
    console.error(error);
    return handleError(error);
  }
};

export const getLeague = async (country: string | null) => {
  if (country === null) {
    return null;
  }
  try {
    const response = await api.get(`/leagues?country=${country}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return handleError(error);
  }
};

export const getTeams = async (
  league: number | null,
  season: number | null
) => {
  if (league === null || season === null) {
    return null;
  }
  try {
    const response = await api.get(`/teams?league=${league}&season=${season}`);
    console.log("RESPONSE TEAM", response);
    return response.data;
  } catch (error) {
    console.error(error);
    return handleError(error);
  }
};

export const getPlayers = async (
  idLeague: number | null,
  season: number | null,
  idTeam: number | null,
  page: number
) => {
  if (idLeague === null || season === null) {
    return null;
  }
  try {
    const response = await api.get(
      `/players?league=${idLeague}&team=${idTeam}&season=${season}&page=${page}`
    );
    console.log("PLAYERS", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return handleError(error);
  }
};

export const getTeamStatistics = async (
  season: number | null,
  teamId: number | null,
  idLeague: number | null
) => {
  if (season === null || teamId === null || idLeague === null) {
    return null;
  }
  try {
    const response = await api.get(
      `teams/statistics?season=${season}&team=${teamId}&league=${idLeague}`
    );
    return response.data.response;
  } catch (error) {
    console.error(error);
    return handleError(error);
  }
};
