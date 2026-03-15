function Card({ children }) {
  return (
    <div className='border rounded-2xl p-4 bg-white border-white sm:w-auto md:w-1/3'>
      {children}
    </div>
  );
}
export default Card;
