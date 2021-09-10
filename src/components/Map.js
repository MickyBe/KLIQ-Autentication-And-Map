import React from 'react'
import MapView,
{  Marker, Circle }
  from 'react-native-maps';
    import { StyleSheet, Dimensions } from 'react-native'
    

    const height = Dimensions.get('window').height

    const Map = () => {
      return (
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: 9.0404,
            longitude: 38.7633,
            latitudeDelta: 0.115,
            longitudeDelta: 0.0121
          }}
        >
            <Circle
            center={{ latitude: 9.0404,
                longitude: 38.7633 }}
            radius={1000}
            fillColor={'rgba(200, 300, 200, 0.5)'}
          />
          <Marker
            draggable
            coordinate={{ latitude: 9.0404,
                longitude: 38.7633 }}>
          </Marker>

        </MapView>
      )
    }

    const styles = StyleSheet.create({
      map: {
        height,
      }
    })

    export default Map