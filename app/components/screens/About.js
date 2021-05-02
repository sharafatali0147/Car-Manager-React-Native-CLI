import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Header from '../Components/Header';
// import Theme from '../Constants/Theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconF from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import Heading from '../Components/Heading';
const grey = 'grey';
const btnColor = '#508abb';
const fontFamily = 'GothamRounded';
const mailIcon = <IconF name="email" size={40} color={btnColor} />;
const phoneIcon = <Icon name="phone-square" size={40} color={btnColor} />;

const About = props => {
  return (
    <View>
      {/* <Header navigation={props.navigation} /> */}
      {/* <Heading text="About Us" /> */}
      <Text style={styles.heading}>About Us</Text>
      <View style={styles.container}>
        <Text style={{color: grey, textAlign: 'left'}}>
          A contact form represents an opportunity for web app users to address
          the web app owner or team. As a rule, “contact us” pages use the email
          method for communication.
        </Text>
        <View style={styles.emailContainer}>
          {mailIcon}
          <View style={styles.email}>
            <Text style={styles.textFont}>Email:</Text>
            <Text style={styles.textFont}>sharafatali0147@gmail.com</Text>
          </View>
        </View>
        <View style={styles.phoneContainer}>
          {phoneIcon}
          <View style={styles.phone}>
            <Text style={styles.textFont}>Phone:</Text>
            <Text style={styles.textFont}>0312 1460010</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: btnColor,
    alignSelf: 'center',
    marginVertical: '10%',
    marginBottom: '5%',
  },
  container: {
    paddingHorizontal: '8%',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  contactUs: {
    fontSize: 18,
    fontWeight: 'bold',
    color: btnColor,
    fontFamily: fontFamily,
    alignSelf: 'center',
    marginVertical: '10%',
    marginHorizontal: '5%',
  },
  emailContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneContainer: {
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 3,
  },
  phone: {
    flexDirection: 'column',
    paddingStart: '10%',
  },
  email: {
    flexDirection: 'column',
    paddingStart: '10%',
  },
  textFont: {
    fontSize: 14,
    color: grey,
  },
});
