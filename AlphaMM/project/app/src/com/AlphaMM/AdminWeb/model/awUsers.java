package com.AlphaMM.AdminWeb.model;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;

/**
 * Created by Administrator on 2016/4/27.
 */
public class awUsers extends Model<awUsers> {
    public static final awUsers dao = new awUsers();

    public Page<awUsers> paginate(int pageNumber, int pageSize) {
        return paginate(pageNumber, pageSize, "select *", "from users order by users_id asc");
    }
}
