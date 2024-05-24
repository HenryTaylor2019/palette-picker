import { useEffect, useState } from 'react';
import '../index.css';
import ColourBar from './ColourBar';

function ColourPicker() {
    const letters = '0123456789ABCDEF';
    const [colourBars, setColourBars] = useState([]);

    useEffect(() => {
        // Initialize with three color bars on component mount
        const initialColourBars = Array.from({ length: 3 }, (_, index) => {
            const colour = generateRandomColour();
            return { id: index, colour };
        });
        setColourBars(initialColourBars);
    }, []); // Empty dependency array to run this effect only once on mount

    const generateRandomColour = () => {
        let newHex = '#';
        for (let i = 0; i < 6; i++) {
            newHex += letters[Math.floor(Math.random() * 16)];
        }
        return newHex;
    };

    const switchColour = (id) => {
        setColourBars(colourBars.map(bar =>
            bar.id === id ? { ...bar, colour: generateRandomColour() } : bar
        ));
    };

    const addColourBar = () => {
        const newColour = generateRandomColour();
        setColourBars([...colourBars, { id: Date.now(), colour: newColour }]);
    };

    const removeColourBar = (id) => {
        setColourBars(colourBars.filter(bar => bar.id !== id));
    };

    return (
        <div className="flex justify-center align-items-center m-10">
            {colourBars.map((colourBar) => (
                <div key={colourBar.id}>
                    <ColourBar
                        colour={colourBar.colour}
                        switchColour={() => switchColour(colourBar.id)}
                        removeColourBar={() => removeColourBar(colourBar.id)}
                    />
                </div>
            ))}
            <div className='flex justify-center items-end h-20 w-20'>
                <button onClick={addColourBar} className='text-4xl'>+</button>
            </div>
        </div>
    );
}

export default ColourPicker;
