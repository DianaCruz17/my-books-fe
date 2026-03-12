function Form({}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span> Book Name </span>
        <input
          name='bookName'
          type='text'
          placeholder='Harry Potter'
          value={formData.bookName}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        <span> Author </span>
        <input
          name='bookAuthor'
          type='text'
          placeholder='J.K Rowling'
          value={formData.bookAuthor}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        <span> Rating </span>
        <input
          name='rating'
          type='text'
          placeholder='1-5'
          value={formData.bookRating}
          onChange={(e) => handleChange(e)}
        />
      </label>
    </form>
  );
}
export default Form;
