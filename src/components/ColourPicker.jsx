import '../index.css';
import ColourBar from './ColourBar';

function ColourPicker({ colourBars, addColourBar, removeColourBar, isDarkBackground, toggleLock }) {

    const copyToClipBoard = (selectedColour) => {
        navigator.clipboard.writeText(selectedColour);
    };

    return (
        <div className='flex justify-center items-start h-full w-full'>
            {colourBars.map((colourBar, index) => (
                <div key={colourBar.id} className='h-full w-full'>
                    <ColourBar
                        colour={colourBar.colour}
                        textColor={isDarkBackground(colourBar.colour) ? 'white' : 'black'}
                        isLocked={colourBar.locked}
                        copyToClipBoard={copyToClipBoard}
                        addColourBar={addColourBar}
                        colourBar={colourBar}
                        removeColourBar={removeColourBar}
                        toggleLock={() => toggleLock(colourBar.id)}
                    />
                </div>
            ))}
        </div>
    );
}

export default ColourPicker;
