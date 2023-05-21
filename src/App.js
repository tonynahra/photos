import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
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
						<Link to={"/books"}>Books</Link>
					</li>
					<li>
						<Link to={"/books/new"}>New Book</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books" element={<BookList />} />
				<Route path="/books/:id" element={<Book />} />
				<Route path="/books/new" element={<NewBook />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
