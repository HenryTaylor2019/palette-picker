import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import '../index.css';
import Toolbar from './Toolbar';

function ColourBar({ colour, setColour, textColor, isLocked, copyToClipBoard, addColourBar, removeColourBar, colourBar, toggleLock }) {
    const [toolsVisible, setToolsVisible] = useState(false);
    const toggleToolsView = () => {
        setToolsVisible(prevState => !prevState);
    };
    return (
        <>
            <div style={{ backgroundColor: colour }} className="flex flex-col justify-center items-center h-full w-full">
                <div className="flex flex-col justify-center items-center w-full h-full relative">

                    {/* Need tp find a way to change the colour by id in parent */}
                    {/* <HexColorPicker color={colour} onChange={setColour} /> */}


                    <h2 className='poppins-semibold text-2xl ' onClick={() => copyToClipBoard(colour)}
                        style={{ color: textColor }}>{colour}
                    </h2>
                    <div className='h-24 w-full' onMouseEnter={toggleToolsView}>
                        {
                            toolsVisible ? (
                                <div className="flex h-24 justify-center items-center" onMouseLeave={toggleToolsView}>
                                    <Toolbar
                                        onAddColourBar={addColourBar}
                                        handleRemove={() => removeColourBar(colourBar.id)}
                                        isLocked={colourBar.locked}
                                        toggleLock={() => toggleLock(colourBar.id)}
                                    />
                                </div>
                            ) :
                                <div className='flex justify-center h-24 w-full'>
                                </div>
                        }
                    </div>
                    <div className='absolute bottom-2'>
                        {
                            isLocked && <LockIcon />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ColourBar;
