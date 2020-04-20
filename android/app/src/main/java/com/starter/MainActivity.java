package com.starter;

import com.facebook.react.ReactActivity;
import android.content.Intent; //react-native-orientation
import android.content.res.Configuration; //react-native-orientation
import com.facebook.react.ReactActivityDelegate; //react-native-gesture-handler
import com.facebook.react.ReactRootView; //react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; //react-native-gesture-handler
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Starter";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() { // react-native-gesture-handler
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) { // react-native-orientation
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this); // here
        super.onCreate(savedInstanceState);
    }

    @Override
    protected void onPause() {
        SplashScreen.hide(this);
        super.onPause();
    }
}
