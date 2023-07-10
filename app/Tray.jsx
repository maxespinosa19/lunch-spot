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
            <Text style= {styles.buttonText}>Shuffle Now</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress ={clear} style= {[styles.button,styles.resetButton]}>
              <Text style= {[styles.buttonText, styles.resetButtonText]}> Reset </Text>
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

    resetButtonText:{
        color: '#777',
    },
    button:{
        backgroundColor: '#ed714d',
        paddingHorizontal: 30,
        paddingVertical: 10,
      
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#f79477',
        
    },

    resetButton: {
     backgroundColor: '#f4f5f6',
      },

    buttonText: {
     color: 'white',
     fontSize: 20,
     fontWeight: '600',
    },
    Tray: {
        width: '100%',
        backgroundColor: '#e9eeff',
        height: 120,
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -7,
        }, 
        shadowOpacity: 0.11,
        shadowRadius: 9.51,
        elevation: 15,
    }


})
