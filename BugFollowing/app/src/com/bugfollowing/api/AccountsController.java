package com.bugfollowing.api;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.bugfollowing.model.general.Accounts;
import com.jfinal.core.Controller;
import com.jfinal.core.JFinal;

import java.rmi.Naming;
import java.util.Enumeration;
import java.util.Map;


/**
 * Created by Administrator on 2016/3/31.
 */
public class AccountsController extends Controller {
    public void index() {
        setAttr("data", Accounts.dao.paginate(getParaToInt(0, 1), 10));
        renderJson(new String[]{"data"});
    }

    public void select() {
        // 获得姓名
        String name = getPara("name");
        // 获得email
        String email = getPara("email");

        // 获得电话
        String tel = getPara("tel");

        setAttr("data", Accounts.dao.select(name, email, tel));
//        System.out.println(name);
        renderJson(new String[]{"data"});
    }

    public void delete() {
        // 获得id
        String[] ids = getParaValues("id");
        for(String id : ids) {
            Accounts.dao.deleteById(id);
        }
    }

    public void create() {
        String para = getPara("post");
        JSONObject paraObject = JSON.parseObject(para);
        Accounts.create(paraObject);
    }

    public void one() {
        String id = getPara("id");
        setAttr("data", Accounts.dao.findById(id));
        renderJson(new String[]{"data"});
        System.out.println(id);
    }

    public void myupdate() {
        Integer id = getParaToInt("id");
        Accounts.dao.myupdate();
        System.out.println(id);
    }

}
