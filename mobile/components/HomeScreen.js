import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native'
import { Icon } from 'react-native-elements'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import tweet from '../utils/tweet';
import axios from 'axios';
import getTweets from '../utils/getTweets';

const Home = () => {

    const renderTweet = ({ item }) => {

        return (
            <View style={styles.tweetContainer}>
                <Image style={styles.userImage} source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} />
                <View style={styles.userTweet}>
                    <Text style={styles.fullName}>{item.fullName}<Text style={styles.username}> @{item.username}</Text> <Text style={styles.createdAt}>{item.createdAt}</Text></Text>
                    <Text style={styles.tweet}>{item.tweet}</Text>
                    <Image style={styles.tweetImage} source={{uri: item.tweetImage}} />
                    <View style={styles.controllers}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                size={18}
                                color="gray"
                                style={styles.icon}
                                type='feather'
                                name='message-circle'
                            />
                            <Text style={{ marginLeft: 4, color: 'gray', fontSize: 14 }}>0</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                size={18}
                                color="gray"
                                style={styles.icon}
                                type='feather'
                                name='repeat'
                            />
                            <Text style={{ marginLeft: 4, color: 'gray', fontSize: 14 }}>0</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                size={18}
                                color="gray"
                                style={styles.icon}
                                type='feather'
                                name='heart'
                            />
                            <Text style={{ marginLeft: 4, color: 'gray', fontSize: 14 }}>0</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                size={18}
                                color="gray"
                                style={styles.icon}
                                type='feather'
                                name='upload'
                            />
                        </View>
                    </View>
                </View>

            </View>
        )
    }

    const [modalVisible, setModalVisible] = useState(false)
    const [tweetText, setTweetText] = useState('')
    const [tweets, setTweets] = useState([])
    const [tweetImage, setTweetImage] = useState('')

    useEffect(() =>{
        getTweets(setTweets)
    },[])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                >
                    <SafeAreaView style={styles.centeredView}>
                        <View style={styles.tweetControllers}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{ fontSize: 16, }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.postButton} onPress={() => tweet(tweetText, tweetImage, tweets, setTweets).then(setModalVisible(false))}>
                                <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', }}>Tweet</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tweetForm}>
                            <Image style={styles.profilePicture} source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} />
                            <View style={styles.userTweet}>
                                <TextInput multiline placeholder="What's happening?" onChangeText={setTweetText} style={styles.input}></TextInput>
                                <TextInput placeholder="Image URL" onChangeText={setTweetImage} style={styles.imageInput}></TextInput>
                            </View>

                        </View>
                        <View style={styles.attachmentsContainer}>
                            <View style={styles.attachment}>
                                <Icon
                                    name="graphic-eq"
                                    type="material"
                                    color="black"
                                    size={25}
                                />
                            </View>
                            <View style={styles.attachment}>
                                <Icon
                                    name="camera"
                                    type="material"
                                    color="black"
                                    size={25}
                                />
                            </View>
                            <View style={styles.attachment}>
                                <Icon
                                    name="camera-roll"
                                    type="material"
                                    color="black"
                                    size={25}
                                />
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
                {tweets.length != 0
                   ? <FlatList
                        data={tweets}
                        renderItem={renderTweet}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ width: '100%', }}
                    />
                    :<Text>nothing to show</Text>
                }
                <TouchableOpacity style={styles.tweetButton} onPress={() => setModalVisible(true)}>
                    <Icon
                        size={25}
                        color="gray"
                        style={styles.icon}
                        type='feather'
                        name='feather'

                    />
                </TouchableOpacity>

            </SafeAreaView>

        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    tweetContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'ghostwhite',

    },
    userImageContainer: {

    },
    userImage: {
        flex: .16,
        height: 50,
        width: 50,
        borderRadius: 100,
    },

    userTweet: {
        flex: 1,
        marginLeft: 10,
    },
    fullName: {
        fontSize: 16,
        fontWeight: '800',
    },
    username: {
        fontSize: 13,
        fontWeight: '600',
    },
    tweet: {
        fontSize: 15,
        fontWeight: '300',
    },
    createdAt: {
        fontSize: 12,
        fontWeight: '300',
        color: 'gray',
    },
    tweetImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        height: 200,
        borderRadius: 8,
        backgroundColor: 'lightgray',
    },
    controllers: {
        display: 'flex',
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 10,
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
    //modal CSS
    centeredView: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        marginTop: 22
    },
    tweetControllers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '100%',
    },
    postButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 50,
        backgroundColor: 'black',
    },
    tweetForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 25,
        width: '100%',

    },
    profilePicture: {

        height: 30,
        width: 30,
        borderRadius: 100,
    },
    input: {
        height: 150,
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '300',

    },
    imageInput: {
        marginTop: 30,
        height: 40,
        textAlign: 'left',
        fontSize: 16,
        width: '95%',
        fontWeight: '300',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    attachmentsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'ghostwhite',
    },
    attachment: {
        padding: 18,
        borderWidth: .2,
        borderColor: 'lightgray',
        borderRadius: 15,
        marginRight: 10
    }
})
