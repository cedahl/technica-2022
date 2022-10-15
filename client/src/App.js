import React from 'react';
import { Component } from "react";
import NameForm from './NameForm/NameForm';
import {Map, GoogleApiWrapper} from 'google-maps-react'
class MapContainer extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to DigiCache!</h1>
                <h4>What's your name?</h4>
                <NameForm />
                <Map 
                google = {this.props.google}
                style = {{width: "45%", height: "70%"}}
                zoom = {13}
                initialCenter = {{
                    lat: 35.661777,
                    lng: 139.704056
                }}/>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBcttJq8wwKqMUO2FOUJIJi0aVXkrnCcXc"
}) (MapContainer)