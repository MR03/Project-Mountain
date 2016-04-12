package com.mall03.model.general;

import com.jfinal.plugin.activerecord.Model;

import java.util.List;

/**
 * Created by Administrator on 2016/4/12.
 */
public class Advs extends Model<Advs> {
    public static final Advs dao = new Advs();

    public List<Advs> getHomeAdvs1() {
        List<Advs> advs = Advs.dao.find("select * from advs where advs_type=1");
        return advs;
    }

    public List<Advs> getHomeAdvs2() {
        List<Advs> advs = Advs.dao.find("select * from advs where advs_type=2");
        return advs;
    }
}
