import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

export const putIntoStorage = (obj) => Object.keys(obj).forEach(key => RNSecureStorage.set(key, obj[key], { accessible: ACCESSIBLE.WHEN_UNLOCKED }));

export const getFromStorage = (key) => RNSecureStorage.get(key);
