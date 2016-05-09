package com.AlphaMM.AdminWeb.api;

import com.AlphaMM.AdminWeb.model.awAdvs;

import com.AlphaMM.config.AppConfig;
import com.alibaba.fastjson.JSONObject;
import com.jfinal.core.Controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**
 * Created by Administrator on 2016/4/27.
 */
public class awAdvsController extends Controller {
    private String para = "error";
    private JSONObject jp;

    // 接收分发
    public void index(){
        // 解决字符串乱码
        try {
            para = URLDecoder.decode(getPara(AppConfig.jsonFlag), "UTF8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        jp = JSONObject.parseObject(para);

        String send = null;
        send = jp.getString("op");

        if( send.equals("all")) {
            getAll();
        }
        if( send.equals("create")) {
            advsCreate();
        }
        if( send.equals("delete")) {
            advsDelete();
        }
        if( send.equals("update")) {
            advsUpdate();
        }
    }

    // 返回全部广告
    private void getAll() {
        setAttr("banner", awAdvs.dao.homeBanner());
        renderJson(new String[]{"banner"});
    }

    // 新增广告
    private void advsCreate() {
        boolean advs = awAdvs.createAdvs(jp);
        if(advs) {
            setAttr("status", 1);
        } else {
            setAttr("status", 0);
        }
        renderJson(new String[]{"status"});
    }

    private void advsDelete() {
        boolean advsDelete = awAdvs.advsDelete(jp);
        if(advsDelete) {
            setAttr("status", 1);
        } else {
            setAttr("status", 0);
        }
        renderJson(new String[]{"status"});
    }

    private void advsUpdate() {
        boolean advsUpdate = awAdvs.advsUpdate(jp);
        if(advsUpdate) {
            setAttr("status", 1);
        } else {
            setAttr("status", 0);
        }
        renderJson(new String[]{"status"});
    }

}
