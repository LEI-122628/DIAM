import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'
import Gallery from './components/Gallery'
import Survey from './components/Survey'
import SurveyResults from './components/SurveyResults'
import Tickets from './components/Tickets'
import Form from './components/Form'
import HomePage from './components/Homepage'
import QuestionTable from './components/QuestionTable'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/survey-results" element={<SurveyResults />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/form" element={<Form />} />
        <Route path="/questions" element={<QuestionTable />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App