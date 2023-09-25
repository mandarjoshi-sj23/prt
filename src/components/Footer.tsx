import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Footer(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Stay Connected</Text>
      <View style={styles.buttonView}>
        <IconButton
          style={styles.iconbutton}
          icon={() => <Zocial color="#ffffff" name="facebook" />}
        />
        <IconButton
          style={styles.iconbutton}
          icon={() => <Zocial color="#ffffff" name="twitter" />}
        />
        <IconButton
          style={styles.iconbutton}
          icon={() => <Zocial color="#ffffff" name="linkedin" />}
        />
        <IconButton
          style={styles.iconbutton}
          icon={() => <Zocial color="#ffffff" name="instagram" />}
        />
      </View>
      <Text
        style={{
          color: '#ffffff',
          fontWeight: 'bold',
          marginTop: 20,
          fontSize: 20,
        }}>
        Join Our Newsletter
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder="Your Email" value="" style={styles.input} />
        <Button textColor="#ffffff" style={styles.button}>
          <MaterialIcons name="mail-outline" /> join
        </Button>
      </View>
      <View style={{ gap: 10}}>
        <Text style={[styles.text, { marginTop: 50, fontWeight: 'bold' }]}>Portable Restroom Trailers, LLC.</Text>
        <Text style={styles.text}>4607 Charlotte Hwy Ste 11</Text>
        <Text style={styles.text}>Lake Wylie, SC 29710</Text>
        <Text style={[styles.text, {marginTop: 40 }]}>Phone: 877-600-8645</Text>
        <Text style={styles.text}>Fax: 803-526-7669</Text>
        <Text style={[styles.text, {marginTop: 40 }]}>Videos</Text>
        <Text style={styles.text}>Resources</Text>
        <Text style={styles.text}>Blog</Text>
        <Text style={styles.text}>About Us</Text>
        <Text style={styles.text}>Testimonials</Text>
        <Text style={styles.text}>Buy Back Policy</Text>
        <Text style={[styles.text, {marginTop: 40 }]}>Our Clients</Text>
        <Text style={styles.text}>Contact Us</Text>
        <Text style={styles.text}>Locations</Text>
        <Text style={styles.text}>Municipalities</Text>
        <Text style={styles.text}>Smarter Restrooms</Text>
        <Text style={styles.text}>App</Text>
        <Text style={styles.text}>Our Team</Text>
        <Text style={[styles.text, {marginTop: 40 }]}>Become a Partner</Text>
        <Text style={styles.text}>Get Into the Business</Text>
        <Text style={styles.text}>Delivery Information</Text>
        <Text style={styles.text}>Sell / Trade</Text>
        <Text style={styles.text}>Lease to Own</Text>
        <Text style={styles.text}>Platinum Membership</Text>
        <Text style={styles.text}>2023 Product Guide</Text>
        <Text style={styles.text}>Green Restroom Trailer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 100
  },
  iconbutton: {
    backgroundColor: '#92062c',
  },
  button: {
    backgroundColor: '#92062c',
    height: 40,
    alignSelf: 'flex-end',
    marginLeft: -50,
    fontSize: 20,
  },
  buttonView: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '98%',
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderRadius: 25,
    padding: 10,
  },
  text: {
    color: '#bbbbbb',
    fontSize: 18,
  },
});

export default Footer;
