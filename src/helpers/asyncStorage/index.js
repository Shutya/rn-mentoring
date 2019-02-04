import { AsyncStorage } from "react-native"

export const putIntoStorage = (key, value) => AsyncStorage.setItem(key, value);

export const getFromStorage = (key) => AsyncStorage.getItem(key).then(data => data !== null ? data : Promise.reject('No data'));
