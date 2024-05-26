import ColourPicker from '../components/ColourPicker';
import Header from '../components/Header';
import '../index.css';

function HomePage({ generatePopularPalette, colourBars, addColourBar, removeColourBar, isDarkBackground, toggleLock }) {
    return (
        <>
            <Header text="Press space to randomise colours" generatePopularPalette={generatePopularPalette} />
            <ColourPicker
                colourBars={colourBars}
                addColourBar={addColourBar}
                removeColourBar={removeColourBar}
                isDarkBackground={isDarkBackground}
                toggleLock={toggleLock}
            />
        </>
    );
}

export default HomePage;
