import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, Divider, IconButton, Searchbar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function AppbarComponent(): JSX.Element {
  const [menuVisible, setmenuVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={{width: '40%', height: 50}}>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableThemeMobile/en_US/images/Updated-logo.png',
            }}
          />
        </View>
        <View style={styles.topRightView}>
          <Button mode="contained" style={styles.callus}>
            <FontAwesome name="phone" />
            {'  Call Us'}
          </Button>
          <IconButton
            onPress={() => setmenuVisible(!menuVisible)}
            iconColor="#92062c"
            icon={menuVisible ? 'close' : 'menu'}
          />
        </View>
      </View>
      <Searchbar
        placeholder="Search entire store here"
        style={{margin: 15}}
        value=""
      />
      {menuVisible && (
        <View style={styles.drawermenu}>
          <View style={styles.flatlist}>
            <FlatList
              data={[
                'Home',
                'Products',
                'Large ADA Restrooms',
                'Available Now',
                'Shower and Laundry',
                'Used Restrooms',
                'Restroom Rentals',
              ]}
              renderItem={({item}) => (
                <View>
                  <Text style={styles.menuText}>{item}</Text>
                  <Divider />
                </View>
              )}
            />
            <View style={styles.menuBottom}>
              <Text>
                <FontAwesome size={15} name="phone" />
                {' 8-77--600--8645'}
              </Text>
              <Image
                resizeMode="contain"
                style={{width: '40%', height: 50}}
                source={{
                  uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableTheme/en_US/images/sba-logo.jpg',
                }}
              />
              <Image
                resizeMode="contain"
                style={{width: '25%', height: 50}}
                source={{
                  uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableTheme/en_US/images/ytimg.png',
                }}
              />
              <Button mode="contained" style={styles.callus}>
                Request a Quote
              </Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  topView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  callus: {
    height: 40,
    backgroundColor: '#92062c',
  },
  topRightView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawermenu: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'white',
  },
  flatlist: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.2,
  },
  menuText: {
    margin: 20,
    color: '#92062c',
    fontWeight: '700',
  },
  menuBottom: {
    padding: 20,
  },
});

export default AppbarComponent;
