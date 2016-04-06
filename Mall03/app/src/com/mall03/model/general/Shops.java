package com.mall03.model.general;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;

/**
 * Created by Administrator on 2016/4/6.
 */
public class Shops extends Model<Shops> {
    public static final Shops dao = new Shops();

    public Page<Shops> paginate(int pageNumber, int pageSize) {
        return paginate(pageNumber, pageSize, "select *", "from shops order by shops_id asc");
    }

}
