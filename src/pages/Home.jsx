import ColourPicker from '../components/ColourPicker';
import Header from '../components/Header';
import '../index.css';


// 3. Assign spacebar to randomise colours

// 5. Allow to lock colours
// 6. Allow removal of colours
// 7. Change font colour based on light or darkness

// Extras
// Display list of pallets 
// Make jobs board

function HomePage({ generatePopularPalette, colourBars, addColourBar, removeColourBar, isDarkBackground, toggleLock }) {

    return (
        <div className='h-[80vh]'>
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
