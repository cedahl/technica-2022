import React from 'react';
import NameForm from './NameForm/NameForm';
import Map from './Map/Map';


const App = () => {
    return (
        <div>
            <h1>Welcome to DigiCache!</h1>
            <h4>What's your name?</h4>
            <NameForm />
            <Map />
        </div>
    );
}

export default App;