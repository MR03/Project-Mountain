package com.AlphaMM.utils;



import com.jfinal.core.Controller;
import com.jfinal.i18n.Res;
import com.jfinal.kit.PathKit;
import com.jfinal.upload.UploadFile;
import com.sun.deploy.net.HttpResponse;

import javax.xml.ws.Response;
import java.io.*;

/**
 * Created by Administrator on 2016/5/6.
 */
public class FileUpload extends Controller {

    public void index() {

        UploadFile file = getFile("image", "/temp", 1 * 1024 * 1024, "utf-8"); // 最大上传1M的图片

        String fileName = getPara("fileName"); // 获得图片名称
        fileName = fileName.substring(fileName.lastIndexOf("\\") + 1); // 去前缀
        String extension = fileName.substring(fileName.lastIndexOf(".")); //获得后缀

        File source = new File(PathKit.getWebRootPath() + "/upload/temp/" + fileName); // 获取临时文件对象
        String savePath = PathKit.getWebRootPath() + "/upload/img/" + DateUtils.getNowTime("yyyyMMdd"); // 保存地址
        if(".png".equals(extension) || ".jpg".equals(extension) || ".jpeg".equals(extension) || "bmp".equals(extension))
        {
            // 一个unix时间+6位随机数字的名称
            long unixTimestamp = DateUtils.dateToUnixTimestamp();
            long randomInt = MyUtils.randomInt(999999);
            String fileNumber = String.valueOf(unixTimestamp) + String.valueOf(randomInt);

            fileName = fileNumber + extension; // 上传文件的新名称;

            try {
                FileInputStream fis = new FileInputStream(source);

                File targetDir = new File(savePath);
                if(!targetDir.exists()) {
                    targetDir.mkdirs();
                }

                File target = new File(targetDir, fileName);
                if (!target.exists()) {
                    target.createNewFile();
                }

                FileOutputStream fos = new FileOutputStream(target);
                byte[] bts = new byte[1024 * 20];
                while (fis.read(bts, 0, 1024 * 20) != -1) {
                    fos.write(bts, 0, 1024 * 20);
                }

                fos.close();
                fis.close();
                setAttr("error",0);
                setAttr("src", "/upload/img/" + DateUtils.getNowTime("yyyyMMdd") + "/" + fileName); //输出地址，显示图片用
                setAttr("message", "上传成功!");
                source.delete();
            } catch (FileNotFoundException e) {
                setAttr("error",1);
                setAttr("message", "上传出现错误，请稍后再上传");
            } catch (IOException e) {
                setAttr("error",1);
                setAttr("message", "文件写入服务器出现错误，请稍后再上传");
            }
        } else
        {
            source.delete();
            setAttr("error",1);
            setAttr("message", "允许上传png,jpg,jpeg,bmp类型的图片文件");
        }


        renderJson(new String[]{"error", "src", "message"});
    }
}
