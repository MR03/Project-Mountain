package com.AlphaMM.CustomerMobile.model;

import com.jfinal.plugin.activerecord.Model;

import java.util.List;

/**
 * Created by Administrator on 2016/4/28.
 */
public class cmAdvs extends Model<cmAdvs> {
    public static final cmAdvs dao = new cmAdvs();

    // 首页广告
    public List<cmAdvs> homeBanner() {
        String sql = "select * from advs where advs_type=1";
        List<cmAdvs> list = cmAdvs.dao.find(sql);
        return list;
    }
}
