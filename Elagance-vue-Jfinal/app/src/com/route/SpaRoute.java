package com.route;

import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/4/28.
 */
public class SpaRoute extends Controller {

    public void index() {
        render("layout/store.html");
    }
}
