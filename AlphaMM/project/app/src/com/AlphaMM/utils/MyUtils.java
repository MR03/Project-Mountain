package com.AlphaMM.utils;

import javax.crypto.interfaces.PBEKey;
import java.util.Random;

/**
 * Created by Administrator on 2016/5/6.
 */
public class MyUtils {
    // 返回随机整数
    public static long randomInt(int num) {
        Random r = new Random();
        long n = r.nextInt(num);
        return n;
    }
}
