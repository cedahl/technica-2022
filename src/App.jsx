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
        <div>
            <div class="shadow-md m-3 p-3 rounded-md">
                <h1 class="text-4xl text-center text-gray-700">Welcome to DigiCache!</h1>
            </div>

            <div class="m-2 p-5">
                <h4 class="text-3xl text-center">What's your name?</h4>
            </div>

            <NameForm />


            <div>
                <div class = "px-96 text-center">
                    <button class = "min-w-min bg-gray-200 p-1" onClick = {togglePopup}>
                        Create Cache!
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

            <Map />
        </div>
    );
}

export default App;