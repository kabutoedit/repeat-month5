import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<UsersPage />} />
      </Routes>
    </>
  )
}

export default App
