import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Text } from 'react-native'
import { RootStackParams } from '../navigator/Navigator'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};


export const PokemonScreen = ( { navigation, route }:Props ) => {

    const { simplePokemon, color } = route.params

    

    return (
        <>
            <Text>{ simplePokemon.name } - { color} </Text>
        </>
    )
}
