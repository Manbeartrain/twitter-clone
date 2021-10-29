import React from 'react'
import { ImageBackground } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

const Discover = () => {
    return (
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView horizontal style={styles.categoryContainer} justifyContent="flex-start" alignItems="center">
                    <Text style={[styles.categoryText, styles.active]}>For You</Text>
                    <Text style={styles.categoryText}>Trending</Text>
                    <Text style={styles.categoryText}>COVID-19</Text>
                    <Text style={styles.categoryText}>News</Text>
                    <Text style={styles.categoryText}>Sports</Text>
                    <Text style={styles.categoryText}>Entertainment</Text>
                </ScrollView>
            </View>
            <View style={styles.discoverHeroContainer}>
                <ImageBackground source={{ uri: 'https://www.cnet.com/a/img/0zIGhk4Ywi33xADEmOrTtBHetAw=/1200x630/center/top/2017/06/22/3c34448b-c996-4058-b3ec-00973ffa95af/supergirl-11.jpg' }} style={{ flex: 1, justifyContent: 'center', height: 200, width: '110%', position: 'relative' }} resizeMode="cover" >
                    <View style={styles.imageOverlay}>
                        <Text style={styles.discoverTitle}>Television - <Text style={{ fontWeight: '300', }}>LIVE</Text></Text>
                        <Text style={styles.discoverHeadline}>Supergirl airing on The CW</Text>
                        <Text style={styles.discoverSubTitle}>Trending with #Supergirl, Lena</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.discoverContentContainer}>
                <View style={styles.discoverTab}>
                    <View style={styles.content}>
                        <Text style={styles.discoverLabel}>Trending in Cryptocurrencies</Text>
                        <Text style={[styles.discoverTitle, {color: 'black',}] }>#cryptocurrency</Text>
                        <Text style={styles.discoverStat}>24.9k Tweets</Text>
                    </View>
                    <View style={styles.controllers}>
                        <Icon
                            name="more-horiz"
                            type="material"
                            color="gray" 
                            size={20}/>
                    </View>
                </View>
                <View style={styles.discoverTab}>
                    <View style={styles.content}>
                        <Text style={styles.discoverLabel}>Music - Trending</Text>
                        <Text style={[styles.discoverTitle, {color: 'black',}] }>Astroworld</Text>
                        <Text style={styles.discoverDescription}>Travis Scott reveals the lineup for his 2021 Astroworld Festival</Text>
                        <Text style={styles.discoverStat}>24.9k Tweets</Text>
                    </View>
                    <View style={styles.controllers}>
                        <Icon
                            name="more-horiz"
                            type="material"
                            color="gray" 
                            size={20}/>
                    </View>
                </View>
                <View style={styles.discoverTab}>
                    <View style={styles.content}>
                        <Text style={styles.discoverLabel}>Trending in Video games</Text>
                        <Text style={[styles.discoverTitle, {color: 'black',}] }>Majora's Mask</Text>
                        <Text style={styles.discoverStat}>2,639 Tweets</Text>
                    </View>
                    <View style={styles.controllers}>
                        <Icon
                            name="more-horiz"
                            type="material"
                            color="gray" 
                            size={20}/>
                    </View>
                </View>
                <View style={styles.discoverTab}>
                    <View style={styles.content}>
                        <Text style={styles.discoverLabel}>Trending in United States</Text>
                        <Text style={[styles.discoverTitle, {color: 'black',}] }>#Xenoverse3</Text>
                        <Text style={styles.discoverStat}>2,639 Tweets</Text>
                    </View>
                    <View style={styles.controllers}>
                        <Icon
                            name="more-horiz"
                            type="material"
                            color="gray" 
                            size={20}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
    },
    scrollContainer: {
        width: '100%',
    },
    categoryContainer: {
        display: 'flex',
        width: '100%',
    },
    categoryText: {
        marginHorizontal: 16,
        fontSize: 14,
        color: 'gray',
        fontWeight: '700',
        paddingVertical: 20,
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
    },
    active: {
        color: 'black',
    },
    discoverHeroContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: '100%',
    },
    discoverContentContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 8,
    },
    discoverTab: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        padding: 8,
        marginTop: 12,
        marginBottom: 12,
    },
    content: {
        display: 'flex',
        justifyContent: 'flex-start',
        flex: 1,
    },
    controllers: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flex: .25,
    },
    imageOverlay: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 40,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.4)',
    },
    discoverTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: '800',
        marginBottom: 6,
    },
    discoverDescription: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 6,
    },
    discoverHeadline: {
        color: 'white',
        fontSize: 24,
        fontWeight: '800',
    },
    discoverSubTitle: {
        color: 'white',
        fontWeight: '400',
        marginBottom: 18,
        marginTop: 4
    },
    discoverLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: 'gray',
        marginBottom: 4,
    },
    discoverStat: {
        fontSize: 12,
        color: 'gray',
        fontWeight: '300',
    }
})
