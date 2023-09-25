import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Products(): JSX.Element {
  return (
    <View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Purchase or Rent</Text>
        <TextInput style={styles.input} />
        <Text style={styles.filterText}>Stations</Text>
        <TextInput style={styles.input} />
        <Text style={styles.filterText}>Federal ADA Complient</Text>
        <TextInput style={styles.input} />
        <Text style={styles.filterText}>Product ID</Text>
        <TextInput style={styles.input} />
        <Button mode="contained" contentStyle={{ marginTop: 5 }} style={styles.button}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <MaterialIcons size={16} color='white' name="search" />
            <Text style={{ color: 'white' }}>Search</Text>
          </View>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: 'black',
    margin: 15,
    padding: 15,
  },
  filterText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  input: {
    height: 40,
    width: '98%',
    backgroundColor: '#ffffff',
    marginTop: 5,
    padding: 10,
    alignSelf: 'center',
  },
  button: {
    height: 40,
    backgroundColor: '#92062c',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Products;
