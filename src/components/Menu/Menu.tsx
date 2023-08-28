import { useState } from 'react'
import './menu.modul.scss'
import { useAppSelector } from '../Redux/store'

const general = [
  { img: 'app.svg', name: 'App' },
  { img: 'e-commerce.svg', name: 'E-commerce' },
  { img: 'analytics.svg', name: 'Analytics' },
  { img: 'banking.svg', name: 'Banking' },
  { img: 'booking.svg', name: 'Booking' },
]
const generalRus = [
  { img: 'app.svg', name: 'Приложение' },
  { img: 'e-commerce.svg', name: 'Э-коммерция' },
  { img: 'analytics.svg', name: 'Аналитика' },
  { img: 'banking.svg', name: 'Банковское дело' },
  { img: 'booking.svg', name: 'Бронирование' },
]

const management = [
  { img: 'ic_user.svg', name: 'Users' },
  { img: 'ic_cart.svg', name: 'E-commerce' },
  { img: 'ic_invoice.svg', name: 'Invoices' },
  { img: 'ic_blog.svg', name: 'Blog' },
]

const managementRus = [
  { img: 'ic_user.svg', name: 'Пользователи' },
  { img: 'ic_cart.svg', name: 'E-commerce' },
  { img: 'ic_invoice.svg', name: 'Счета-фактуры' },
  { img: 'ic_blog.svg', name: 'Блог' },
]

const apps = [
  { img: 'ic_mail.svg', name: 'Mail' },
  { img: 'ic_chat.svg', name: 'Chat' },
  { img: 'ic_calendar.svg', name: 'Calendar' },
  { img: 'ic_kanban.svg', name: 'Kanban' },
]

const appsRus = [
  { img: 'ic_mail.svg', name: 'Почта' },
  { img: 'ic_chat.svg', name: 'Чат' },
  { img: 'ic_calendar.svg', name: 'Календарь' },
  { img: 'ic_kanban.svg', name: 'Канбан' },
]

const Menu = () => {
  const language = useAppSelector((state) => state.language.language)
  const [state, setstate] = useState(false)
  return (
    <div className="menu">
      <img
        className={state ? 'img-pad' : 'img-adap'}
        onClick={() => setstate(!state)}
        style={{ width: '40px' }}
        src={require('../../assets/img/Logo.png')}
        alt="logo"
      />
      <div className={state ? 'img-pad' : 'menu-header'}>
        <img
          style={{ width: '40px', height: '40px' }}
          src={require(`../../assets/img/person.png`)}
          alt="person"
        />
        <div className={state ? 'display-none' : 'menu-display'}>
          <h3>{language ? 'Carlota Monteiro' : 'Карлос Монтейро'}</h3>
          <p>{language ? 'Admin' : 'Админ'}</p>
        </div>
      </div>

      <ul className="menu-general">
        <h2 className={state ? 'display-none' : 'menu-display'}>
          {language ? 'General' : 'Главное'}
        </h2>
        {(language ? general : generalRus).map((e) => (
          <li key={e.name} style={{ display: 'flex', gap: '16px' }}>
            <img src={require(`../../assets/general/${e.img}`)} alt="" />
            <p className={state ? 'display-none' : 'menu-display'}>{e.name}</p>
          </li>
        ))}
      </ul>

      <ul className="menu-management">
        <h2 className={state ? 'display-none' : 'menu-display'}>
          {language ? 'Management' : 'Управление'}
        </h2>
        {(language ? management : managementRus).map((e) => (
          <li key={e.name} style={{ display: 'flex', gap: '16px' }}>
            <img src={require(`../../assets/management/${e.img}`)} alt="" />
            <p className={state ? 'display-none' : 'menu-display'}>{e.name}</p>
          </li>
        ))}
      </ul>

      <ul className="menu-app">
        <h2 className={state ? 'display-none' : 'menu-display'}>
          {language ? 'Apps' : 'Приложения'}
        </h2>
        {(language ? apps : appsRus).map((e) => (
          <li key={e.name} style={{ display: 'flex', gap: '16px' }}>
            <img src={require(`../../assets/app/${e.img}`)} alt="" />
            <p className={state ? 'display-none' : 'menu-display'}>{e.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
