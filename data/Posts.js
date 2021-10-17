import { USERS } from './Users'

export const POSTS = [
    {
        imageUrl: 'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
        user: USERS[0].user,
        likes: 787000123,
        caption: 'Spider Man',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'Madhava',
                comment: 'Wooow!!!!'
            },
            {
                user: 'TomHolland',
                comment: 'Coming Up with a new one'
            },
            {
                user: 'Robert Downey Jr',
                comment: 'I wish i would have been :('
            },
        ],
    },
    {
        imageUrl: 'https://wallpaperaccess.com/full/806272.jpg',
        user: USERS[1].user,
        likes: 7980,
        caption: 'Spider Man',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'TomHolland',
                comment: 'Hey man, Thats my new movie'
            },
        ],
    },
    {
        imageUrl: 'https://wallpaperaccess.com/full/2029165.jpg',
        user: USERS[2].user,
        likes: 8587,
        caption: 'Beautiful',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'TomHolland',
                comment: 'Hey man, Thats my new movie'
            },
            {
                user: 'TomHolland',
                comment: 'Hey man, Thats my new movie'
            },
            {
                user: 'TomHolland',
                comment: 'Hey man, Thats my new movie'
            },
        ],
    },
]