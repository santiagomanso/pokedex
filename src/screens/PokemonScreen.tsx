import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigator/Navigator'


import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};


export const PokemonScreen = ( { navigation, route }:Props ) => {

    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const {isLoading, pokemon} =  usePokemon( id )
    

    return (
       <View style={{flex: 1}}>
            {/*Header Container*/}
            <View style={{
                    ...styles.headerContainer,
                    backgroundColor: color
            }}>
            
                <TouchableOpacity
                    onPress={ ()=> navigation.pop() }
                    activeOpacity={0.92}
                    style={{
                        ...styles.backButton,
                        top: top + 10
                    }}
                >
                    <Icon name="arrow-back-outline" color="white" size={30}></Icon>
                </TouchableOpacity>

                {/* Pokemon Name */}    
                <Text style={{
                    ...styles.pokemonName,
                    top: top + 45
                }}>
                    { name + '\n' } #{id}
                </Text>

                {/* White Pokebol */}
                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={{
                        ...styles.pokeball
                    }}
                />

                {/* Pokemon Image */}
                <FadeInImage 
                    uri={ picture }
                    style={{
                        ...styles.pokemonImage
                    }}
                />

            </View>  

            {/* Details & loading*/}
            {
                isLoading 
                ? (
                    <View style={{
                        ...styles.loadingIndicator
                    }}>
                        <ActivityIndicator 
                            color={color}
                            size={50}
                        />
                    </View>
                )
                : <PokemonDetails pokemon={ pokemon } />
            }
            

        </View>
      
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: "center",
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000
    },
    backButton:{
        position: "absolute",
        size: 35,
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball:{
        width: 250,
        height: 250,
        bottom: -10,
        opacity: 0.7
    },
    pokemonImage:{
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -20
    },
    loadingIndicator:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})