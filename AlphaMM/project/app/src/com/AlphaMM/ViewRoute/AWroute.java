package com.AlphaMM.ViewRoute;

import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/4/27.
 */
public class AWroute extends Controller {

    public void index() {
        render("page/admin-web/dashboard/v1/home_index.html");
    }

    public void advs() {
        render("page/admin-web/advs/v1/advs_index.html");
    }
}
