import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import NavBar from './components/NavBar'
function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/home' element={<HomePage />} />
				<Route path='/registration' element={<RegistrationPage />} />
			</Routes>
		</>
	)
}

export default App
