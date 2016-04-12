package com.mall03.config;

import com.jfinal.config.*;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.c3p0.C3p0Plugin;
import com.mall03.api.*;
import com.mall03.model._MappingKit;
import com.mall03.route.MobileController;
import com.mall03.route.AdminController;
import com.mall03.route.ShopController;

/**
 * Created by Administrator on 2016/3/5.
 */
public class AppConfig extends JFinalConfig {
    @Override
    public void configConstant(Constants me) {
        PropKit.use("com/mall03/config/Jdbc.properties", "UTF-8");
        me.setDevMode(PropKit.getBoolean("devMode", true));
    }

    @Override
    public void configRoute(Routes me) {
        // 路由
        me.add("/", ShopController.class, "/");
        me.add("/admin", AdminController.class, "/");
        me.add("/mobile", MobileController.class, "/");
        // 后台API
        me.add("/api/home", HomeAdminController.class);
        me.add("/api/users", UsersAdminController.class);
        me.add("/api/shops", ShopsAdminController.class);
        // 移动端API
        me.add("/api/mobile/shops", ShopsMobileController.class);
        me.add("/api/mobile/home", HomeMobileController.class);
        // PC端API
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
