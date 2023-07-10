import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarks, removeBookmarks } from '../store/bookmarkSlice';
import Ionicons from 'react-native-vector-icons/Ionicons'

const RecipeScreen = ({ route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmark);
  const isBookmarked = bookmarks.some((recipe) => recipe.id === item.id);

  // Create a checkbox state for each ingredient
  const [ingredientStates, setIngredientStates] = useState(
    item.ingredients.map(() => false)
  );

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmarks(item.id));
    } else {
      dispatch(addBookmarks(item));
    }
  };

  const handleCheckboxPress = (index) => {
    // Update the checkbox state for the specific ingredient
    const newIngredientStates = [...ingredientStates];
    newIngredientStates[index] = !newIngredientStates[index];
    setIngredientStates(newIngredientStates);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.recipeTitle}>{item.title}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.recipeImage} />
          <Text style={styles.largeTitle}>{item.title}</Text>
          <Text style={styles.code}>{item.code}</Text>
          <View style={styles.ingredientsContainer}>
            <Text style={styles.sectionTitle}>Ingredients:</Text>
            {item.ingredients.map((ingredient, index) => (
              <View key={index} style={styles.ingredientContainer}>
                <CheckBox
                  checked={ingredientStates[index]}
                  onPress={() => handleCheckboxPress(index)}
                />
                <Text style={styles.ingredientText}>
                  {ingredient.name} - {ingredient.quantity}
                </Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.bookmarkButton} onPress={handleBookmark}>
            {isBookmarked ? <Ionicons name="bookmark" size={20} color="white" /> : <Ionicons name="bookmark-outline" size={20} color="white" />}
            <Text style={styles.bookmarkButtonText}>
              {isBookmarked ? 'Remove from Bookmarks' : 'Add to Bookmarks'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;

// Styles...

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    recipeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageContainer: {
        flex: 1,
        marginTop: 20,
        padding: 10
    },
    recipeImage: {
        width: '100%',
        height: 250,
        marginBottom: 10,
    },
    largeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    code: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#566c84',
        padding: 8,
        borderRadius: 10,
        width: 70,
        textAlign: 'center',
        color: 'white',
    },
    bookmarkButton: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d3983f',
        elevation: 6,
        textAlign:'center',
        justifyContent:'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    bookmarkButtonText: {
        fontSize: 16,
        padding: 8,
        fontWeight: 'bold',
        color: 'white',
    },
    ingredientsContainer: {
        marginTop: 20,
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      ingredientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      ingredientText: {
        marginLeft: 10,
        fontSize: 14,
      },
});

