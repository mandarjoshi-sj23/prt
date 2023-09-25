import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import Content from '../components/Content';
import AppbarComponent from '../components/Appbar';
import Products from '../components/Products';
import Footer from '../components/Footer';

function HomePage(): JSX.Element {
  return (
    <View style={styles.container}>
      <AppbarComponent />
      <ScrollView>
        {/* <Content /> */}
        <Products />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});

export default HomePage;
