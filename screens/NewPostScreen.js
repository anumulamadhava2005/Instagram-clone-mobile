import React from 'react'
import { View } from 'react-native'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1
        }}>
            <AddNewPost/>
        </View>
    )
}

export default NewPostScreen
