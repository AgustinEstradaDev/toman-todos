const Modal = ({ setIsOpen, modalText }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-4 text-center relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <p className="text-gray-800 text-lg">{modalText}</p>
      </div>
    </div>
  );
};

export default Modal;
