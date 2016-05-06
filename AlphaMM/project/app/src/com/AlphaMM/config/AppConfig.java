package com.AlphaMM.config;

import com.AlphaMM.AdminWeb.api.awAdvsController;
import com.AlphaMM.CustomerMobile.api.cmHomeController;
import com.AlphaMM.ViewRoute.AWroute;
import com.AlphaMM.ViewRoute.CMroute;
import com.AlphaMM.ViewRoute.MAINroute;
import com.AlphaMM.utils.FileUpload;
import com.jfinal.config.*;
import com.jfinal.kit.PathKit;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.c3p0.C3p0Plugin;

public class AppConfig extends JFinalConfig {
    public static String jsonFlag = "jd";

    @Override
    public void configConstant(Constants me) {
        PropKit.use("com/AlphaMM/config/Jdbc.properties", "UTF-8");
        me.setDevMode(PropKit.getBoolean("devMode", true));
        jsonFlag = PropKit.get("jsonFlag");
    }

    @Override
    public void configRoute(Routes me) {
        // 入口路由
        me.add("/", MAINroute.class, "/");
        // AdminWeb端路由
        me.add("/admin", AWroute.class, "/");
        // CustomerMobile端路由
        me.add("/mobile", CMroute.class, "/");

        // AdminWeb端API
        me.add("/api/admin/advs", awAdvsController.class, "/");
        // CustomerMobile端API
        me.add("/api/mobile/home", cmHomeController.class, "/");

        // 特殊API
        me.add("/api/fileUpload", FileUpload.class, "/");
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