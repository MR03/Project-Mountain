package com.mall03.api;

import com.jfinal.core.Controller;
import com.mall03.model.general.Shops;

/**
 * Created by Administrator on 2016/4/6.
 */
public class ShopsMobileController extends Controller {

    // API开口
    public void index() {
//        String op = getPara("op");
//
//        if( op.equals("all") ) {
//            getAll();
//            return;
//        }
//        if( op.equals("find") ) {
//            getFind();
//            return;
//        }

//        setAttr("status", "返回结果失败!");
//        renderJson(new String[]{"data"});
    }

    // 获取全部商品信息
    private void getAll() {
//        setAttr("data", Shops.dao.paginate(getParaToInt(0, 1), 10));
//        renderJson(new String[]{"data"});
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
