package com.AlphaMM.ViewRoute;

import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/4/27.
 */
public class AWroute extends Controller {

    public void index() {
        render("html/admin-web/dashboard/home_index.v1.html");
    }

    public void advs() {
        render("html/admin-web/advs/advs_index.v1.html");
    }

    public void react(){
        render("html/admin-web/reactdemo/react_demo_index.v1.html");
    }
}
