package com.rn_mentoring;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.taluttasgiran.rnsecurestorage.RNSecureStoragePackage;
import com.bugsnag.BugsnagReactNative;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.rn_mentoring.CustomAsyncStorage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSecureStoragePackage(),
            BugsnagReactNative.getPackage(),
          new SplashScreenReactPackage(),
          new LottiePackage(),
          new RNDeviceInfo(),
          new ReactNativePushNotificationPackage(),
          new MapsPackage(),
          new VectorIconsPackage(),
          new RNGestureHandlerPackage(),
          new CustomAsyncStorage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
