import React from 'react';

function FormElementContainer({ children }) {
  return (
    <div className='flex justify-between items-center w-80'>{children}</div>
  );
}

export default FormElementContainer;
