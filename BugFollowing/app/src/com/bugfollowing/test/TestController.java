package com.bugfollowing.test;

import com.bugfollowing.model.general.Accounts;
import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/3/30.
 */
public class TestController extends Controller {
    public void index() {
     setAttr("accounts", Accounts.dao.paginate(getParaToInt(0, 1), 10));
//        System.out.println(new String[]{"accounts"});
		renderJson(new String[]{"accounts"});
//        render("index.html");
    }
}
