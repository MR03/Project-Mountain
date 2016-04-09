package com.mall03.route;

import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/3/30.
 */
public class MobileController extends Controller {

    public void index() {
        render("mobile/home/index.html");
    }

    public void shop() {
        render("mobile/shop/index.html");
    }

}
