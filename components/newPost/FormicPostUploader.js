import React, { useState } from 'react'
import { View, Text } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the maximum limit')
})

const FormicPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl]= useState('https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg')
    return (
        <View>
            <Text style={{ color: 'white' }}>FormicPostUploader</Text>
        </View>
    )
}

export default FormicPostUploader
