import { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const response = await fetch('http://localhost:3000/api');
    const data = await response.json();
    setBooks(data.data);
  }

  return (
    <div className='flex w-100 h-screen p-4'>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <p>{book.rating}/10</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
