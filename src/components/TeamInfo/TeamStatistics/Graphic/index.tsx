import { IMinute } from "../../../../interfaces/responseRequests";
import { Box, Typography, Toolbar } from "@mui/material";
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
    },
  },
};

interface GraphicProps {
  minutes: IMinute;
}

const Graphic = ({ minutes }: GraphicProps) => {
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
        label: "Total Goals",
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
      <Typography variant="h5">Gols marcados</Typography>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default Graphic;
