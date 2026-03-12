import Button from './UI/button';
import star from '../assets/star.png';

function Card({ bookTitle, bookAuthor, bookRating }) {
  let stars = [];

  for (let i = 1; i <= bookRating; i++) {
    stars.push(<img className='w-3 h-3' src={star} alt='' />);
  }

  return (
    <>
      <div className=' border rounded-2xl p-4 bg-white border-white w-1/3 '>
        <div className='flex flex-col gap-2'>
          <div className='font-bold text-m'>Title: {bookTitle}</div>
          <div className='text-m  text-gray-700'> Author: {bookAuthor} </div>
          <div className='text-m text-gray-700 flex gap-1 items-center'>
            Rating: {stars}
          </div>
        </div>
        <div className='flex justify-evenly mt-4'>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </>
  );
}
export default Card;
