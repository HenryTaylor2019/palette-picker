import { FaLock, FaLockOpen, FaMinus, FaPlus } from "react-icons/fa";
import '../index.css';
import { IconButton } from "./IconButton";


const Toolbar = ({ onAddColourBar, handleRemove, isLocked, toggleLock }) => (
    <>
        <IconButton icon={<FaPlus />} label="Add" onClick={() => onAddColourBar()} />
        <IconButton icon={<FaMinus />} label="Subtract" onClick={() => handleRemove()} />
        <IconButton
            icon={isLocked ? <FaLock /> : <FaLockOpen />}
            label="toggle lock"
            onClick={toggleLock}
        />
    </>
);

export default Toolbar;