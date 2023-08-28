import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useAppSelector } from "../../Redux/store";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,

  Legend
);

export const data = {
  labels: ["English", "History", "Physics", "Geography", "Chinese", "Math"],
  datasets: [
    {
      label: "series 1",
      data: [3, 3, 2.95, 3, 3, 3],
      backgroundColor: "rgba(0, 171, 85, 0.48)",
      borderColor: "rgba(0, 171, 85, 1)",
      borderWidth: 1,
    },
    {
      label: "series 2",
      data: [4, 4, 1, 2, 3, 4],
      backgroundColor: "rgba(45,153,255, 0.48)",
      borderColor: "rgba(45,153,255, 1)",
      borderWidth: 1,
    },
  ],
};

const Subject = () => {
  const language = useAppSelector((state) => state.language.language);
  return (
    <div
      className="Subject-theme"
      style={{
        width: "344px",

        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        borderRadius: "16px",
      }}
    >
      <h2
        style={{
          textAlign: "start",
          flexBasis: "flex-start",
          padding: "24px",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: " 28px",
        }}
      >
        {language ? "Current Subject" : "Текущая тема"}
      </h2>
      <div
        style={{
          width: "244px",
          height: "244px",
          marginLeft: "50px",
          marginBottom: "35px",
          marginTop: "64px",
        }}
      >
        <Radar data={data} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          fontWeight: 500,

          fontSize: "13px",
          lineHeight: "18px",
          paddingTop: "24px",
          paddingBottom: "24px",
          borderTop: "1px solid #919EAB",
        }}
      >
        <h3>
          <img
            style={{ marginRight: "8px" }}
            src={require("../../../assets/img/green-icon.png")}
            alt=""
          />
          {language ? "Series 1" : "Серия 1"}
        </h3>
        <h3>
          <img
            style={{ marginRight: "8px" }}
            src={require("../../../assets/img/blue-icon.png")}
            alt=""
          />{" "}
          {language ? "Series 2" : "Серия 2"}
        </h3>
      </div>
    </div>
  );
};

export default Subject;
