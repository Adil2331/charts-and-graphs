import './App.scss'
import Home from './components/Home'
import { useAppSelector } from './components/Redux/store'

function App() {
  const theme = useAppSelector((state) => state.theme.theme)

  return (
    <div className={theme ? 'light' : 'black'}>
      <Home />
    </div>
  )
}

export default App
