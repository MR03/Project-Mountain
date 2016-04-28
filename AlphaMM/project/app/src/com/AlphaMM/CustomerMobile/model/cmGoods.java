package com.AlphaMM.CustomerMobile.model;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;

/**
 * Created by Administrator on 2016/4/28.
 */
public class cmGoods extends Model<cmGoods> {
    public static final cmGoods dao = new cmGoods();

    public Page<cmGoods> paginate(int pageNumber, int pageSize) {
        return paginate(pageNumber, pageSize, "select *", "from goods order by goods_id asc");
    }
}
