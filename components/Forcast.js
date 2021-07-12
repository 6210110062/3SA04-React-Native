import React from 'react'
import { View ,Text } from 'react-native'

export default function Forecast(props) {
    return (

        <View>
            <Text>{props.main}main</Text>
            <Text>{props.description}description</Text>
            <Text>{props.temp}°C</Text>
             
        </View>
            


    )
   }