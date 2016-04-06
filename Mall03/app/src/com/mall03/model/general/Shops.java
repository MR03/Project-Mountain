package com.mall03.model.general;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2016/4/6.
 */
public class Shops extends Model<Shops> {
    public static final Shops dao = new Shops();

    public Page<Shops> paginate(int pageNumber, int pageSize) {
        return paginate(pageNumber, pageSize, "select *", "from shops order by shops_id asc");
    }

    public List<Shops> findByParams(String name, String status) {
//        查询字段和数据合为一个map
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("account_name", name);
        map.put("status", status);

        List<Shops> accounts = Shops.dao.find(getSql(map));
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

}
