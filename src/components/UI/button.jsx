import React from 'react';

function Button({ children, onClickFn, id }) {
  return (
    <button
      onClick={() => onClickFn(id)}
      className='border rounded-3xl border-gray-100 gray px-5 py-2 bg-gray-100 text-xs font-semibold hover:bg-gray-300 cursor-pointer'
    >
      {children}
    </button>
  );
}

export default Button;
//rfce
