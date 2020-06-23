import React,{useState} from 'react'
import auth from '@react-native-firebase/auth' ;
import {SafeAreaView,View} from 'react-native'
import {MyButton,Input} from '../Components'
import styles from '../styles'

const Register =(props)=>{
    const  [costumerMail,setCustomerMail]=useState("")
    const  [customerPass,setCustomerPass]=useState("")
    const  [passRep,setPassRep]=useState("")
    
    const saveuserMail =(text)=> setCustomerMail(text)
    const saveuserPassword=(text)=>setCustomerPass(text)
    const savepasswordRep =(text)=> setPassRep(text)
    
    const saveUser = async ()=>{
        console.log(customerPass,costumerMail,passRep)

        if(customerPass===passRep){
            try {

                await auth().createUserWithEmailAndPassword(costumerMail,customerPass)
                
            } catch (error) {
                console.log(error)
            }
            
        }else console.log("şifreler uyuşmamaktadır!")
    }
    return(
        <SafeAreaView style={{flex :1}}>
           <View style={styles.Register.container}>
               <View style={styles.Register.ınput}>
                    <Input
                     holder ="e-mail adresinizi giriniz..." 
                     type='email-address'
                     autoCapitalize='none'
                     onChangeText={saveuserMail}
                     />
                    <Input
                    holder="şirifrenizi giriniz..."
                    secureTextEntry={true}
                    onChangeText={saveuserPassword}
                    />
                    <Input
                    holder="şirifrenizi tekrar giriniz..."
                    secureTextEntry={true}
                    onChangeText={savepasswordRep}
                    />
               </View>
               <View style={styles.Register.button}>
                    <MyButton title="KAYDOL" onPress={saveUser}/>
               </View>
           </View>
        </SafeAreaView>
    )
}
export  {Register}