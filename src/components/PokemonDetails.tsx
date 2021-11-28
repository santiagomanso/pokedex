import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';


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
            {/* Type and Weight */}
            <View style={{
                ...styles.container,
                marginTop:370
            }}>              
                <Text style={ styles.title }>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                        
                    {
                        pokemon.types.map( ({type}) =>(
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                 }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
               </View>
               
            </View>
           
            
            
            <View style={ styles.container }>
                <Text style={ styles.title }>Sprites </Text>
            </View>

            <ScrollView 
                horizontal={true}

            >
                <FadeInImage 
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage 
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />
                <FadeInImage 
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage 
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>

            {/* Abilities */}
            <View style={styles.container}>              
                <Text style={ styles.title }>Basic Abilities</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map( ({ability}) =>(
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                 }}
                                key={ability.name}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
               </View>
            </View>

            {/* stats */}
            <View style={styles.container}>              
                <Text style={ styles.title }>Stats</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.stats.map( ({stat}) =>(
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                 }}
                                key={stat.name}
                            >
                                {stat.name}
                            </Text>
                        ))
                    }
               </View>
            </View>   

                

            {/* movements */}
            <View style={styles.container}>              
                <Text style={ styles.title }>Movements</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map( ({move}) =>(
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                 }}
                                key={move.name}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
               </View>
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
        fontWeight: 'bold',
        marginTop: 10
    },
    regularText:{
        fontSize: 20
    },
    basicSprite:{
        width: 100,
        height: 100,

    }
})
