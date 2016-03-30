package com.bugfollowing.model.general;

import com.jfinal.plugin.activerecord.*;

/**
 * Created by Administrator on 2016/3/5.
 */
public class Accounts extends Model<Accounts> {
    public static final Accounts dao = new Accounts();

    public Page<Accounts> paginate(int pageNumber, int pageSize) {
        return paginate(pageNumber, pageSize, "select *", "from accounts order by account_id asc");
    }

}
