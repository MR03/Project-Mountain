package com.AlphaMM.AdminWeb.model;

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
}
