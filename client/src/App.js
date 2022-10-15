import React from 'react';
import NameForm from './NameForm/NameForm';
import Map from './Map/Map';
import './index.css';

const App = () => {
    return (
        <div>
            <div class="shadow-md m-3 p-3 rounded-md">
                <h1 class="text-4xl text-center text-gray-700">Welcome to DigiCache!</h1>
            </div>
            <div class="m-2 p-5">
                <h4 class="text-3xl text-center">What's your name?</h4>
            </div>
            <NameForm />
            <Map />
        </div>
    );
}

export default App;