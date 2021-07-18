import React from 'react'
import { View ,Text,StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (

        <View>
            <Text>{props.main}main</Text>
            <Text>{props.description}description</Text>
            <Text>{props.temp}°C</Text>
            <Text>feel like: {props.feelslike} °C </Text>
             
        </View>
            


    )
   }