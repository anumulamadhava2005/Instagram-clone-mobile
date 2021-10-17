import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name: 'like',
        imageUrl: 'https://img.icons8.com/ios/60/ffffff/like--v1.png',
        likedImageUrl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like--v1.png',
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/ios/50/ffffff/speech-bubble--v2.png'
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/ffffff/external-paper-airplane-back-to-school-vitaliy-gorbachev-lineal-vitaly-gorbachev.png',
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/ios/60/ffffff/bookmark-ribbon--v1.png',
    }
]

const Post = ({post}) => {
    return (
        <View style={{ marginBottom: 20
         }}>
            {/* <Divider width={1} orientation='vertical' /> */}
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter/>
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comment post={post} />
            </View>
        </View>
    )
}

const PostHeader = ({post}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center' }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{ uri: post.profile_picture }} style={styles.story} />
                <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700'}}>{post.user}</Text>
            </View>
            <Text style={{ color: 'white', fontWeight: '700' }}>•••</Text>
        </View>
    )
}

const PostImage = ({post}) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image source={{ uri: post.imageUrl }} style={{height: '100%', resizeMode: 'cover'}} />
    </View>
)

const PostFooter = () => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}/>
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl}/>
            </View>
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}/>
        </View>
    )
}

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{flexDirection: 'row', marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '700' }}>{post.likes.toLocaleString('en-IN')} </Text>
            <Text>Likes</Text>
        </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5}}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '700'}}>{post.user} </Text>
            <Text>{post.caption}</Text>
        </Text>
    </View>
)

const CommentSection = ({ post }) => (
    <View>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }}>
                View{post.comments.length > 1 ? ' all ' : ' '}{post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>
)

const Comment = ({ post }) => (
    <>
    {post.comments.map((comment, index) => (
        <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={{ color: 'white' }}>
                <Text style={{ fontWeight: '700' }}>{comment.user} </Text>
                <Text>{comment.comment}</Text>
            </Text>
        </View>
    ))}
    </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },
    footerIcon: {
        width: 33,
        height: 33,
        marginRight: 10,
    }
})

export default Post
