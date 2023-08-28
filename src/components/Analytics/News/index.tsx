import "./news.modul.scss";
import { useAppSelector } from "../../Redux/store";

const items = [
  {
    img: "NewsImg-1.png",
    title: "Master The Art Of Event With These 7 Tips",
    text: "blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...",
    date: "19 May 2021",
  },
  {
    img: "NewsImg-2.png",
    title: "Event On A Budget: 7 Tips From The Great Depression",
    text: "blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...",
    date: "03 May 2020",
  },
  {
    img: "NewsImg-3.png",
    title: "The 7 Best Things About Event",
    text: "blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...",
    date: "19 Feb 2019",
  },
  {
    img: "NewsImg-4.png",
    title: "Apply These 7 Secret Techniques To Improve Event",
    text: "blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...",
    date: "15 Dec 2020",
  },
  {
    img: "NewsImg-5.png",
    title:
      "Event Awards: 7 Reasons Why They Don't Work & What You Can Do About It",
    text: "blandit et, volutpat molestie, porta ut, ligula. Aliquam eu nunc...",
    date: "03 Jun 2020",
  },
];

const itemsRus = [
  {
    img: "NewsImg-1.png",
    title:
      "Овладейте искусством проведения мероприятий с помощью этих 7 советов",
    text: "Бландит и многое другое, волутпат молестие, порта ут, лигула. Aliquam eu nunc...",
    date: "19 мая 2021",
  },
  {
    img: "NewsImg-2.png",
    title:
      "Мероприятие с ограниченным бюджетом: 7 советов из Великой депрессии",
    text: "Бландит и другие, волутпат молестие, порта ут, лигула. Aliquam eu nunc...",
    date: "03 мая 2020",
  },
  {
    img: "NewsImg-3.png",
    title: "7 лучших моментов о событии",
    text: "Бландит и другие, волютпат молестие, порта ут, лигула. Aliquam eu nunc...",
    date: "19 февраля 2019",
  },
  {
    img: "NewsImg-4.png",
    title: "Apply These 7 Secret Techniques To Improve Event",
    text: "Бландит и другие, волутпат молестие, ворота ут, лигула. Aliquam eu nunc...",
    date: "15 декабря 2020",
  },
  {
    img: "NewsImg-5.png",
    title: " 7 причин, почему они не работают, и что вы можете с этим поделать",
    text: "Бландит и другие, волутпат молестие, ворота ут, лигула. Aliquam eu nunc...",
    date: "03 июня 2020",
  },
];

const News = () => {
  const language = useAppSelector((state) => state.language.language);
  return (
    <div
      className="news-theme"
      style={{
        borderRadius: "16px",
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
      }}
    >
      <h2
        style={{
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "28px",
          marginTop: "24px",
          marginLeft: "24px",
        }}
      >
        {language ? "News & Update" : "Новости и обновления"}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          margin: "24px",
        }}
      >
        {(language ? items : itemsRus).map((e) => (
          <div
            className="test"
            key={e.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              style={{ borderRadius: "5px" }}
              src={require(`../../../assets/img/${e.img}`)}
              alt=""
            />
            <div style={{ marginRight: "auto" }}>
              <h4
                style={{
                  fontWeight: 600,
                  lineHeight: "22px",
                }}
              >
                {e.title}
              </h4>
              <p style={{ overflow: "hidden" }}> {e.text}</p>
            </div>
            <p>{e.date}</p>
          </div>
        ))}
      </div>

      <h4
        className="news-title"
        style={{
          borderTop: "1px solid rgba(145, 158, 171, 0.24)",
          padding: "24px",

          display: "flex",
          justifyContent: "end",
        }}
      >
        {language ? "View All" : "Просмотреть все"}
      </h4>
    </div>
  );
};

export default News;
