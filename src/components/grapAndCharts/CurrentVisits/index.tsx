import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useAppSelector } from "../../Redux/store";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      data: ["28.4", "18.5", "24.2", "24.7"],
      backgroundColor: ["#FFE700", "#826AF9", "#00AB55", "#2D99FF"],

      borderColor: "white",
      borderWidth: 3,
    },
  ],
};

const CurrentVisits = () => {
  const language = useAppSelector((state) => state.language.language);
  return (
    <div
      className="CurrentVisits-theme"
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
        {language ? "Current Visits" : "Текущие визиты"}
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
        <Pie style={{ width: "400px", height: "400px" }} data={data} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          paddingTop: "24px",
          paddingBottom: "24px",
          borderTop: "1px solid #919EAB",
        }}
      >
        <h3
          style={{
            fontSize: "13px",
            lineHeight: "18px",
            fontWeight: 500,
          }}
        >
          <img
            style={{ marginRight: "8px" }}
            src={require("../../../assets/img/green-icon.png")}
            alt=""
          />
          {language ? "America" : "Америка"}
        </h3>
        <h3
          style={{
            fontSize: "13px",
            lineHeight: "18px",
            fontWeight: 500,
          }}
        >
          <img
            style={{ marginRight: "8px" }}
            src={require("../../../assets/img/blue-icon.png")}
            alt=""
          />
          {language ? "Asia" : "Азия"}
        </h3>
        <h3
          style={{
            fontSize: "13px",
            lineHeight: "18px",
            fontWeight: 500,
          }}
        >
          <img
            style={{ marginRight: "8px" }}
            src={require("../../../assets/img/yellow-icon.png")}
            alt=""
          />
          {language ? "Europe" : "Европа"}
        </h3>
        <h3
          style={{
            fontSize: "13px",
            lineHeight: "18px",
            fontWeight: 500,
          }}
        >
          <img
            style={{ marginRight: "8px" }}
            src={require("../../../assets/img/purple-icon.png")}
            alt=""
          />
          {language ? "Africa" : "Африка"}
        </h3>
      </div>
    </div>
  );
};

export default CurrentVisits;
