import React from 'react';
import './App.css';
import {
	BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './components/pages/home';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardPage from './components/portal/pages/Dashboard';
import LearnPage from './components/portal/pages/Learn';
import LearnAnimalsPage from './components/portal/pages/LearnAnimals';
import LearnCropsPage from './components/portal/pages/LearnCrops';
import Footer from './components/Footer/Footer';
import LessonPage from './components/portal/pages/Lesson';


function App() {
	return (
		<Router>
			{/* <Navbar /> */}
			<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<ProtectedRoute />}> 
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/dashboard/learn" element={<LearnPage />} />
					<Route path="/dashboard/learn/crops" element={<LearnCropsPage />} />
					<Route path="/dashboard/learn/animals" element={<LearnAnimalsPage />} />
					<Route path="/dashboard/animals/pigs" element={<LessonPage />} />
				</Route>
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
