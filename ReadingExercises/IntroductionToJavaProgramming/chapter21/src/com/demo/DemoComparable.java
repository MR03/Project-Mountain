package com.demo;

import java.util.Date;

/**
 * Created by Administrator on 2016/2/18.
 */
public class DemoComparable {
    public void genericRun() {
        Comparable<Date> c = new Date();
//        这一行会报错
//        System.out.println(c.compareTo("red"));
    }
}
