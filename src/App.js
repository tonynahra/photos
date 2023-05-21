import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Book from './pages/Book';
import './App.css';

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/book"}>Books</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/book" element={<Book />} />
			</Routes>
		</>
	);
}

export default App;
