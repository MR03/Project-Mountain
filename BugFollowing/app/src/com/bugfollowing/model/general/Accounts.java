package com.bugfollowing.model.general;

import com.alibaba.fastjson.JSONObject;
import com.bugfollowing.utils.AES;
import com.jfinal.plugin.activerecord.*;
import java.util.*;
import java.util.List;

/**
 * Created by Administrator on 2016/3/5.
 */
public class Accounts extends Model<Accounts> {
    public static final Accounts dao = new Accounts();

    public Page<Accounts> paginate(int pageNumber, int pageSize) {
        return paginate(pageNumber, pageSize, "select *", "from accounts order by account_id asc");
    }

    public List<Accounts> select(String name, String status) {
//        查询字段和数据合为一个map
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("account_name", name);
        map.put("email", status);

        List<Accounts> accounts = Accounts.dao.find(getSql(map));
        return accounts;
    }

    private String getSql(Map<String, String> map) {
        // 查询全部
        String sql = "select * from accounts where ";
        // 构造动态字符串
        for(String key : map.keySet()) {
            if(map.get(key) != "") {
                sql += key + "=" + "'" + map.get(key) + "'" + " and ";
            }
        }
        // 去掉最后一个and
        sql = sql.substring(0,sql.length()-5);
        return sql;
    }

    public static void create(JSONObject obj) {

        //加密
        String password = AES.GetAESCode(obj.getString("pwd"));

        // 创建新用户
        new Accounts().set("account_name", obj.getString("name")).set("email", obj.getString("email")).set("tel", obj.getString("tel")).set("password_hash", password).save();
    }

    public boolean myupdate() {
        Accounts.dao.findByIdLoadColumns(18, "*").set("account_name","dfsfsdfsdf").update();
        return true;
    }

}
