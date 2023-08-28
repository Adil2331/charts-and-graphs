import "./timeLine.modul.scss";
import { useAppSelector } from "../../Redux/store";

const items = [
  {
    color: "#00AB55",
    title: "1983, orders, $4220",
    text: "2 hours ago",
    img: "dot-1.svg",
  },
  {
    color: "#FFC107",
    title: "12 Invoices have been paid",
    text: "2 hours ago",
    img: "dot-2.svg",
  },
  {
    color: "#1890FF",
    title: "Order #37745 from September",
    text: "25 Jul 2020",
    img: "dot-3.svg",
  },
  {
    color: "#FF4842",
    title: "New order placed #XF-2356",
    text: "22 Nov 2020",
    img: "dot-4.svg",
  },
  {
    color: "#54D62C",
    title: "New order placed #XF-2356.",
    text: "24 Sep 2020",
    img: "dot-5.svg",
  },
];

const itemsRus = [
  {
    color: "#00AB55",
    title: "1983 год, заказы, 4220 долларов",
    text: "2 часа назад",
    img: "dot-1.svg",
  },
  {
    color: "#FFC107",
    title: "Оплачено 12 счетов",
    text: "2 часа назад",
    img: "dot-2.svg",
  },
  {
    color: "#1890FF",
    title: "Приказ №37745 от сентября",
    text: "25 июля 2020",
    img: "dot-3.svg",
  },
  {
    color: "#FF4842",
    title: "Размещен новый заказ #XF-2356",
    text: "22 ноября 2020",
    img: "dot-4.svg",
  },
  {
    color: "#54D62C",
    title: "Размещен новый заказ #XF-2356.",
    text: "24 сентября 2020",
    img: "dot-5.svg",
  },
];
const TimeLine = () => {
  const language = useAppSelector((state) => state.language.language);
  return (
    <div className="timeLine-theme">
      <h2
        style={{
          marginBottom: "30px",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "28px",
        }}
      >
        {language ? "Order Timeline" : "Временная шкала заказа"}
      </h2>
      <div>
        {(language ? items : itemsRus).map((e) => (
          <div key={e.title} style={{ display: "flex", gap: "16px" }}>
            <img src={require(`../../../assets/img/${e.img}`)} alt="" />
            <div>
              <h4
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "22px",
                }}
              >
                {" "}
                {e.title}
              </h4>
              <p>{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
