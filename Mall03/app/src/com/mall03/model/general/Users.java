package com.mall03.model.general;

import com.alibaba.fastjson.JSONObject;
import com.jfinal.plugin.activerecord.*;
import com.mall03.utils.AES;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2016/3/5.
 */
public class Users extends Model<Users> {
    public static final Users dao = new Users();

    public Page<Users> paginate(int pageNumber, int pageSize) {
        return paginate(pageNumber, pageSize, "select *", "from accounts order by account_id asc");
    }

    public List<Users> select(String name, String email, String tel) {
//        查询字段和数据合为一个map
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("account_name", name);
        map.put("email", email);
        map.put("tel", tel);

        List<Users> accounts = Users.dao.find(getSql(map));
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
        new Users().set("account_name", obj.getString("name")).set("email", obj.getString("email")).set("tel", obj.getString("tel")).set("password_hash", password).save();
    }

    public boolean myupdate() {
        Users.dao.findByIdLoadColumns(18, "*").set("account_name","dfsfsdfsdf").update();
        return true;
    }

}
