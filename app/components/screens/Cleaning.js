import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CLEANING } from '../../redux/constants/ExpTypeConstants'
import DataAdder from './DataAdder'

const Cleaning = ({navigation}) => {
    return (
        <View>
            <DataAdder expType={ CLEANING } navigation={navigation}/>
        </View>
    )
}

export default Cleaning

const styles = StyleSheet.create({})
