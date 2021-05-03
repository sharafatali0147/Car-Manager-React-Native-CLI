import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ENGINE_TUNING } from '../../redux/constants/ExpTypeConstants'
import DataAdder from './DataAdder'

const EngineTuning = ({navigation}) => {
    return (
        <View>
            <DataAdder expType={ENGINE_TUNING} navigation={navigation}/>
        </View>
    )
}

export default EngineTuning

const styles = StyleSheet.create({})
