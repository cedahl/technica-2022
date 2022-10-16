import React from 'react';
import { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import '../index.css';
const center = {
    lat: 35.661777,
    lng: 139.704056
}

class MapContainer extends Component {
    render() {
        return (
            <div class = "self-center mt-11">
                <Map 
                google = {this.props.google}
                zoom = {16}
                initialCenter = {
                    center
                }
                style = {{width: "75%", height: "60%", left: '11%',
            }}>

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