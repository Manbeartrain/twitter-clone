import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

const Messages = () => {
    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <Text style={styles.messagesTitle}>Send a message, get a message</Text>
                <Text style={styles.messageDescription}>Direct Messages are private conversations bewteen you and other people on Twitter. Share Tweets, media, and more!</Text>
                <TouchableOpacity style={styles.largeMessageButton}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 15, }}>Write a message</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.tweetButton}>
                <Icon
                    size={25}
                    color="gray"
                    type='feather'
                    name='mail'

                />
            </TouchableOpacity>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        backgroundColor: 'white'
    },
    messageContainer: {
        display: 'flex',
        width: '75%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    messagesTitle: {
        fontSize: 28,
        fontWeight: '800',
    },
    messageDescription: {
        fontSize: 13,
        color: 'gray',
        marginTop: 8,
        marginBottom: 8,
    },
    largeMessageButton: {
        paddingHorizontal: 40,
        paddingVertical: 15,
        backgroundColor: 'black',
        borderRadius: 100,
        marginTop: 20,
    },
    tweetButton: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
        bottom: 25,
        right: 25,
        borderRadius: 100,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6.68,

        elevation: 8,
    },
})
