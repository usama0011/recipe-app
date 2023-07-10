import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { data } from '../Data/data';

const HomePage = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={22} color="gray" style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
          </View>
        </View>

        <View style={styles.imagesContainer}>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.row}
                onPress={() => navigation.navigate('Recipe', { item })}
              >
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.largeTitle}>{item.title}</Text>
                  <Text style={styles.code}>{item.code}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noItemsText}>No items found</Text>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth:1,
    borderColor:'gray',
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  imagesContainer: {
    paddingVertical: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    width: '50%',
    padding: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    marginTop: 10,
  },
  code: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#566c84',
    padding: 8,
    borderRadius: 10,
    color: 'white',
  },
  noItemsText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  largeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

export default HomePage;
