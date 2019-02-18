package com.rn_mentoring;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;

import java.util.Map;
import java.util.HashMap;

public class AsyncStorage extends ReactContextBaseJavaModule {
  public AsyncStorage(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "AsyncStorage";
  }

  @ReactMethod
  public void setItem (String key, String value, Promise promise) {
    try {
      Settings.Get().init(getReactApplicationContext());
      Settings.Get().putString(key, value);
      promise.resolve(value);
    } catch (Exception e) {
      promise.reject(e);
    }
  }

  @ReactMethod
  public void getItem (String key, Promise promise) {
    try {
      Settings.Get().init(getReactApplicationContext());
      String value = Settings.Get().getString(key, "Not found");
      if (value != "Not found") {
        promise.resolve(value);
      } else {
        throw new RuntimeException("Not found!");
      }
    } catch (Exception e) {
      promise.reject(e);
    }
  }

  @ReactMethod
  public void getMultiple (ReadableArray array, Promise promise) {
    try {
      Settings.Get().init(getReactApplicationContext());
      WritableMap writableMap = Arguments.createMap();
      int size = array.size();
      for (int i = 0; i < size; i++) {
        ReadableType type = array.getType(i);
        if (type == ReadableType.String) {
          String key = array.getString(i);
          String value = Settings.Get().getString(key, "Not found");
          writableMap.putString(key, value);
        } else {
          throw new RuntimeException("Only strings supported!");
        }
      }
      promise.resolve(writableMap);
    } catch (Exception e) {
      promise.reject(e);
    }
  }

  @ReactMethod
  public void setMultiple (ReadableMap readableMap, Promise promise) {
    Settings.Get().init(getReactApplicationContext());
    ReadableMapKeySetIterator iterator = readableMap.keySetIterator();
    try {
      while (iterator.hasNextKey()) {
        String key = iterator.nextKey();
        ReadableType type = readableMap.getType(key);
        if (type == ReadableType.String) {
          Settings.Get().putString(key, readableMap.getString(key));
        } else {
          throw new RuntimeException("Only strings supported!");
        }
      }
      promise.resolve("Success");
    } catch (Exception e) {
      promise.reject(e);
    }
  }
}