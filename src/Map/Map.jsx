import React from 'react';
import { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const center = {
    lat: 35.661777,
    lng: 139.704056
}

class MapContainer extends Component {
    render() {

        // Get current coordinates of user
        navigator.geolocation.getCurrentPosition(
            function (position) {
                initMap(position.coords.latitude, position.coords.longitude)
            },
            function errorCallback(error) {
                console.log(error)
            }
        );

        // Initialize map to center on user's coordinates
        function initMap(lat, lng) {
            var myLatLng = {
                lat,
                lng
            };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: myLatLng,
                style: { width: "80%", height: "70%" }
            });
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
            });
        }

        // Return initialized map as markup
        return (
            <div>
                <Map 
                google = {this.props.google}
                zoom = {16}
                initialCenter = {
                    center
                }
                style = {{width: "80%", height: "70%"}}
                >

                <Marker position = {
                    center
                }/>
                </Map>
            </div>
        );
    }
}

// Get current coordinates of user
function getCoords() {
    return navigator.geolocation.getCurrentPosition(
        function (position) {
            initMap(position.coords.latitude, position.coords.longitude)
        },
        function errorCallback(error) {
            console.log(error)
        }
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBcttJq8wwKqMUO2FOUJIJi0aVXkrnCcXc"
}) (MapContainer)