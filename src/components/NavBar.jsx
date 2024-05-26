import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../index.css';


const NavBar = ({ generatePopularPalette }) => (
    <nav className='flex justify-end items-center p-1 '>
        <ul className="flex gap-2">
            <li>
                <Button variant="outlined" >
                    <Link to="/">Home</Link>
                </Button>
            </li>
            <li>
                <Button variant="outlined" >
                    <Link to="/palettes">Popular Palettes</Link>
                </Button>
            </li>
        </ul>
        {/* <Button variant="outlined" onClick={generatePopularPalette}>Popular Palette</Button> */}
    </nav>
);

export default NavBar;