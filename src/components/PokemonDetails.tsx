import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PokemonFull } from '../interfaces/pokemonInterfaces';


interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView 
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >
            <View style={{
                ...styles.container,
                marginTop:370
            }}>
                <Text style={ styles.title }> Types </Text>
                
                    {
                        pokemon.types.map( ({type}) =>(
                            <Text
                                style={ styles.regularText }
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
               
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold'
    },
    regularText:{
        fontSize: 20
    }
})
