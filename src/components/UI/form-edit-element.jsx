import { useState, useEffect } from 'react';
import Button from './button';
import FormElementContainer from './form-element-container';

function FormToEdit({
  handleChangeEdit,
  bookData,
  handleSubmit,
  validation,
  handleSetForEdit,
}) {
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

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
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <FormElementContainer>
        <label htmlFor='title'>Book Name:</label>
        <input
          className='bg-gray-100 border-gray-100 border rounded-3xl w-auto gap-4 pl-4 px-2 py-1 focus:border-blue-500 outline-none '
          name='title'
          type='text'
          value={bookData.title}
          onChange={(e) => handleChangeEdit(e)}
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
        <label htmlFor='title'>Author:</label>
        <input
          className='bg-gray-100  border-gray-100 border rounded-3xl w-auto gap-4 pl-4 px-2 py-1 focus:border-blue-500 outline-none '
          name='author'
          type='text'
          value={bookData.author}
          onChange={(e) => handleChangeEdit(e)}
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
        <label htmlFor='title'>Rating:</label>
        <input
          className='bg-gray-100  border-gray-100 border rounded-3xl pl-4 px-2 py-1  focus:border-blue-500 outline-none'
          name='rating'
          type='text'
          value={bookData.rating}
          onChange={(e) => handleChangeEdit(e)}
        />
      </FormElementContainer>
      {validation.author && (
        <p className='text-xs text-red-300 whitespace-pre'>
          {Array.isArray(validation.rating)
            ? validation.rating.join('')
            : validation.ratign}
        </p>
      )}

      <div className='flex flex-col-2 gap-4 justify-around'>
        <Button className='w-auto' disabled={buttonIsDisabled}>
          Save
        </Button>
        <Button type='button' onClickFn={handleSetForEdit}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
export default FormToEdit;
