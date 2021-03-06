import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import Forecast from './Forcast'

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=4109df8c0d91aa5abf61831a042cde8c`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    feelslike: json.main.feelslike
                });
                })
            .catch((error) => {
                console.warn(error);
                });
        }

        }, [props.zipCode])
       
    const [forecastInfo, setForecastInfo] = useState({
        main: ' ',
        description: ' ',
        temp: 0,
        feelslike : 0,

        })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text>Zip Code is {props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
   }
   
        const styles = StyleSheet.create({
        backdrop:{
            
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width: '100%',
            height: '100%',
            
            },
            
   }
   )
   