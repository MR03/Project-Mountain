package com.mall03.api;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/4/12.
 */
public class HomeAdminController extends Controller {
    private String para = "error";
    private JSONObject jp;

    public void index() {

        // 获得提交数据并转换为JSON
        para = getPara("req");
        jp = JSON.parseObject(para);

        // 分发处理
        String send = jp.getString("op");
        if( send.equals("all") ) {
            getAll();
            return;
        }
    }

    private void getAll() {

    }
}
