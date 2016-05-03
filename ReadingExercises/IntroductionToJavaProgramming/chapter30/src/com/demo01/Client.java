package com.demo01;

import javax.swing.*;
import java.awt.*;
import java.io.DataInputStream;
import java.io.DataOutputStream;

/**
 * Created by Administrator on 2016/2/26.
 */
public class Client extends JFrame {
    private JTextField jtf = new JTextField();
    private JTextArea jta = new JTextArea();

    private DataOutputStream toServer;
    private DataInputStream fromServer;

    public static void main(String[] args) {
        new Client();
    }

    public Client() {
        JPanel p = new JPanel();
        p.setLayout(new BorderLayout());
        p.add(new JLabel("Enter radius"), BorderLayout.WEST);
        p.add(jtf, BorderLayout.CENTER);
        jtf.setHorizontalAlignment(JTextField.RIGHT);

        setLayout(new BorderLayout());
        add(p,BorderLayout.NORTH);
        add(new JScrollPane(jta), BorderLayout.CENTER);


    }

}
