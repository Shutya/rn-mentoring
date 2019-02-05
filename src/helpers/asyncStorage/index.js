import { NativeModules } from "react-native"

const { AsyncStorage } = NativeModules;

export const putIntoStorage = (key, value) => AsyncStorage.setItem(key, value);

export const getFromStorage = (key) => AsyncStorage.getItem(key);
