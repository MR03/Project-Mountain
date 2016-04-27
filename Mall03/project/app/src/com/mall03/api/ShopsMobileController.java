package com.mall03.api;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jfinal.core.Controller;
import com.mall03.model.mobile.ShopsMobile;

/**
 * Created by Administrator on 2016/4/6.
 */
public class ShopsMobileController extends Controller {

    private String para = "error";
    private JSONObject jp;

    // API开口
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
//        if( op.equals("find") ) {
//            getFind();
//            return;
//        }

//        setAttr("status", "返回结果失败!");
//        renderJson(new String[]{"data"});
    }

    // 获取全部商品信息
    private void getAll() {
        ShopsMobile all = ShopsMobile.dao.all(jp.getString("shopid"));
        setAttr("status", "normal");
        setAttr("shops", all);
        renderJson(new String[]{"status", "shops"});
    }

    // 查询商品信息
    private void getFind() {
////        获得名称
//        String name = getPara("name");
//        // 获得状态
//        String status = getPara("status");
//
//       setAttr("data", Shops.dao.findByParams(name, status));
////        System.out.println(name);
//        renderJson(new String[]{"data"});
    }
}
