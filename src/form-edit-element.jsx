function FormToEdit({}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span> Book Name </span>
        <input
          name='bookName'
          type='text'
          value={bookTitle}
          onChange={(e) => handleSubmit(e)}
        />
      </label>
      <label>
        <span> Author </span>
        <input
          name='bookAuthor'
          type='text'
          value={bookAuthor}
          onChange={(e) => handleSubmit(e)}
        />
      </label>
      <label>
        <span> Rating </span>
        <input
          name='rating'
          type='text'
          value={bookRating}
          onChange={(e) => handleSubmit(e)}
        />
      </label>
    </form>
  );
}
export default FormToEdit;
