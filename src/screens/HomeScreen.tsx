import React from 'react'
import { Text, Image, FlatList, ActivityIndicator, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { PokemonCard } from '../components/PokemonCard';


export const HomeScreen = () => {

    usePokemonPaginated();

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    console.log(simplePokemonList)

    return (
        <>
            <Image 
                source={ require('../assets/pokebola.png') }
                style={ styles.pokebolaBG }
            />

            <View
                style={{ alignItems:"center" }}
            >
                <FlatList 
                    data= { simplePokemonList }
                    keyExtractor= { ( pokemon ) => pokemon.id }
                    numColumns={2}

                    //Header
                    ListHeaderComponent={ (
                        <Text
                            style={{
                                ...styles.title,
                                ...styles.globalMargin,
                                top: top + 20,
                                marginBottom: top + 20
                            }}
                        >Pókedex</Text>
                    )}

                    renderItem= { ({ item }) => ( <PokemonCard pokemon={item} /> )}
                    
                    //infinity scroll
                    onEndReached= {loadPokemons}
                    onEndReachedThreshold={0.4}

                    //activity indicator
                    ListFooterComponent={ (
                        <ActivityIndicator 
                            style={{height: 40}}
                            size={35}
                            color="grey"
                        />) }
                />
            </View>
        </>
    )
}
