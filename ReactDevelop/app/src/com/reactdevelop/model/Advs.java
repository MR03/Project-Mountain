package com.reactdevelop.model;

import com.alibaba.fastjson.JSONObject;
import com.jfinal.plugin.activerecord.Model;

import java.util.List;

/**
 * Created by Administrator on 2016/4/28.
 */
public class Advs extends Model<Advs> {
    public static final Advs dao = new Advs();

    // 查询首页banner
    public List<Advs> homeBanner() {
        String sql = "select * from advs where advs_type=1";
        List<Advs> list = dao.find(sql);
        return list;
    }

    // 创建新广告
    public static boolean createAdvs(JSONObject obj) {
        boolean save = new Advs().set("advs_name", obj.getString("name")).set("link", obj.getString("url")).set("img_src", obj.getString("file")).set("advs_type", 1).save();
        return save;
    }

    // 删除一个广告
    public static boolean advsDelete(JSONObject obj) {
        boolean deleteById = dao.deleteById(obj.getString("id"));
        return deleteById;
    }

    // 编辑
    public static boolean advsUpdate(JSONObject obj){
        boolean update = dao.findByIdLoadColumns(obj.getString("id"), "*").set("advs_name", obj.getString("name")).update();
        return update;
    }
}
