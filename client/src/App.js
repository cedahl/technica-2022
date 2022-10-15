import React from 'react';


const App = () => {
    return (
        <div>
            <h1>Welcome to DigiCache!</h1>
            <h4>What's your name?</h4>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default App;