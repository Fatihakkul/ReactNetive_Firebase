import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import styles from '../styles'

const MyButton =(props)=>{
    return(
        <TouchableOpacity style={styles.Mybutton.container} onPress={props.onPress}>
                <Text style={styles.Mybutton.Title}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export {MyButton}