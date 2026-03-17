import { useEffect, useState } from 'react';
import Button from './UI/button';
import FormElementContainer from './UI/form-element-container';

function Form({ handleChange, newBookForm, handleSubmit, validation }) {
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  useEffect(() => {
    validateForm();
  }, [validation]);

  function validateForm() {
    for (let key in validation) {
      if (validation[key].length > 0) {
        setButtonIsDisabled(true);
      } else {
        setButtonIsDisabled(false);
      }
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-2'>
      <FormElementContainer>
        <label htmlFor='title'>Book Name</label>
        <input
          id='title'
          name='title'
          type='text'
          placeholder='Harry Potter'
          value={newBookForm.title}
          onChange={handleChange}
        />
      </FormElementContainer>

      {validation.title && (
        <p className='text-xs text-red-300 whitespace-pre'>
          {Array.isArray(validation.title)
            ? validation.title.join('')
            : validation.title}
        </p>
      )}

      <FormElementContainer>
        <label htmlFor='author'>Author</label>
        <input
          id='author'
          name='author'
          type='text'
          placeholder='J.K Rowling'
          value={newBookForm.author}
          onChange={handleChange}
        />
      </FormElementContainer>

      {validation.author && (
        <p className='text-xs text-red-300 whitespace-pre'>
          {Array.isArray(validation.author)
            ? validation.author.join('')
            : validation.author}
        </p>
      )}

      <FormElementContainer>
        <label htmlFor='rating'>Rating</label>
        <input
          id='rating'
          name='rating'
          type='number'
          placeholder='1-5'
          value={newBookForm.rating || ''}
          onChange={handleChange}
        />
      </FormElementContainer>

      {validation.author && (
        <p className='text-xs text-red-300 whitespace-pre'>
          {Array.isArray(validation.rating)
            ? validation.rating.join('')
            : validation.ratign}
        </p>
      )}

      {JSON.stringify(validation)}

      <Button disabled={buttonIsDisabled}>Submit</Button>
    </form>
  );
}

export default Form;
