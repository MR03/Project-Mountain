package com.api;

import com.alibaba.fastjson.JSONObject;
import com.config.AppConfig;
import com.jfinal.core.Controller;
import com.model.Advs;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**
 * Created by Administrator on 2016/4/27.
 */
public class TestController extends Controller {
//    json通信
    private String para = "error";

    // 接收分发
    public void index(){
       // 解决字符串乱码
        try {
            para = URLDecoder.decode(getPara("name"), "UTF8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }


        System.out.println(para);

        if( para.equals("all")) {
            getAll();
        }
    }

    private void sign() {
        setAttr("banner", "sdfsdf");
        renderJson(new String[]{"banner"});
    }

    // 返回全部广告
    private void getAll() {
        setAttr("name", "test11111");
        renderJson(new String[]{"name"});
    }

}
