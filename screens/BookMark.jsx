import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeBookmarks } from '../store/bookmarkSlice';

const BookMark = ({navigation}) => {
  const bookmarkedRecipes = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  const handleRemoveBookmark = (recipeId) => {
    dispatch(removeBookmarks(recipeId));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {bookmarkedRecipes.length > 0 ? (
            bookmarkedRecipes.map((item, i) => (
              <TouchableOpacity key={i} style={styles.recipeContainer} onPress={()=>navigation.navigate('Recipe',{item,})}>
                <Image style={styles.myImageShort} source={{ uri: item.image }} />
                <View style={styles.recipeTextContainer}>
                  <Text style={styles.recipeTitle}>{item.title}</Text>
                  <Text style={styles.code}>{item.code}</Text>
                </View>
                <Text
                  style={styles.removeButton}
                  onPress={() => handleRemoveBookmark(item.id)}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noItemsText}>No bookmarked recipes</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  myImageShort: {
    width: 50,
    height: 50,
  },
  recipeContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  code: {
    fontSize: 14,
    marginTop: 5,
  },
  removeButton: {
    fontSize: 14,
    color: 'red',
  },
  noItemsText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BookMark;
