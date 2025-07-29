/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Taboola} from '@taboola/react-native-plugin-3x';

Taboola.init('sdk-tester-demo');
AppRegistry.registerComponent(appName, () => App);
