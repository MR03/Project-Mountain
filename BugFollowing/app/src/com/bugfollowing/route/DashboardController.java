package com.bugfollowing.route;

import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/3/30.
 */
public class DashboardController extends Controller {
    public void index() {
        render("index.html");
    }
}
