import '../index.css';
import PaletteDropMenu from './PaletteDropMenu';

function ColourPalette({ palette, paletteSelected }) {
    return (
        <>
            <div className='flex w-full'>
                {palette.map((colour, i) => (
                    <div key={colour.id || i} className='h-48 w-full'>
                        <div style={{ backgroundColor: colour.colour }} className="h-full w-14 flex-wrap" >
                        </div>
                    </div>
                ))}
            </div>
            <PaletteDropMenu paletteSelected={() => paletteSelected(palette)} />
        </>
    );
}

export default ColourPalette;
