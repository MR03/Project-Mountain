package com.api;

import com.config.AppConfig;
import com.model.Advs;
import com.alibaba.fastjson.JSONObject;
import com.jfinal.core.Controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**
 * Created by Administrator on 2016/4/27.
 */
public class AdvsController extends Controller {
//    json通信
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


        String flag = jp.getString("flag");
        System.out.println(flag);

        if( flag.equals("sign")) {
            sign();
        }
//        if( send.equals("create")) {
//            advsCreate();
//        }
//        if( send.equals("delete")) {
//            advsDelete();
//        }
//        if( send.equals("update")) {
//            advsUpdate();
//        }
    }

    private void sign() {
        setAttr("banner", "sdfsdf");
        renderJson(new String[]{"banner"});
    }

    // 返回全部广告
    private void getAll() {
        setAttr("banner", Advs.dao.homeBanner());
        renderJson(new String[]{"banner"});
    }

    // 新增广告
    private void advsCreate() {
        boolean advs = Advs.createAdvs(jp);
        if(advs) {
            setAttr("status", 1);
        } else {
            setAttr("status", 0);
        }
        renderJson(new String[]{"status"});
    }

    private void advsDelete() {
        boolean advsDelete = Advs.advsDelete(jp);
        if(advsDelete) {
            setAttr("status", 1);
        } else {
            setAttr("status", 0);
        }
        renderJson(new String[]{"status"});
    }

    private void advsUpdate() {
        boolean advsUpdate = Advs.advsUpdate(jp);
        if(advsUpdate) {
            setAttr("status", 1);
        } else {
            setAttr("status", 0);
        }
        renderJson(new String[]{"status"});
    }

}
