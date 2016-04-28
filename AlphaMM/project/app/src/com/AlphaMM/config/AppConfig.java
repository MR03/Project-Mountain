package com.AlphaMM.config;

import com.AlphaMM.CustomerMobile.api.cmHomeController;
import com.AlphaMM.ViewRoute.AWroute;
import com.AlphaMM.ViewRoute.CMroute;
import com.AlphaMM.ViewRoute.MAINroute;
import com.jfinal.config.*;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.c3p0.C3p0Plugin;

public class AppConfig extends JFinalConfig {
    public static final String jsonFlag = "jd";

    @Override
    public void configConstant(Constants me) {
        PropKit.use("com/AlphaMM/config/Jdbc.properties", "UTF-8");
        me.setDevMode(PropKit.getBoolean("devMode", true));
    }

    @Override
    public void configRoute(Routes me) {
        // 入口路由
        me.add("/", MAINroute.class, "/");
        // AdminWeb端路由
        me.add("/admin", AWroute.class, "/");
        // CustomerMobile端路由
        me.add("/mobile", CMroute.class, "/");

        //API
        me.add("/api/mobile/home", cmHomeController.class, "/");
    }

    public static C3p0Plugin createC3p0Plugin() {
        return new C3p0Plugin(PropKit.get("jdbcUrl"), PropKit.get("user"), PropKit.get("password").trim());
    }

    @Override
    public void configPlugin(Plugins me) {
        C3p0Plugin c3p0Plugin = createC3p0Plugin();
        me.add(c3p0Plugin);

        ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p0Plugin);
        _MappingKit.mapping(arp);
        me.add(arp);
    }

    @Override
    public void configInterceptor(Interceptors me) {

    }

    @Override
    public void configHandler(Handlers me) {

    }
}