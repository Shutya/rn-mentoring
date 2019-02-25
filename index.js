/** @format */

import {AppRegistry} from 'react-native';
import App from 'src/App';
import {name as appName} from './app.json';
import './src/helpers/bugsnag';

AppRegistry.registerComponent(appName, () => App);
