import React, { useState } from "react";
import { getPlayers } from "../../../utils/utilRequests";
import { useQuery } from "react-query";
import { useStates } from "../../../context/States/useStates";
import { IResponsePlayer, IRootPlayer } from "./interface";
import AlertApp from "../../Alert";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Pagination,
  Typography,
  Container,
  CardMedia,
  Skeleton,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const PlayerCard = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

const PlayerContent = styled(Typography)({
  height: 40,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const PlayerList = () => {
  const MotionCard = motion(Box);
  const { selectedLeagueId, selectedYearSeason, selectedTeamId } = useStates();
  const [page, setPage] = useState(1);
  const {
    isLoading,
    isError,
    data: playersData,
    error,
  } = useQuery<IRootPlayer>({
    queryKey: [
      "players",
      selectedLeagueId,
      selectedYearSeason,
      selectedTeamId,
      page,
    ],
    queryFn: () =>
      getPlayers(selectedLeagueId, selectedYearSeason, selectedTeamId, page),
  });
  const getPlayerCard = (player: IResponsePlayer) => {
    return (
      <Grid item key={player.player.id} xs={12} sm={12} md={6} lg={4} xl={4}>
        <MotionCard whileTap={{ scale: 0.9 }}>
          <Card sx={{ maxWidth: 300, backgroundColor: "primary.main" }}>
            <CardMedia
              component="img"
              height="200"
              width="100%"
              image={player.player.photo}
              alt={player.player.name}
              sx={{ objectFit: "cover" }}
            />
            <PlayerCard>
              <PlayerContent variant="subtitle2">
                Nome: {player?.player?.name}
              </PlayerContent>
              <PlayerContent variant="body2" color="text.secondary">
                Idade: {player?.player?.age}
              </PlayerContent>
              <PlayerContent variant="body2" color="text.secondary">
                Nacionalidade: {player?.player?.nationality}
              </PlayerContent>
            </PlayerCard>
          </Card>
        </MotionCard>
      </Grid>
    );
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    console.log(event);
  };

  if (isError) {
    return (
      <AlertApp severity="error" variant="filled">
        {String((error as unknown as Error)?.message)}
      </AlertApp>
    );
  }

  if (isLoading) {
    <Skeleton animation="wave" />;
  }

  return (
    <Box>
      {playersData?.response && playersData.response.length > 0 && (
        <Container>
          {" "}
          <Toolbar />
          <Typography variant="h5" component="h5">
            Jogadores
          </Typography>
          <Toolbar />
          <Grid container spacing={5}>
            {playersData?.response?.map((player: IResponsePlayer) =>
              getPlayerCard(player)
            )}
          </Grid>
          <Box mt={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={playersData?.paging?.total}
              page={page}
              onChange={handlePageChange}
              color="secondary"
            />
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default PlayerList;
