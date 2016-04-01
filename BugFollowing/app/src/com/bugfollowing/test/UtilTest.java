package com.bugfollowing.test;


import com.bugfollowing.utils.AES;

import javax.sound.midi.Soundbank;

/**
 * Created by Administrator on 2016/4/1.
 */
public class UtilTest {
    public static void main(String[] args) {
        String name = "admin";
        String s = AES.GetAESCode(name);
        System.out.println(s);

    }
}
