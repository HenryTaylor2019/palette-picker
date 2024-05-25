import { useCallback, useEffect, useState } from 'react';
import colorPalettes from '../colourPalettes';
import ColourPicker from '../components/ColourPicker';
import Header from '../components/Header';
import '../index.css';
import { getRandomIndex } from '../utils/getRandomIndex';
import { isDarkBackground } from '../utils/helper';



// 3. Assign spacebar to randomise colours

// 5. Allow to lock colours
// 6. Allow removal of colours
// 7. Change font colour based on light or darkness

// Extras
// Display list of pallets 
// Make jobs board

function HomePage() {
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

        window.addEventListener('keydown', handleSpacebar);

        return () => {
            window.removeEventListener('keydown', handleSpacebar);
        };
    }, [generateRandomColour, handleSpacebar]);

    const addColourBar = useCallback((id) => {
        const newColour = generateRandomColour();
        setColourBars((prevColourBars) => {
            const newColourBars = [...prevColourBars];
            newColourBars.splice(id + 1, 0, { id: Date.now(), colour: newColour });
            return newColourBars;
        });
    }, [generateRandomColour]);

    const generatePopularPalette = () => {
        let randomIndex = getRandomIndex(colorPalettes.length)
        setColourBars(colorPalettes.map(color => color[randomIndex]));
    }

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

    return (
        <div className='h-[93vh]'>
            <Header text="Press space to randomise colours" generatePopularPalette={generatePopularPalette} />
            <ColourPicker
                colourBars={colourBars}
                addColourBar={addColourBar}
                removeColourBar={removeColourBar}
                isDarkBackground={isDarkBackground}
                toggleLock={toggleLock}
            />
        </div>
    );
}

export default HomePage;
