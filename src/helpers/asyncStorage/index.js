import { NativeModules } from "react-native"

const { AsyncStorage } = NativeModules;

export const putIntoStorage = (obj) => Object.keys(obj).forEach(key => AsyncStorage.setItem(key, obj[key]));

export const getFromStorage = (key) => AsyncStorage.getItem(key);
