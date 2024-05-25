import '../index.css';
import NavBar from './NavBar';


const Header = ({ text }) => (
    <div className="flex w-full p-2 justify-between items-center">
        <h1 className="text-4xl poppins-bold ">{text}</h1>
        <NavBar />
    </div>

);

export default Header;
