import Button from './button';
import FormElementContainer from './form-element-container';

function FormToEdit({ handleChangeEdit, bookData, handleSubmit }) {
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

      <div className='flex flex-col-2 gap-4 justify-around'>
        <Button className='w-auto'>Save</Button>
        <Button>Cancel</Button>
      </div>
    </form>
  );
}
export default FormToEdit;
