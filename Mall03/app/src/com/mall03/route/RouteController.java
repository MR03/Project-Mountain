package com.mall03.route;

import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/3/30.
 */
public class RouteController extends Controller {

    public void index() {
        render("admin/dashboard/index.html");
    }

    public void users() {
        render("admin/users/users_index.html");
    }

}
