import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/core';
import { PokemonScreen } from '../screens/PokemonScreen';
const windowWidth = Dimensions.get("window").width

interface Props{
    pokemon : SimplePokemon;
}

export const PokemonCard = ( { pokemon } : Props ) => {

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);
    const navigation = useNavigation<any>();

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, {fallback: 'grey'})
        .then( colors => {

            //check if the component it's not mounted, just return.
            if (!isMounted.current) return;

            (colors.platform === 'android')
                ? setBgColor ( colors.muted || 'grey' )
                : null
        })

        return () => {
            isMounted.current = false;
        }

    }, [])

    return (
        <TouchableOpacity 
                activeOpacity={0.92}
                onPress = { ()=> navigation.navigate('PokemonScreen', { 
                    simplePokemon: pokemon,
                    color: bgColor
                })}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.43,
                backgroundColor : bgColor
            }}>
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={ styles.pokebolaContainer }>
                    <Image 
                        source={ require('../assets/pokebola-blanca.png') }
                        style={ styles.pokebola }
                    />
                </View>
                

                <FadeInImage 
                    uri={ pokemon.picture }
                    style={ styles.pokemonImage }
                />

            </View>
            
            
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        //backgroundColor: "grey", now it's done trough useState
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,  
        
    },
    name: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        top: 20,
        left: 10
    },
    pokebola: {
        //backgroundColor:'green',
        width:95,
        height:95,
        position: 'absolute',
        right: -10
    },
    pokemonImage:{
        width: 120,
        height: 120,
        position: "absolute",
        right: -8,

    },
    pokebolaContainer:{
        //backgroundColor: 'blue',
        width: 100,
        height: 100,
        position: "absolute",
        bottom: -15, 
        right: 5,
        opacity: 0.3
    }
});
