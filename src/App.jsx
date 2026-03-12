import { useState, useEffect } from 'react';
import Card from './components/card';
import Form from './components/form';

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
    <div className='flex  flex-col gap-4 w-full h-screen p-4 bg-gray-100'>
      <h1 className='font-bold'>My Book´s rating </h1>
      {books.map((book) => {
        return (
          <Card
            key={book.id}
            bookTitle={book.title}
            bookAuthor={book.author}
            bookRating={book.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
