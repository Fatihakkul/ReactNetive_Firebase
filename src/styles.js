import {StyleSheet,Dimensions} from 'react-native'

const styles = {
    Login : StyleSheet.create({
        container : {
            flex:1,
            backgroundColor : '#b2dfdb'
        },
        inputs : {
           
            flex : 1,
            alignItems : 'center',
            justifyContent: 'flex-end'
        },
        buttons : {
           
            flex : 1,
            alignItems : 'center',
            marginTop : 20
        }
    }),
    Register : StyleSheet.create({
        container : {
            flex : 1,
            alignItems : "center",
           
        },
        ınput : {
            justifyContent : 'flex-end',
            flex : 1
           
        },
        button : {
            flex :1,
            marginTop : 15
           
        }
    }),
    Mybutton : StyleSheet.create({
        container : {
            borderWidth : 3,
            borderColor : '#26a69a',
            borderRadius : 20,
            width : Dimensions.get('window').width / 2,
            padding : 10,
            margin : 10,
            alignItems : 'center',
            
        },
        Title : {
            fontSize : 18,
            fontWeight : 'bold',
            color : '#26a69a'
            
        }
    }),
    myInput : StyleSheet.create({
        container : {
            borderWidth : 2,
            borderColor : '#26a69a',
            margin : 10,
            borderRadius : 20,
            width : Dimensions.get('window').width * 2/3
        },
        text : {
            fontSize : 18,
            marginLeft : 10
        }
    })
}
export default styles