import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import GamesGridTile from '../../components/GamesGridTile';

import {useSelector} from 'react-redux';

const AllGamesScreen = props => {
    const games = useSelector(state => state.games.games);
    const renderGridItem = (itemData) => {
        return <GamesGridTile 
        title = {itemData.item.title}
        matches = {itemData.item.matches}
        series = {itemData.item.series}
        curr = {itemData.item.curr}
        max = {itemData.item.max}
        closeDisplay = {itemData.item.closeDisplay}
        onSelect = {() => {
            props.navigation.navigate({ routeName: 'Game', params:{
                gameid: itemData.item.id
            } })
        }}/>
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            data={games}
            renderItem={renderGridItem} />
    );
};

AllGamesScreen.navigationOptions = {
    headerTitle: ' '
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AllGamesScreen;