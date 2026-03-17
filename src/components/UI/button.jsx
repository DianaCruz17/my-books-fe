function Button({ children, onClickFn, id, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClickFn?.(id || '')}
      className='border rounded-3xl border-gray-100 gray px-5 py-2 bg-gray-100 text-xs font-semibold hover:bg-gray-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-100'
    >
      {children}
    </button>
  );
}

export default Button;
//rfce
