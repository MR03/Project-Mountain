package com.AlphaMM.ViewRoute;

import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/4/27.
 */
public class AWroute extends Controller {

    public void index() {
        render("admin-web/home/v1/home_index.html");
    }
}
