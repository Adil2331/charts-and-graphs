import "./openMenu.modul.scss";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../Redux/store";
import { setNav } from "../Redux/menuSlice";

const general = [
  { img: "app.svg", name: "App" },
  { img: "e-commerce.svg", name: "E-commerce" },
  { img: "analytics.svg", name: "Analytics" },
  { img: "banking.svg", name: "Banking" },
  { img: "booking.svg", name: "Booking" },
];

const management = [
  { img: "ic_user.svg", name: "Users" },
  { img: "ic_cart.svg", name: "E-commerce" },
  { img: "ic_invoice.svg", name: "Invoices" },
  { img: "ic_blog.svg", name: "Blog" },
];

const apps = [
  { img: "ic_mail.svg", name: "Mail" },
  { img: "ic_chat.svg", name: "Chat" },
  { img: "ic_calendar.svg", name: "Calendar" },
  { img: "ic_kanban.svg", name: "Kanban" },
];

const OpenMenu = () => {
  const nav = useAppSelector((state) => state.menu.nav);
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div
      className={nav ? "open-menu" : "close-menu"}
      style={
        theme ? { backgroundColor: "white" } : { backgroundColor: "#161c24" }
      }
    >
      <img
        className={"img-pad"}
        onClick={() => dispatch(setNav())}
        style={{ width: "40px" }}
        src={require("../../assets/img/Logo.png")}
        alt="logo"
      />
      <div className="menu-header">
        <img
          style={{ width: "40px", height: "40px" }}
          src={require(`../../assets/img/person.png`)}
          alt="person"
        />
        <div className="menu-display">
          <h3>Carlota Monteiro</h3>
          <p>Admin</p>
        </div>
      </div>

      <ul className="menu-general">
        <h2 className="menu-display">General</h2>
        {general.map((e) => (
          <li key={e.name} style={{ display: "flex", gap: "16px" }}>
            <img src={require(`../../assets/general/${e.img}`)} alt="" />
            <p className="menu-display">{e.name}</p>
          </li>
        ))}
      </ul>

      <ul className="menu-management">
        <h2 className="menu-display">Management</h2>
        {management.map((e) => (
          <li key={e.name} style={{ display: "flex", gap: "16px" }}>
            <img src={require(`../../assets/management/${e.img}`)} alt="" />
            <p className="menu-display">{e.name}</p>
          </li>
        ))}
      </ul>

      <ul className="menu-app">
        <h2 className="menu-display">Apps</h2>
        {apps.map((e) => (
          <li key={e.name} style={{ display: "flex", gap: "16px" }}>
            <img src={require(`../../assets/app/${e.img}`)} alt="" />
            <p className="menu-display">{e.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenMenu;
