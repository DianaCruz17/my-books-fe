import Button from './button';

function FormToEdit({ handleChangeEdit, bookData, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span> Book Name </span>
        <input
          name='title'
          type='text'
          value={bookData.title}
          onChange={(e) => handleChangeEdit(e)}
        />
      </label>
      <label>
        <span> Author </span>
        <input
          name='author'
          type='text'
          value={bookData.author}
          onChange={(e) => handleChangeEdit(e)}
        />
      </label>
      <label>
        <span> Rating </span>
        <input
          name='rating'
          type='text'
          value={bookData.rating}
          onChange={(e) => handleChangeEdit(e)}
        />
      </label>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </form>
  );
}
export default FormToEdit;
