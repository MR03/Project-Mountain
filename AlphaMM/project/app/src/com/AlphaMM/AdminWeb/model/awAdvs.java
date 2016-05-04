package com.AlphaMM.AdminWeb.model;

import com.alibaba.fastjson.JSONObject;
import com.jfinal.plugin.activerecord.Model;

import java.util.List;

/**
 * Created by Administrator on 2016/4/28.
 */
public class awAdvs extends Model<awAdvs> {
    public static final awAdvs dao = new awAdvs();

    // 首页广告
    public List<awAdvs> homeBanner() {
        String sql = "select * from advs where advs_type=1";
        List<awAdvs> list = awAdvs.dao.find(sql);
        return list;
    }

    public static boolean createAdvs(JSONObject obj) {
        // 创建新用户
        boolean save = new awAdvs().set("advs_name", obj.getString("name")).set("link", obj.getString("url")).set("advs_type", 1).save();
        return save;
    }

}
