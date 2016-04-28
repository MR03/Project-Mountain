package com.AlphaMM.CustomerMobile.api;

import com.AlphaMM.CustomerMobile.model.cmGoods;
import com.AlphaMM.config.AppConfig;
import com.alibaba.fastjson.JSONObject;
import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/4/27.
 */
public class cmHomeController extends Controller {
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
        setAttr("data", cmGoods.dao.paginate(getParaToInt(0, 1), 10));
        renderJson(new String[]{"data"});
    }
}
