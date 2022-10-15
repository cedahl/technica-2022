import React from 'react';
import { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const center = {
    lat: 35.661777,
    lng: 139.704056
}

class MapContainer extends Component {
    render() {
        return (
            <div>
                <Map 
                google = {this.props.google}
                zoom = {16}
                initialCenter = {
                    center
                }
                style = {{width: "45%", height: "70%"}}
                >

                <Marker position = {
                    center
                }/>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBcttJq8wwKqMUO2FOUJIJi0aVXkrnCcXc"
}) (MapContainer)