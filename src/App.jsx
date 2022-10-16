import React, {useState} from 'react';
import Popup from './Popup/Popup'
import NameForm from './NameForm/NameForm';
import Map from './Map/Map';
import './index.css';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div class = "text-center bg-yellow-300 p-3">
            <div class="text-center bg-white shadow-md mx-10 px-14 py-3 rounded-md">
                <h1 class="text-3xl text-gray-700">Welcome to DigiCache!</h1>
            </div>

            <p class="mt-5 text-xl">What's your name?</p>

            <NameForm />

        <div class = "flex justify-center">

            <div class="m-6">
                    <div class = "text-center">
                        <button class = "bg-blue-800 text-gray-100 min-w-min py-2 px-3" onClick = {togglePopup}>
                            Create Cache
                        </button>
                    </div>
                    
                    {isOpen && <Popup 
                        handleClose = {togglePopup}
                        content = {
                            <div> 
                                <h2>Create a cache here!</h2>
                                <p>Popup Cache</p>
                            </div>
                        }
                    />}
                </div>

                <div class="m-6">
                    <div class = "text-center">
                        <button class = "bg-blue-800 text-gray-100 min-w-min py-2 px-3" onClick = {togglePopup}>
                            Find New Cache
                        </button>
                    </div>
                    
                    {isOpen && <Popup 
                        handleClose = {togglePopup}
                        content = {
                            <div> 
                                <h2>Find new Cache?!</h2>
                                <p>Sure, why not?</p>
                            </div>
                        }
                    />}
                </div>
        </div>


            <Map />

        </div>
    );
}

export default App;