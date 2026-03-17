import { useState, useEffect } from 'react';
import Card from './components/card';
import Form from './components/form';
import FormToEdit from './components/UI/form-edit-element';
import Modal from './components/UI/modal';
import { CirclePlus } from 'lucide-react';
import BookDataItem from './components/book-data-item';

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
  const [isOpen, setIsOpen] = useState(false);
  const [validation, setValidation] = useState({});

  useEffect(() => {
    fetchBooks();
  }, []);

  // Handlers and functions

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setBookToEdit({ ...bookToEdit, [name]: value });

    validateFormValues(name, value);
  };
  //Actualiza el estado newBookForm tomando los valores actuales de bookToEdit,
  // //y sobrescribir [name] con el value nuevo.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isForEdit) {
      await updateBook(editingId);
    } else {
      await postBook();
    }
    setNewBookForm({
      title: '',
      author: '',
      rating: '',
    });
    setBookToEdit({});
    setEditingId(null);
    setIsForEdit(false);
    setIsOpen(false);

    fetchBooks();
  };

  const handleSetForEdit = (bookId) => {
    const newIsForEdit = !isForEdit; // change value of edit mode flag
    setIsForEdit(newIsForEdit); // toggle false -> true & true -> false
    if (newIsForEdit) {
      setEditingId(bookId); // set edit id
      const bookFound = books.find((book) => book.id === bookId);
      console.log('FOUND!', bookFound);
      setBookToEdit({
        //fill edit form data
        ...bookFound,
        title: bookFound.title,
        author: bookFound.author,
        rating: bookFound.rating,
      });
    } else {
      setEditingId(null);
      setBookToEdit({});
      setValidation({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBookForm({ ...newBookForm, [name]: value });

    validateFormValues(name, value);
  };

  function validateFormValues(name, value) {
    if (name === 'title') {
      // Title Validation
      let titleValidationMessage = [];
      if (value.length < 3) {
        titleValidationMessage.push('Title must contain more than 3 chars.\n');
        setValidation({
          ...validation,
          title: titleValidationMessage,
        });
      } else {
        titleValidationMessage = titleValidationMessage.filter(
          (msg) => msg !== 'Title must contain more than 3 chars.\n',
        );
        setValidation({
          ...validation,
          title: titleValidationMessage,
        });
      }
    }

    if (name === 'author') {
      // Author Validation
      // evaluate alphanumeric only
      let authorValidationMessage = [];

      if (value.length < 3) {
        authorValidationMessage.push(
          'Author must contain more than 3 chars.\n',
        );
        setValidation({
          ...validation,
          author: authorValidationMessage,
        });
      } else {
        authorValidationMessage = authorValidationMessage.filter(
          (msg) => msg !== 'Author must contain more than 3 chars.\n',
        );
        setValidation({
          ...validation,
          author: authorValidationMessage,
        });
      }

      const regexp = /^[a-zA-Z\s'\-À-ÿ]+$/;
      if (!regexp.test(value)) {
        authorValidationMessage.push(
          'Author must contain alphanumeric chars only.\n',
        );
        setValidation({
          ...validation,
          author: authorValidationMessage,
        });
      } else {
        authorValidationMessage = authorValidationMessage.filter(
          (msg) => msg !== 'Author must contain alphanumeric chars only.\n',
        );
        setValidation({
          ...validation,
          author: authorValidationMessage,
        });
      }
    }

    if (name === 'rating') {
      let ratingValidationMessange = [];
      if (value < 0) {
        ratingValidationMessange.push('Rating must not be negative.\n');
        setValidation({
          ...validation,
          rating: ratingValidationMessange,
        });
      } else {
        ratingValidationMessange = ratingValidationMessange.filter(
          (msg) => msg !== 'Rating must not be negative.\n',
        );
        setValidation({
          ...validation,
          rating: ratingValidationMessange,
        });
      }

      if (value > 10) {
        ratingValidationMessange.push('Rating must not be greater than 10.\n');
        setValidation({
          ...validation,
          rating: ratingValidationMessange,
        });
      } else {
        ratingValidationMessange = ratingValidationMessange.filter(
          (msg) => msg !== 'Rating must not be greater than 10.\n',
        );
        setValidation({
          ...validation,
          rating: ratingValidationMessange,
        });
      }
    }
  }

  function onModalClose() {
    setIsOpen(false);
    setNewBookForm({
      title: '',
      author: '',
      rating: 0,
    });
    setValidation({});
  }

  async function fetchBooks() {
    const response = await fetch('http://localhost:3000/api');
    const data = await response.json();
    setBooks(data.data);
  }

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

  async function updateBook(id) {
    const response = await fetch('http://localhost:3000/api/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookToEdit),
    });
    const responseJson = await response.json();
    fetchBooks();
  }

  return (
    <>
      <div className='flex w-full h-screen p-4 bg-gray-100 relative'>
        <div className='flex flex-col gap-4 w-full flex-wrap'>
          <h1 className='font-bold'>My Book's rating </h1>
          {books.map((book) => {
            if (editingId === book.id) {
              return (
                <Card>
                  <FormToEdit
                    handleChangeEdit={handleChangeEdit}
                    bookData={bookToEdit}
                    handleSubmit={handleSubmit}
                    validation={validation}
                    handleSetForEdit={handleSetForEdit}
                  />
                </Card>
              );
            } else {
              return (
                <Card key={book.id}>
                  <BookDataItem
                    data={book}
                    deleteBook={deleteBook}
                    handleSetForEdit={handleSetForEdit}
                  />
                </Card>
              );
            }
          })}
        </div>
        <div className='absolute bottom-0 right-0 p-4'>
          <CirclePlus
            onClick={() => setIsOpen(true)}
            size={64}
            className='cursor-pointer text-slate-300 hover:text-slate-600'
          />
          <Modal open={isOpen} onClose={() => onModalClose()}>
            <Form
              handleChange={handleChange}
              newBookForm={newBookForm}
              handleSubmit={handleSubmit}
              validation={validation}
            />{' '}
          </Modal>
        </div>
      </div>
    </>
  );
}

export default App;
