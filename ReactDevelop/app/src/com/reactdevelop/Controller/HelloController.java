package com.reactdevelop.Controller;

import com.jfinal.core.Controller;
import com.reactdevelop.model.Advs;

/**
 * Created by Administrator on 2016/4/27.
 */
public class HelloController extends Controller {
    // 接收分发
    public void index(){
        render("index.html");
    }

    public void demo001() {
        render("html/001.html");
    }
}
