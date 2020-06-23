import React from 'react'
import {SafeAreaView,View} from 'react-native'
import {MyButton,Input} from '../Components'
import styles from '../styles'

const Login =(props)=>{

    const saveCustomer=()=>{
        console.log("asda")
        props.navigation.navigate("Register")
    }
    return (
        <SafeAreaView style={{flex : 1}}>
            <View style ={styles.Login.container}>
                <View style={styles.Login.inputs}>
                    <Input />
                    <Input/>
                </View>
                <View style={styles.Login.buttons}>
                   <MyButton title ="GİRİŞ YAP" />
                   <MyButton title ="KAYIT OL" onPress={saveCustomer} /> 
                </View>

            </View>
        </SafeAreaView>
    )
}
export {Login}