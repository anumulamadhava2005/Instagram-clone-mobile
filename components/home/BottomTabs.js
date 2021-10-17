import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/144/ffffff/home.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png'
    },
    {
        name: 'Notifications',
        active: 'https://img.icons8.com/fluency-systems-filled/60/ffffff/like--v1.png',
        inactive: 'https://img.icons8.com/ios/60/ffffff/like--v1.png'
    },
    {
        name: 'Profile',
        active: 'https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.6435-9/168298926_1336827600029845_5931580964125648244_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aiQoQFSk2_kAX949DsG&_nc_oc=AQnhW6tusnDSNnttG6JEh82MSH1kGkW8-zCUxzsvsz0ycYmH2yhLLrltjUfr9cjCAKs&_nc_ht=scontent.fhyd5-1.fna&oh=87cef91a94784db08987e9ad9268021a&oe=618D0159',
        inactive: 'https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.6435-9/168298926_1336827600029845_5931580964125648244_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aiQoQFSk2_kAX949DsG&_nc_oc=AQnhW6tusnDSNnttG6JEh82MSH1kGkW8-zCUxzsvsz0ycYmH2yhLLrltjUfr9cjCAKs&_nc_ht=scontent.fhyd5-1.fna&oh=87cef91a94784db08987e9ad9268021a&oe=618D0159'
    }
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={ [styles.icon, activeTab === icon.name ? icon.name === 'Profile' ? styles.profilePicActive : styles.profilePicInactive : styles.profilePicInactive ] } />
        </TouchableOpacity>
    )
    return (
        <View style={ styles.wrapper }>
            {/* <Divider width={1} orientation='vertical' /> */}
            <View style={ styles.container }>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper : {
        width : '100%',
        bottom : 0,
        backgroundColor: '#000',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon : {
        width: 30,
        height: 30
    },
    profilePicActive: {
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 2,
        borderColor: '#ffffff'
    },
    profilePicInactive: {
        borderRadius: 50,
        borderColor: '#fff',
    }
})

export default BottomTabs
