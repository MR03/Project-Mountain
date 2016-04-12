package com.mall03.api;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import com.jfinal.core.Controller;

import com.mall03.model.general.Users;

/**
 * Created by Administrator on 2016/3/31.
 */
public class UsersAdminController extends Controller {
    public void index() {
        setAttr("data", Users.dao.paginate(getParaToInt(0, 1), 10));
        renderJson(new String[]{"data"});
    }

    public void select() {
        // 获得姓名
        String name = getPara("name");
        // 获得email
        String email = getPara("email");

        // 获得电话
        String tel = getPara("tel");

        setAttr("data", Users.dao.select(name, email, tel));
//        System.out.println(name);
        renderJson(new String[]{"data"});
    }

    public void delete() {
        // 获得id
        String[] ids = getParaValues("id");
        for(String id : ids) {
            Users.dao.deleteById(id);
        }
    }

    public void create() {
        String para = getPara("post");
        JSONObject paraObject = JSON.parseObject(para);
        Users.create(paraObject);
    }

    public void one() {
        String id = getPara("id");
        setAttr("data", Users.dao.findById(id));
        renderJson(new String[]{"data"});
        System.out.println(id);
    }

    public void myupdate() {
        Integer id = getParaToInt("id");
        Users.dao.myupdate();
        System.out.println(id);
    }

}
