package com.demo;

import java.util.ArrayList;

/**
 * Created by Administrator on 2016/2/18.
 */
public class DemoArrayList {
    public String colorList() {
        ArrayList<String> list = new ArrayList<String>();
        list.add("Red");
        list.add("White");
        String color = list.get(1);
        return color;
    }
}
