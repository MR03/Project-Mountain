package com.AlphaMM.AdminWeb.api;

import com.AlphaMM.AdminWeb.model.awAdvs;
import com.AlphaMM.CustomerMobile.model.cmAdvs;
import com.AlphaMM.config.AppConfig;
import com.alibaba.fastjson.JSONObject;
import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/4/27.
 */
public class awAdvsController extends Controller {
    private String para = "error";
    private JSONObject jp;

    public void index() {
        para = getPara(AppConfig.jsonFlag);
        jp = JSONObject.parseObject(para);

        String send = jp.getString("op");

        if( send.equals("all")) {
            getAll();
        }
    }

    private void getAll() {
        setAttr("banner", awAdvs.dao.homeBanner());
        renderJson(new String[]{"banner"});
    }

}
