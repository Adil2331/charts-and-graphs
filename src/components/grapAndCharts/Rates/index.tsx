import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import './rates.modul.scss'
import { useAppSelector } from '../../Redux/store'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface Data {
  labels: string[]
  datasets: {
    barPercentage: number
    barThickness: number
    maxBarThickness: number
    minBarLength: number
    label: string
    data: number[]
    backgroundColor: string
  }[]
}

interface IOption {
  indexAxis: 'y'
  elements: {
    bar: {
      borderWidth: number
    }
  }
  responsive: boolean
  plugins: {
    legend: {
      position: 'right'
    }
  }
}

export const options: IOption = {
  indexAxis: 'y' as const,

  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data: Data = {
  labels,
  datasets: [
    {
      barPercentage: 2,
      barThickness: 7,
      maxBarThickness: 8,
      minBarLength: 2,
      label: 'rates',
      data: [20, 30, 40, 50, 75, 40, 20],
      backgroundColor: 'rgba(0, 171, 85)',
    },
  ],
}

const Rates: React.FC = () => {
  const language = useAppSelector((state) => state.language.language)
  return (
    <div
      className="rates-theme"
      style={{
        boxShadow:
          '0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
        borderRadius: '16px',
      }}
    >
      <h2>{language ? 'Conversion Rates' : 'Коэффициенты пересчета'}</h2>
      <p>
        {' '}
        {language
          ? '(+43%) than last year'
          : '(+43%) по сравнению с прошлым годом'}
      </p>
      <div style={{ maxWidth: '688px', marginTop: '24px' }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}

export default Rates
