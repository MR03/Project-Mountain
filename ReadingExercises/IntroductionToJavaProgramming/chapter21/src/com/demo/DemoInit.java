package com.demo;

/**
 * Created by Administrator on 2016/2/18.
 */

/*
 * 泛型（generic）是指参数化类型的能力
 * 从JDK1.5开始，Java允许定义泛型类/接口/方法
 * 优点：能够在编译时而不是在运行时检测出错误,使程序更加可靠
 *
 * <T>或者<E>等表示形式泛型类型
 * 泛型类型必须是引用类型
 */

public class DemoInit {
    public static void main(String[] args) {
        DemoArrayList list = new DemoArrayList();
        String color = list.colorList();
//        System.out.println(color);

        GenericStack<String> stack1 = new GenericStack<String>();
        stack1.push("London");
        stack1.push("Paris");
        stack1.push("Berlin");

        GenericStack<Integer> stack2 = new GenericStack<Integer>();
        stack2.push(1);
        stack2.push(2);
        stack2.push(3);
    }
}
