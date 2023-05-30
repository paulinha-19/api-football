import { IMinute } from "../../../../interfaces/responseRequests";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Popper,
  PopperPlacementType,
  Fade,
  Paper,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import HelpIcon from "@mui/icons-material/Help";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Goals por tempo de jogo",
      color: "#fff",
    },
  },
};

interface GraphicProps {
  minutes: IMinute;
}

const Graphic = ({ minutes }: GraphicProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const [open, setOpen] = useState(false);
  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const labels = [
    "0-15 minutos",
    "16-30 minutos",
    "31-45 minutos",
    "46-60 minutos",
    "61-75 minutos",
    "76-90 minutos",
    "91-105 minutos",
    "106-120 minutos",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Total Gols",
        data: [
          minutes["0-15"].total,
          minutes["16-30"].total,
          minutes["31-45"].total,
          minutes["46-60"].total,
          minutes["61-75"].total,
          minutes["76-90"].total,
          minutes["91-105"].total,
          minutes["106-120"].total,
        ],
        backgroundColor: "#9dcc1a99",
      },
      {
        label: "Percentage",
        data: [
          parseFloat(minutes["0-15"].percentage),
          parseFloat(minutes["16-30"].percentage),
          parseFloat(minutes["31-45"].percentage),
          parseFloat(minutes["46-60"].percentage),
          parseFloat(minutes["61-75"].percentage),
          parseFloat(minutes["76-90"].percentage),
          parseFloat(minutes["91-105"].percentage),
          parseFloat(minutes["106-120"].percentage),
        ],
        backgroundColor: "#b963ff99",
      },
    ],
  };

  return (
    <Box>
      <Toolbar />
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography>Clique em Total Gols ou percentage</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5">Gols marcados</Typography>
        <IconButton aria-label="help-text" onClick={handleClick("top-start")}>
          <HelpIcon />
        </IconButton>
      </Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default Graphic;
