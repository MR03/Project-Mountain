package com.sshMM;

import com.sshMM.dao.Customer;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;
import org.junit.Test;

import java.io.Serializable;

/**
 * Created by Administrator on 2016/5/10.
 */
public class test {

    @Test
    public void selectTest() {
        // 实例化配置对象，加载配置文件 hibernate.cfg.xml
        Configuration configuration = new Configuration().configure();

        // 创建会话连接工厂
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        // 创建会话
        Session session = sessionFactory.openSession();
        // 开启事务
        Transaction transaction = session.beginTransaction();

        Customer customer1 = new Customer();
        customer1.setName("掌声");
        Serializable save = session.save(customer1);

        // 操作
        // .......................

        // 提交
        // 关闭释放资源
        transaction.commit();
        session.close();
        sessionFactory.close();
    }

}
