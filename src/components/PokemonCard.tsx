import React from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get("window").width

interface Props{
    pokemon : SimplePokemon;
}

export const PokemonCard = ( { pokemon } : Props ) => {
    return (
        <TouchableOpacity>
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.43
            }}>
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <Image 
                    source={ require('../assets/pokebola-blanca.png') }
                    style={ styles.pokebola }
                />

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
        backgroundColor: "red",
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
    },
    name: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        top: 20,
        left: 10
    },
    pokebola: {
        width:85,
        height:85,
        position: "absolute",
        bottom: 2,
        left: 0,
        opacity: 0.3
    },
    pokemonImage:{
        width: 120,
        height: 120,
        position: "absolute",
        right: -8,

    }
});
