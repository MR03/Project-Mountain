package com.demo;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Created by Administrator on 2016/2/23.
 */
public class TestFileStream {
    public static void main(String[] args) throws IOException {
        FileOutputStream output = new FileOutputStream("temp.dat");

        for(int i = 1; i<= 10; i++)
            output.write(i);

        output.close();

        FileInputStream input = new FileInputStream("temp.dat");

        int value;

        while((value = input.read()) != -1)
            System.out.println(value + " ");

        input.close();
    }
}
