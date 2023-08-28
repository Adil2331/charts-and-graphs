import './traffic.modul.scss'
import { useAppSelector } from '../Redux/store'

const items = [
  { img: 'facebook.png', number: '8,20k', text: 'FaceBook' },
  { img: 'google-color.png', number: '7,2k', text: 'Google' },
  { img: 'linkedin.png', number: '6,2k', text: 'Linkedin' },
  { img: 'Path.png', number: '4,5k', text: 'Twitter' },
]

const Traffic = () => {
  const language = useAppSelector((state) => state.language.language)
  return (
    <div className="traffic-theme">
      <h2
        style={{
          alignItems: 'center',
          padding: '24px',

          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '28px',
        }}
      >
        {language ? 'Traffic by Site' : 'Трафик по сайтам'}
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        {items.map((e) => (
          <div
            key={e.text}
            className="trffic-inner"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

              justifyContent: 'center',

              borderRadius: '8px',
              boxSizing: 'border-box',
              border: '1px solid rgba(145, 158, 171, 0.24)',
            }}
          >
            <img src={require(`../../assets/img/${e.img}`)} alt="" />
            <h2
              style={{
                fontWeight: '700',
                fontSize: '18px',
                lineHeight: '28px',
                marginTop: '8px',
              }}
            >
              {e.number}
            </h2>
            <p
              style={{
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '22px',
                color: 'background: rgba(99, 115, 129, 1)',
              }}
            >
              {e.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Traffic
