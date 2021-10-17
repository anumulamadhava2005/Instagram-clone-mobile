import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/Posts'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView>
                <Stories/>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabIcons}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})

export default HomeScreen
