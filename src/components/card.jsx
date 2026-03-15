import Button from './UI/button';
import star from '../assets/star.png';

function Card({ data, deleteBook, handleSetForEdit }) {
  let stars = [];

  for (let i = 1; i <= data.rating; i++) {
    stars.push(<img className='w-3 h-3' src={star} alt='' key={i} />);
  }

  return (
    <div className=' border rounded-2xl p-4 bg-white border-white sm:w-auto md:w-1/3'>
      <div className='flex flex-col gap-2'>
        <div className='font-bold text-m'>Title: {data.title}</div>
        <div className='text-m  text-gray-700'> Author: {data.title} </div>
        <div className='text-m text-gray-700 flex gap-1 items-center'>
          Rating: {stars}
        </div>
      </div>
      <div className='flex justify-evenly mt-4'>
        <Button onClickFn={handleSetForEdit} id={data.id}>
          Edit
        </Button>
        <Button onClickFn={deleteBook} id={data.id}>
          Delete
        </Button>
      </div>
    </div>
  );
}
export default Card;
