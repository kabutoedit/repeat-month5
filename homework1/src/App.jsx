import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CouterPage } from './pages/CounterPage'
import { NavBar } from './components/NavBar'
import HomePage from './pages/HomePage'

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/home' element={<HomePage />} />
					<Route path='/counter' element={<CouterPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
