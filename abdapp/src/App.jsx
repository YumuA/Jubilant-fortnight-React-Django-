import TopBar from './components/TopBar.jsx'
import './App.css'
import PageP from './pages/forms/CityForm.jsx'
import Language from './pages/forms/LanguageForm.jsx'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import CountryForm from './pages/forms/CountrtForm.jsx';
import CountryLanguage from './pages/forms/ClForm.jsx';
import TownHall from './pages/forms/TownHallForm.jsx';
import Update from './components/Update.jsx';
import Start from './pages/Start.jsx';
import CityList from './pages/lists/CityList.jsx';
import Citycards from './pages/lists/Citycards.jsx';

function App() {
  return (
    <Router>
      <>
        <TopBar />
        <main className='relative w-full overflow-hidden'>
          <Routes>
            <Route paath='/' element={< Start/>}/>
            <Route path='/city' element={<PageP />} />
            <Route path='/language' element={<Language />} />
            <Route path='/country' element={<CountryForm/>}/>
            <Route path='/countryL' element={<CountryLanguage/>}/>
            <Route path='/townhall' element={<TownHall/>}/>
            <Route path='/update' element={< Update/>} />
            <Route path='/city/:id' element={< Citycards/>} />
          </Routes>
          <CityList />
        </main>
      </>
    </Router>
  )
}

export default App
