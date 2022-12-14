/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Taboola} from '@taboola/react-native-plugin-3x'

//init Taboola with publisher ID
Taboola.init('sdk-tester-rnd');

AppRegistry.registerComponent(appName, () => App);
