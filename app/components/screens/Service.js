import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SERVICE } from '../../redux/constants/ExpTypeConstants'
import DataAdder from './DataAdder'

const Service = ({navigation}) => {
    return (
        <View>
            <DataAdder expType={SERVICE} navigation={navigation} />
        </View>
    )
}

export default Service

const styles = StyleSheet.create({})
