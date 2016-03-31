package com.bugfollowing.api;

import com.bugfollowing.model.general.Accounts;
import com.jfinal.core.Controller;

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
}
