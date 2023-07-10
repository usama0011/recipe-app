import { View, Text, SafeAreaView, ScrollView,StyleSheet } from 'react-native'
import React from 'react'

const Grocries = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text>Grocries</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Grocries
const styles = StyleSheet.create({
   container:{
    padding:10
   }
})