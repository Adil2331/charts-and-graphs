import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  Filler,
} from "chart.js";
import "./visit.modul.scss";

import { faker } from "@faker-js/faker";
import { useAppSelector } from "../../Redux/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  BarController,
  Filler
);

export const options = {
  responsive: true,
  tension: 0.3,
  scales: {
    x: {
      stacked: true,
      grid: {
        offset: true,
      },
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      type: "bar" as const,
      label: "Team A",
      backgroundColor: "rgb(0, 171, 85)",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),

      borderColor: "rgb(75, 192, 192)",
      borderWidth: 0,
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
    },
    {
      type: "line" as const,
      label: "Team B",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 100 })),
      borderColor: "rgb(45, 153, 255)",
      backgroundColor: "rgba(45, 153, 255)",
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
    },
    {
      type: "line" as const,
      label: "Team C",
      data: labels.map(() => faker.datatype.number({ min: 10, max: 100 })),
      borderColor: "rgb(255, 231, 0)",
      backgroundColor: "rgba(255, 231, 0, 0.16)",
      fill: "origin",
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
    },
  ],
};

export function Visit() {
  const language = useAppSelector((state) => state.language.language);

  return (
    <div
      className="visit-theme"
      style={{
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        borderRadius: "16px",
      }}
    >
      <h2>{language ? "Website Visits" : "Посещения веб-сайта"}</h2>
      <p>
        {language
          ? "(+43%) than last year"
          : "(+43%) по сравнению с прошлым годом"}
      </p>
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "flex-end",
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "18px",
        }}
      >
        <h3>
          <img
            style={{ marginRight: "8px" }}
            src={require("../../../assets/img/green-icon.png")}
            alt=""
          />
          {language ? "Team A" : "Команда A"}
        </h3>
        <h3>
          <img
            style={{ marginRight: "8px" }}
            src={require("../../../assets/img/yellow-icon.png")}
            alt=""
          />
          {language ? "Team B" : "Команда B"}
        </h3>
        <h3>
          <img
            style={{ marginRight: "8px" }}
            src={require("../../../assets/img/blue-icon.png")}
            alt=""
          />
          {language ? "Team C" : "Команда C"}
        </h3>
      </div>
      <div style={{ maxWidth: "664px" }}>
        <Chart options={options} data={data} type="bar" />
      </div>
    </div>
  );
}
