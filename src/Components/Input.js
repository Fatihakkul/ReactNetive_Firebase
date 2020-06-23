import React from 'react'
import {View,TextInput} from 'react-native'
import styles from '../styles'

const Input =(props)=>{
    return(
        <View style={styles.myInput.container}>
                    <TextInput style={styles.myInput.text}
                        onChangeText={props.onChangeText}
                        placeholder={props.holder}
                        autoCapitalize={props.autoCapitalize}
                        keyboardType={props.type}
                        secureTextEntry={props.secureTextEntry}
                    />
                </View>
    )
}
export {Input}