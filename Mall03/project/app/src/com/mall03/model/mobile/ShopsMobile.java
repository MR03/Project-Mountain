package com.mall03.model.mobile;

import com.jfinal.plugin.activerecord.Model;

/**
 * Created by Administrator on 2016/4/6.
 */
public class ShopsMobile extends Model<ShopsMobile> {
    public static final ShopsMobile dao = new ShopsMobile();

    public ShopsMobile all(String id) {
        ShopsMobile allById = ShopsMobile.dao.findById(id);
        return allById;
    }
}
