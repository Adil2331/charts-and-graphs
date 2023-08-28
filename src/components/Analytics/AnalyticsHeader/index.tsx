import { useAppSelector } from "../../Redux/store";

const items = [
  {
    img: "IconAndroid.svg",
    number: "714k",
    text: "Weekly Sales",
    color: "#005249",
    bgcolor: "#C8FACD",
    background:
      "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 97.35%)",
  },
  {
    img: "IconApple.svg",
    number: "1.35m",
    color: "#04297A",
    text: "New Users",
    bgcolor: "#D0F2FF",
    background:
      "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 97.35%)",
  },
  {
    img: "IconWindows.svg",
    number: "1.72m",
    text: "Item Orders",
    color: "#7A4F01",
    bgcolor: "#FFF7CD",
    background:
      "linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 97.35%)",
  },
  {
    img: "IconBase.svg",
    number: "234",
    text: "Bug Reports",
    color: "#7A0C2E",
    bgcolor: "#FFE7D9",
    background:
      "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 97.35%)",
  },
];
const itemsRus = [
  {
    img: "IconAndroid.svg",
    number: "714k",
    text: "Еженедельные распродажи",
    color: "#005249",
    bgcolor: "#C8FACD",
    background:
      "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 97.35%)",
  },
  {
    img: "IconApple.svg",
    number: "1.35m",
    color: "#04297A",
    text: "Новые пользователи",
    bgcolor: "#D0F2FF",
    background:
      "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 97.35%)",
  },
  {
    img: "IconWindows.svg",
    number: "1.72m",
    text: "Заказы на товары",
    color: "#7A4F01",
    bgcolor: "#FFF7CD",
    background:
      "linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 97.35%)",
  },
  {
    img: "IconBase.svg",
    number: "234",
    text: "Сообщения об ошибках",
    color: "#7A0C2E",
    bgcolor: "#FFE7D9",
    background:
      "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 97.35%)",
  },
];

const AnalyticsHeader = () => {
  const language = useAppSelector((state) => state.language.language);
  return (
    <div
      className="analyticsHeader"
      style={{
        display: "flex",
        gap: "24px",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {(language ? items : itemsRus).map((e) => (
        <div
          key={e.text}
          className="analyticsHeader-items"
          style={{
            minWidth: "252px",
            minHeight: "252px",
            backgroundColor: `${e.bgcolor}`,
            color: `${e.color}`,
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              padding: "20px",
              background: `${e.background}`,
              borderRadius: "50%",
            }}
            src={require(`../../../assets/img/${e.img}`)}
            alt=""
          />
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "48px",
              marginTop: "24px",
            }}
          >
            {e.number}
          </span>
          <p>{e.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsHeader;
