import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
import BookLayout from './pages/BookLayout';
import './App.css';

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to={"/react/"}>Home</Link>
					</li>
					<li>
						<Link to={"/react/books"}>Books</Link>
					</li>
					<li>
						<Link to={"/react/books/new"}>New Book</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/react/" element={<Home />} />
				<Route path="/react/books" element={<BookLayout />}>
					<Route index element={<BookList />} />
					<Route path="/react/:id" element={<Book />} />
					<Route path="/react/new" element={<NewBook />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
