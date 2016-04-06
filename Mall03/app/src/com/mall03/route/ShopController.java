package com.mall03.route;

import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/3/30.
 */
public class ShopController extends Controller {

    public void index() {
        render("shop/index.html");
    }

}
