import '../index.css';

function ColourBar({ switchColour, colour, removeColourBar }) {

    const handleRemove = (e) => {
        e.stopPropagation(); // Prevent event bubbling to avoid triggering switchColour
        removeColourBar(); // Call the removeColourBar function from the parent
    };


    return (
        <div style={{ backgroundColor: colour }} onClick={switchColour} className="flex justify-center items-center border-1 h-96 w-36">
            <div className='h-2'>
                <button onClick={handleRemove} className='bg-white w-10'>-</button>
            </div>

            {/* <div className="bg-white w-full flex justify-center">
                <p>{colour}</p>
            </div> */}
        </div>
    );
}

export default ColourBar;
