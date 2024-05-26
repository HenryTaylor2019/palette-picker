import colorPalettes from '../colourPalettes';
import ColourPalette from '../components/ColourPalette';
import Header from '../components/Header';
import '../index.css';


function PalettesPage({ paletteSelected }) {
    return (
        <div className='h-full'>
            <Header text="Select from Popular Palettes" />
            <div className='flex justify-center items-center gap-1'>
                {colorPalettes.map((palette, i) => (
                    <div key={i}>
                        <ColourPalette palette={palette} paletteSelected={paletteSelected} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PalettesPage;
