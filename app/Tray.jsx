import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Tray({setSelectRestaurant}) {

    const choose = () => {
        const chosen = Math.random()
        setSelectRestaurant(chosen)
    }

    const clear= () => {
        setSelectRestaurant(0)


    }
    return(
        <View style={styles.Tray}>
            <View style={styles.buttonList}>
            <TouchableOpacity onPress ={choose} style={styles.button}>
            <Text style= {styles.buttonText}> Shuffle</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.resetButton}>
              <Text onPress ={clear}style= {styles.buttonText}> Reset </Text>
            </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonList:{
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
        


    },
    button:{
        backgroundColor: 'pink',
        paddingHorizontal: 24, 
        paddingVertical: 8,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        
    },

    resetButton: {
        backgroundColor: "grey",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',

      },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 800,
    },
    Tray: {
        width: '100%',
        height: 70,
        backgroundColor: '#e9eeff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        
    }


})
