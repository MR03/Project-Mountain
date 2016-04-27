package com.AlphaMM.AdminWeb.api;

import com.AlphaMM.AdminWeb.model.awUsers;
import com.jfinal.core.Controller;

/**
 * Created by Administrator on 2016/4/27.
 */
public class awHomeController extends Controller {
    public void index() {
        setAttr("data", awUsers.dao.paginate(getParaToInt(0, 1), 10));
        renderJson(new String[]{"data"});
    }
}
