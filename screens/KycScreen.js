import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const KycScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Kyc Screen</Text>
        </View>
    );
};

KycScreen.navigationOptions = data => {return {
    headerTitle: 'KYC'  
   };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default KycScreen;