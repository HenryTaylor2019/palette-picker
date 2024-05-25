import { useState } from 'react';
import { FaLock, FaLockOpen, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import '../index.css';


function ColourBar({ colour, removeColourBar, textColor, onAddColourBar, toggleLock, isLocked }) {
    const [toolsVisible, setToolsVisible] = useState(false);

    const handleRemove = (e) => {
        e.stopPropagation(); // Prevent event bubbling to avoid triggering switchColour
        removeColourBar(); // Call the removeColourBar function from the parent
    };

    const toggleToolsView = () => {
        setToolsVisible(prevState => !prevState);
    };

    const IconButton = ({ icon, label, onClick }) => (
        <button
            className={`flexitems-center justify-center p-2 m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:ring focus:ring-blue-300`}
            aria-label={label}
            onClick={onClick}
        >
            {icon}
        </button>
    );

    return (
        <>
            <div style={{ backgroundColor: colour }} className="flex justify-center items-center h-96 w-full relative">
                <div className="flex flex-col justify-center items-center w-full">
                    <h2 style={{ color: textColor }}>{colour}</h2>
                </div>
            </div>
            {
                toolsVisible ? (
                    <div className="flex justify-center items-center mt-2 gap-1">
                        <IconButton icon={<FaPlus />} onClick={onAddColourBar} label="Add" />
                        <IconButton icon={<FaMinus />} onClick={handleRemove} label="Subtract" />
                        <IconButton icon={<FaTimes />} onClick={toggleToolsView} label="Close" />

                        <IconButton
                            icon={isLocked ? <FaLock /> : <FaLockOpen />}
                            label={isLocked ? 'Unlock' : 'Lock'}
                            onClick={toggleLock}
                        />
                    </div>
                ) :
                    <div onClick={toggleToolsView}>
                        <h2>Tools</h2>
                    </div>
            }
        </>
    );
}

export default ColourBar;
