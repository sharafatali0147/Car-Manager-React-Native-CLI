import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PURCHASE_OF_SPARE_PARTS } from '../../redux/constants/ExpTypeConstants'
import DataAdder from './DataAdder'

const PurchaseOfSpareParts = ({navigation}) => {
    return (
        <View>
            <DataAdder expType={PURCHASE_OF_SPARE_PARTS} navigation={navigation}/>
        </View>
    )
}

export default PurchaseOfSpareParts

const styles = StyleSheet.create({})
