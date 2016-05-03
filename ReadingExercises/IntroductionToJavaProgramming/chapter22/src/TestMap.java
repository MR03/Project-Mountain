import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

/**
 * Created by Administrator on 2016/2/22.
 */
public class TestMap {
    public static void main(String[] args) {
        HashMap<String, Integer> hashMap = new HashMap<String, Integer>();
        hashMap.put("Smith", 30);
        hashMap.put("anderson", 31);
        hashMap.put("LEwis", 29);
        hashMap.put("Cook", 29);
        System.out.println(hashMap + "\n");

        TreeMap<String, Integer> treeMap = new TreeMap<String, Integer>(hashMap);
        System.out.println(treeMap + "\n");

        LinkedHashMap<String, Integer> stringIntegerLinkedHashMap = new LinkedHashMap<String, Integer>(16, 0.75f, true);
        stringIntegerLinkedHashMap.put("Smith", 30);
        stringIntegerLinkedHashMap.put("anderson", 31);
        stringIntegerLinkedHashMap.put("LEwis", 29);
        stringIntegerLinkedHashMap.put("Cook", 29);

        System.out.println(stringIntegerLinkedHashMap);


    }
}
