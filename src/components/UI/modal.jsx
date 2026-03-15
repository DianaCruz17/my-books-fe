import { createPortal } from 'react-dom';
import { CircleX } from 'lucide-react';

function Modal({ open, children, onClose }) {
  if (!open) return null;
  return createPortal(
    <>
      <div className='fixed inset-0 bg-zinc-800/75 flex items-center justify-center z-50'>
        <div className='relative bg-white p-6 rounded-lg shadow-xl w-full max-w-sm mx-auto'>
          <CircleX
            onClick={() => onClose()}
            size={20}
            color='#808080'
            className='ml-auto cursor-pointer'
          />

          {children}
        </div>
      </div>
    </>,
    document.getElementById('modalPortal'),
  );
}
export default Modal;
