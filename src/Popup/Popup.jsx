import React from 'react';

const Popup = props => {
    return (
        <div className = "popup-box">
            <div className = "box"> 
                <button className = "btn-close">x</button>
                <p>This is my popup component</p>
            </div>
        </div>
    )
}

export default Popup;