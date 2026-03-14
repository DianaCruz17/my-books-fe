import { useState, useEffect } from 'react';
import Card from './components/card';
import Form from './components/form';

function App() {
  // GET ALL BOOKS
  const [books, setBooks] = useState([]);

  // CREATE NEW BOOK
  const [newBookForm, setNewBookForm] = useState({
    title: '',
    author: '',
    rating: 0,
  });

  // EDIT BOOK
  const [editingId, setEditingId] = useState('');
  const [isForEdit, setIsForEdit] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  // Handlers and functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBookForm({ ...newBookForm, [name]: value });
  };

  async function fetchBooks() {
    const response = await fetch('http://localhost:3000/api');
    const data = await response.json();
    setBooks(data.data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isForEdit) {
      //  await updateBook();
    } else {
      await postBook();
    }

    setNewBookForm({
      title: '',
      author: '',
      rating: '',
    });
  };

  async function postBook() {
    const response = await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBookForm),
    });

    const data = await response.json();
    console.log('RESPONSE DATA', data);

    //TODO: manage response data gracefully

    fetchBooks();
  }

  async function deleteBook(id) {
    console.log('id que recibí', id);
    const response = await fetch('http://localhost:3000/api/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseBackEnd = await response.json();
    if (responseBackEnd.status === 400) {
      //TODO: TOAST WITH GRACEFUL
    } else {
      fetchBooks();
    }
  }
  //  const handleForEdit = (id) =>{
  //   const forEdit = !isForEdit;
  //   setIsForEdit(forEdit);
  //   if (forEdit) {}

  // }
  return (
    <>
      <div className='flex w-full h-screen p-4 bg-gray-100'>
        <div className='flex flex-col gap-4 w-1/2 flex-wrap'>
          <h1 className='font-bold'>My Book´s rating </h1>
          {books.map((book) => {
            return <Card key={book.id} data={book} deleteBook={deleteBook} />;
          })}
        </div>
        <div className='w-1/2'>
          <Form
            handleChange={handleChange}
            newBookForm={newBookForm}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
