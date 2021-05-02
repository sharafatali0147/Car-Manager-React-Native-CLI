import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImagePickerCropper from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import Entypo  from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';
import styles from './ImagePickerStyle';


const ImagePIcker = React.forwardRef( ref => {
    const options = [
        {
            name: 'Take from camera',
            icon: <Entypo name='camera' size={Colors.iconeSize} color={Colors.btnColor} />,
            onPress: () => {
                console.log("Take from camera");
            }
        },
        {
            name: 'Choose from Gallery',
            icon: <Entypo name='image' size={Colors.iconeSize} color={Colors.btnColor} />,
            onPress: () => {
                console.log("Choose from Gallery");
            }
        }
    ]
    return (
        <RBSheet
            ref={ref}
            height={190}
            openDuration={250}
            dragFromTopOnly
            closeOnDragDown
            customStyles={{
                container: {
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                },
            }}
        >
            <View style={styles.optionsWrapper}>
                {
                    options.map(({ name, onPress, icon }) => (
                        <TouchableOpacity
                            onPress={onPress}
                            style={styles.pickerOption}
                            key={name}
                        >
                            {icon}
                            <Text style={styles.text}>{ name}</Text>
                        </TouchableOpacity>
                    ))
                }    
            </View>
      </RBSheet>
    )
});

export default ImagePIcker

