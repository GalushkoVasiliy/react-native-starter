package com.starter;

import android.app.Application;
import android.content.Context;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import com.ninty.system.setting.SystemSettingPackage;
import com.oblador.vectoricons.VectorIconsPackage;
// import com.reactlibrary.RNReactNativeDocViewerPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.fabric.crashlytics.RNFirebaseCrashlyticsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;

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
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MainReactPackage(),
            new SystemSettingPackage(),
            new VectorIconsPackage();
      // packages.add(new FastImageViewPackage());
      // packages.add(new SplashScreenReactPackage());
      // packages.add(new ReanimatedPackage());
      // packages.add(new RNGestureHandlerPackage());
      // packages.add(new OrientationPackage());
      // packages.add(new ReactNativeConfigPackage());
      // packages.add(new ActionSheetPackage());
      // packages.add(new PickerPackage());
      // packages.add(new VectorIconsPackage());
      // packages.add(new ReactNativeDocumentPicker());
      // packages.add(new RNReactNativeDocViewerPackage());
      // packages.add(new RNFirebasePackage());
      // packages.add(new RNFirebaseCrashlyticsPackage());
      return packages;
    }

  @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  /**
   * Loads Flipper in React Native templates.
   *
   * @param context
   */
  private static void initializeFlipper(Context context) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
        aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this); // Remove this line if you don't want Flipper enabled
  }
}
