import React from 'react';
import { Component } from "react";
import NameForm from './NameForm/NameForm';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
class MapContainer extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to DigiCache!</h1>
                <h4>What's your name?</h4>
                <NameForm />
                <Map 
                google = {this.props.google}
                zoom = {16}
                initialCenter = {{
                    lat: 35.661777,
                    lng: 139.704056
                }}
                style = {{width: "45%", height: "70%"}}
                >

                <Marker position = {{
                    lat: 35.661777,
                    lng: 139.704056
                }}/>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBcttJq8wwKqMUO2FOUJIJi0aVXkrnCcXc"
}) (MapContainer)