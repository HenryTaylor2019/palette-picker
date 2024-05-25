import { Button } from '@mui/material';
import '../index.css';


const NavBar = ({ generatePopularPalette }) => (
    <div className='flex justify-end items-center p-1 '>
        <Button variant="outlined" onClick={generatePopularPalette}>Popular Palette</Button>
    </div>
);

export default NavBar;