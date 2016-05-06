package measurement;

import com.AlphaMM.utils.DateUtils;
import com.AlphaMM.utils.MyUtils;
import org.junit.Test;

public class MyUtilsTestTest {

    @Test
    public void test1() throws Exception {
        System.out.println(MyUtils.randomInt(999999));
    }

    @Test
    public void test2() throws Exception {
        System.out.println(DateUtils.getNowTime("yyyyMMdd"));
    }
}