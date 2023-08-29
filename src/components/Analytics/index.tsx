import AnalyticsHeader from './AnalyticsHeader'
import News from './News'
import TimeLine from './TimeLine'
import './analytics.modul.scss'
import iconS from '../../assets/img/IconSearch.svg'
import { useDispatch } from 'react-redux'
import { setTheme } from '../Redux/themeSlice'
import { useAppSelector } from '../Redux/store'
import sun from '../../assets/img/sun.svg'
import moon from '../../assets/img/moon.svg'
import Traffic from '../Traffic'
import Task from '../Task'
import { useState } from 'react'
import { setNav } from '../Redux/menuSlice'
import OpenMenu from '../Menu/OpenMenu'
import { Visit } from '../grapAndCharts/Visits'
import CurrentVisits from '../grapAndCharts/CurrentVisits'
import Subject from '../grapAndCharts/Subject'
import { setLanguageEng, setLanguageRus } from '../Redux/languageSlice'
import Rates from '../grapAndCharts/Rates'

const Analytics: React.FC = () => {
  const dispatch = useDispatch()
  const [state, setstate] = useState(true)

  const theme = useAppSelector((state) => state.themeSlice.theme)
  const language = useAppSelector((state) => state.languageSlice.language)
  return (
    <div className="analytics">
      <div className="analytics-nav">
        <OpenMenu />
        <div className="nav-item">
          <img onClick={() => setstate(!state)} src={iconS} alt="" />
          <input className={state ? 'display-none' : ''} type="text" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{
              width: '30px',
              transition: '500ms linear',
              cursor: 'pointer',
            }}
            src={theme ? sun : moon}
            alt=""
            onClick={() => dispatch(setTheme())}
          ></img>

          {language ? (
            <img
              className="analytics-nav_items analytics-nav_items-1"
              src={require(`../../assets/nav/#.png`)}
              alt=""
              onClick={() => dispatch(setLanguageEng())}
            />
          ) : (
            <img
              className="analytics-nav_items analytics-nav_items-2"
              src={require(`../../assets/nav/#-3.png`)}
              alt=""
              style={{ marginLeft: '10px', width: '28px', height: '20px' }}
              onClick={() => dispatch(setLanguageRus())}
            />
          )}
          <img
            onClick={() => dispatch(setNav())}
            className="analytics-nav-img"
            src={require('../../assets/img/Logo.png')}
            alt="logo"
          />
          <img
            className="analytics-nav_items"
            src={require('../../assets/nav/#-1.png')}
            alt=""
          />
          <img
            className="analytics-nav_items"
            src={require('../../assets/nav/#-2.png')}
            alt=""
          />
          <img
            className="analytics-nav_items"
            src={require('../../assets/img/person.png')}
            alt=""
          />
        </div>
      </div>
      <h1
        className="title"
        style={{
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '36px',
        }}
      >
        {language ? 'Hi, Welcome Back' : 'Привет, с возвращением'}
      </h1>
      <AnalyticsHeader />
      <div
        className="news-timeLine"
        style={{ display: 'flex', gap: '24px', marginTop: '24px' }}
      >
        <Visit />
        <CurrentVisits />
      </div>
      <div
        className="news-timeLine"
        style={{ display: 'flex', gap: '24px', marginTop: '24px' }}
      >
        <Rates />
        <Subject />
      </div>
      <div
        className="news-timeLine"
        style={{ display: 'flex', gap: '24px', marginTop: '24px' }}
      >
        <News />
        <TimeLine />
      </div>
      <div
        className="news-timeLine"
        style={{
          display: 'flex',
          gap: '24px',
          marginTop: '24px',
          marginBottom: '80px',
        }}
      >
        <Traffic />
        <Task />
      </div>
    </div>
  )
}

export default Analytics
