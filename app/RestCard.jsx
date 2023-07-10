
import {View, Image, Text, StyleSheet} from 'react-native'


export default function RestCard({restaurant}){
    return(
        <View style={styles.card}>
            <Image style={styles.image}source={{
                uri: restaurant.photo_url,
                cache: 'force-cache'}} />
            <Text style = {styles.title}>{restaurant.name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        borderRadius: 6,
        borderWidth: 3,
        borderColor: '#a3a3a3',
        borderStyle: 'solid',
        
    },
 card: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: -7,
    }, 
    shadowOpacity: 0.28,
    shadowRadius: 9.51,
    elevation: 15,
    },
title: {
    color: '#203040',
    fontSize: 28,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: 12,
    },
})