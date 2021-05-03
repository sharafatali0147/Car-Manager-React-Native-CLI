import React from "react";
import { StyleSheet, View, } from 'react-native'
import { MAINTENANCE } from "../../redux/constants/ExpTypeConstants";
import DataAdder from "./DataAdder";

const Maintenance = ({navigation}) => {

    return (<View>
        <DataAdder expType={ MAINTENANCE } navigation={navigation} />
    </View>)
}

export default Maintenance

const styles = StyleSheet.create({})
