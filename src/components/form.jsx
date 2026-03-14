import Button from './UI/button';

function Form({ handleChange, newBookForm, handleSubmit }) {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-2'>
      <label>
        <span> Book Name </span>
        <input
          name='title'
          type='text'
          placeholder='Harry Potter'
          value={newBookForm.title}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        <span> Author </span>
        <input
          name='author'
          type='text'
          placeholder='J.K Rowling'
          value={newBookForm.author}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        <span> Rating </span>
        <input
          name='rating'
          type='text'
          placeholder='1-5'
          value={newBookForm.rating}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <Button>Submit</Button>
    </form>
  );
}
export default Form;
