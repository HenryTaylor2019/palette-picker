import { useCallback, useEffect, useState } from 'react';
import '../index.css';
import ColourBar from './ColourBar';

function ColourPicker() {
    const letters = '0123456789ABCDEF';
    const [colourBars, setColourBars] = useState([]);

    const generateRandomColour = useCallback(() => {
        let newHex = '#';
        for (let i = 0; i < 6; i++) {
            newHex += letters[Math.floor(Math.random() * 16)];
        }
        return newHex;
    }, [letters]);

    const randomizeAllColours = useCallback(() => {
        setColourBars((prevColourBars) =>
            prevColourBars.map(bar =>
                bar.locked ? bar : { ...bar, colour: generateRandomColour() }
            )
        );
    }, [generateRandomColour]);

    const handleSpacebar = useCallback((event) => {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent default spacebar behavior (like scrolling)
            randomizeAllColours();
        }
    }, [randomizeAllColours]);

    useEffect(() => {
        // Initialize with five color bars on component mount
        const initialColourBars = Array.from({ length: 5 }, (_, index) => ({
            id: index,
            colour: generateRandomColour(),
        }));
        setColourBars(initialColourBars);

        // Add event listener
        window.addEventListener('keydown', handleSpacebar);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('keydown', handleSpacebar);
        };
    }, [generateRandomColour, handleSpacebar]);

    // const switchColour = useCallback((id) => {
    //     setColourBars((prevColourBars) =>
    //         prevColourBars.map(bar =>
    //             bar.id === id ? { ...bar, colour: generateRandomColour() } : bar
    //         )
    //     );
    // }, [generateRandomColour]);

    const addColourBar = useCallback((id) => {
        const newColour = generateRandomColour();
        setColourBars((prevColourBars) => {
            const newColourBars = [...prevColourBars];
            newColourBars.splice(id + 1, 0, { id: Date.now(), colour: newColour });
            return newColourBars;
        });
    }, [generateRandomColour]);

    const removeColourBar = useCallback((id) => {
        setColourBars((prevColourBars) =>
            prevColourBars.filter(bar => bar.id !== id)
        );
    }, []);

    const toggleLock = useCallback((id) => {
        setColourBars((prevColourBars) =>
            prevColourBars.map(bar =>
                bar.id === id ? { ...bar, locked: !bar.locked } : bar
            )
        );
    }, []);

    // Calculate the text color based on the darkness of the background color
    const isDarkBackground = (color) => {
        const rgb = parseInt(color.substring(1), 16); // Convert hex to decimal
        const r = (rgb >> 16) & 0xff; // Extract red
        const g = (rgb >> 8) & 0xff; // Extract green
        const b = (rgb >> 0) & 0xff; // Extract blue
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // Calculate luma
        return luma < 128; // Return true if the background is dark
    };

    return (
        <>
            <h1>Click Space to Randomise Colours</h1>
            <div className='flex justify-center items-center w-full'>
                <div className="flex mt-10 w-full relative">
                    {colourBars.map((colourBar, index) => (
                        <div key={colourBar.id} className='w-full relative'>
                            <ColourBar
                                colour={colourBar.colour}
                                removeColourBar={() => removeColourBar(colourBar.id)}
                                textColor={isDarkBackground(colourBar.colour) ? 'white' : 'black'}
                                onAddColourBar={() => addColourBar(index)}
                                toggleLock={() => toggleLock(colourBar.id)}
                                isLocked={colourBar.locked}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ColourPicker;
