import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import React from 'react';

const MapComponent = () => {
    // Coordinates for Thapar University, Patiala
    const thaparUniversityCoords = {
        latitude: 30.3350, // Latitude
        longitude: 76.3844, // Longitude
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: thaparUniversityCoords.latitude,
                    longitude: thaparUniversityCoords.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: thaparUniversityCoords.latitude,
                        longitude: thaparUniversityCoords.longitude,
                    }}
                    title="Thapar University"
                    description="Patiala, Punjab, India"
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex:-10,
    },
    map: {
        zIndex:-10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default MapComponent;