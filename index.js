/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {MyButton,Input} from './src/Components'
import Router from './src/Router'
import  {Login,Register} from './src/pages'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Register);
