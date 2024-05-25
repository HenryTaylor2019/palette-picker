import '../index.css';

export const IconButton = ({ icon, label, onClick }) => (
    <button
        className={`flexitems-center justify-center p-2 m-1 bg-transparent hover:bg-black text-white font-bold rounded focus:outline-none focus:ring focus:ring-blue-300`}
        aria-label={label}
        onClick={onClick}
    >
        {icon}
    </button>
);


