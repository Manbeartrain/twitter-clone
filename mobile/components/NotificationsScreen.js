import React from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

const Notificatitons = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tabControllers}>
                <Text style={styles.controllerTitle}>All</Text>
                <Text style={[styles.controllerTitle, { color: 'gray' }]}>Mentions</Text>
            </View>
            <ScrollView style={{width: '100%',}} justifyContent="flex-start" alignItems="center">
                <View style={styles.notificationsContainer}>
                    <View style={styles.notificationIconContainer}>
                        <Icon name="favorite" type="material" color="tomato" />
                    </View>
                    <View style={styles.userTweet}>
                        <Image style={styles.userImage} source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} />
                        <Text style={styles.userTweetTitle}>Another Programmer Bot <Text style={{fontWeight: '400'}}>liked your Tweet</Text></Text>
                        <Text style={styles.userTweetDescription}>Day 1.5/100: Side project twitter clone updates - UI fixed and basic tweet functionality up and running. Shoutout too @daboigbae for the G-Fuel care package. That Liquid cocaine really doing its job #100DaysOfCode #ReactNative pic.twitter.com/aYfBef4rfO</Text>

                    </View>
                </View>
                <View style={styles.notificationsContainer}>
                    <View style={styles.notificationIconContainer}>
                        <Icon name="loop" type="material" color="tomato" />
                    </View>
                    <View style={styles.userTweet}>
                        <Image style={styles.userImage} source={{ uri: 'https://randomuser.me/api/portraits/men/82.jpg' }} />
                        <Text style={styles.userTweetTitle}>MatPat <Text style={{fontWeight: '400'}}>Retweeted your Tweet</Text></Text>
                        <Text style={styles.userTweetDescription}>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard.</Text>

                    </View>
                </View>
                <View style={styles.notificationsContainer}>
                    <View style={styles.notificationIconContainer}>
                        <Icon name="favorite" type="material" color="tomato" />
                    </View>
                    <View style={styles.userTweet}>
                        <Image style={styles.userImage} source={{ uri: 'https://randomuser.me/api/portraits/women/75.jpg' }} />
                        <Text style={styles.userTweetTitle}>Roman Atwood <Text style={{fontWeight: '400'}}>liked your Tweet</Text></Text>
                        <Text style={styles.userTweetDescription}>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. </Text>

                    </View>
                </View>
                <View style={styles.notificationsContainer}>
                    <View style={styles.notificationIconContainer}>
                        <Icon name="favorite" type="material" color="tomato" />
                    </View>
                    <View style={styles.userTweet}>
                        <Image style={styles.userImage} source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} />
                        <Text style={styles.userTweetTitle}>Another Programmer Bot <Text style={{fontWeight: '400'}}>liked your Tweet</Text></Text>
                        <Text style={styles.userTweetDescription}>Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans.</Text>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Notificatitons

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
    },
    tabControllers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'whitesmoke'
    },
    controllerTitle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        width: '25%',
    },
    notificationsContainer: {
        display: 'flex',
        padding: 8,
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'whitesmoke',
    },
    notificationIconContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: .10,
        padding: 8,
    },
    userTweet: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        padding: 8,
    },
    userImage: {
        height: 35,
        width: 35,
        borderRadius: 100,
    },
    userTweetTitle:{
        fontSize:17,
        fontWeight: '700',
        marginTop: 10,
    },
    userTweetDescription: {
        fontSize: 15, 
        fontWeight: '300',
        marginTop: 4,
        color: 'gray',
        lineHeight: 22,
    }

})
