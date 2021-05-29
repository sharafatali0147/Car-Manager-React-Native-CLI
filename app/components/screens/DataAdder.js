import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TextInput, ActivityIndicator, TouchableOpacity} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo  from 'react-native-vector-icons/Entypo'; 
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import { Image, Button } from 'react-native-elements'

import Colors from '../constants/Colors';
import { addCarExpanses } from '../../redux/actions/actions';

const DataAdder = ({expType, navigation}) => {
    // const { expType, navigation } = props;

    console.log(expType);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    
    const [btnLoading, setBtnLoading] = useState(false);
    const [ID, setFuelID] = useState(1);
    // get from redux from user profile
    const [carNumberPlate, setcarNumberPlate] = useState('default');
    const [date, setDate] = useState('Apr 25 2021');
    const [Cost, setfuelCost] = useState(0);
    const [odoMeter, setOdoMeter] = useState(0);
    const [fuelInvoice, setFuelInvoice] = useState();
    const [image, setImage] = useState();
    console.log("image from hooks: ", image);
    const refRBSheet = useRef();

    const addHandler = () => {
       const data = {
            expType: expType,
            ID: ID,
            slipDate: date,
            cost: Cost,
            odoMeter: odoMeter,
            image: image
        }
        
        addCarExpanses(data, navigation)
     };

    // ================= cam and RBSheet ===========
    const options = [
        {
            name: 'Take from camera',
            icon: <Entypo name='camera' size={Colors.iconeSize} color={Colors.btnColor} />,
            onPress: () => {
                ImagePicker.openCamera({
                    width: 300,
                    height: 400,
                    cropping: true,
                }).then(image => {
                    setImage(image.path) // call props
                    console.log(image); 
                }).catch((error) => console.log("error from openCamera: ", error)).finally(() => {
                    refRBSheet.current.close();
                });
            }
        },
        {
            name: 'Choose from Gallery',
            icon: <Entypo name='image' size={Colors.iconeSize} color={Colors.btnColor} />,
            onPress: () => {
                ImagePicker.openPicker({
                    width: 300,
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                }).then((image) => {
                    setImage(image.path) //call props
                    console.log(image);
                }).catch((error) => console.log("error from openCamera: ", error)).finally(() => {
                    refRBSheet.current.close();
                });
            }
        }
    ]

// ======== Date ==================

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (dateParam) => {
        // console.warn("A date has been picked: ", date);
        const mdate = dateParam.toString().split(" ");
        // setDate(mdate[1] + " " + mdate[2] + ", " + mdate[3])
        hideDatePicker();
    };
    // ======== End Date ==================

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity
                    onPress={showDatePicker}
                >
                    <Fontisto name='date' size={Colors.iconeSize} color={Colors.btnColor} />
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <View style={styles.childContainer}>
                    <TouchableOpacity
                    onPress={showDatePicker}
                    >
                        
                    <Text style={styles.heading}>{ date }</Text>
                </TouchableOpacity>
                </View>
               
            </View>
            <View style={styles.subContainer}>
                <MaterialCommunityIcons name='cash-plus' size={Colors.iconeSize} color={Colors.btnColor} />
                <View style={styles.childContainer}>
                    <Text style={styles.heading}>Total cost: </Text>
                    <TextInput
                        placeholder="Rs 100"
                        keyboardType='numeric'
                        onChangeText={(e) => setfuelCost(e)}
                    />
                </View>
            </View>
            <View style={styles.subContainer}>
                <MaterialCommunityIcons name='speedometer' size={Colors.iconeSize} color={Colors.btnColor} />
                <View style={styles.childContainer}>
                    <Text style={styles.heading}>Odometer</Text>
                    <TextInput
                        placeholder="100km"
                        keyboardType='numeric'
                        onChangeText={(e) => setOdoMeter(e)}
                    />
                </View>
            </View>
            <View style={styles.addSlip}>
                <TouchableOpacity
                    onPress={() => refRBSheet.current.open()}
                >
                    <Text style={styles.heading}>Add Slip</Text>
                </TouchableOpacity>
                {image &&
                    <Image
                        source={{ uri: image }}
                        style={{width: 150, height: 150}}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                }
            </View>
            <View
                style={styles.btn}
            >
                <Button
                    onPress={addHandler}
                    title='Add'
                    // loading
                    color= {Colors.btnColor}
                />
            </View>
            <RBSheet
                ref={ refRBSheet }
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
            
        </View>
    )
}

export default DataAdder

const styles = StyleSheet.create({
    container: {
        padding: '7%',
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '5%'
    },
    childContainer: {
        paddingHorizontal: '10%',
    },
    heading: {
        color: 'gray',
        fontSize: 17,
    },
    btn: {
        paddingTop: '7%',
    },
    addSlip: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerOption: {
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
    },

    optionsWrapper: {
        paddingHorizontal: 20,
    },

    text: {
        fontSize: 17,
        paddingLeft: 17,
    },
    containerImage: {
        flex: 1,
        margin: 10
    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    }
})
