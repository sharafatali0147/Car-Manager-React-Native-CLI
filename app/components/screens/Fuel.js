import React from "react";
import { StyleSheet, View, } from 'react-native'
import { FUEL_REFUELING } from "../../redux/constants/ExpTypeConstants";
import DataAdder from './DataAdder';

const Fuel = ({navigation}) => {

    return (
        <View>
            <DataAdder expType={FUEL_REFUELING} navigation={navigation} />
        </View>
    )
}

export default Fuel

const styles = StyleSheet.create({})
