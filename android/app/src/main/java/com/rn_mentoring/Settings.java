package com.rn_mentoring;

import android.content.Context;
import android.content.SharedPreferences;

public class Settings {
    private SharedPreferences settings = null;
    private static Settings instance = new Settings();

    public static Settings Get() {
        return instance;
    }

    public Settings init(Context context) {
        settings = context.getSharedPreferences("TEST_SP", 0);
        return instance;
    }

    public void clear() {
        settings.edit().clear().commit();
    }

    public Settings putString(String key, String value) {
        settings.edit().putString(key, value).commit();
        return instance;
    }

    public String getString(String key, String aDefault) {
        return settings.getString(key, aDefault);
    }

    public Settings remove(String key) {
        settings.edit().remove(key).commit();
        return instance;
    }
}