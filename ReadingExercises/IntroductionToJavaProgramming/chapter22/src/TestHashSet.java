import java.util.HashSet;
import java.util.Iterator;

/**
 * Created by Administrator on 2016/2/20.
 */
public class TestHashSet {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<String>();
        set.add("London");
        set.add("Paris");
        set.add("NewYork");
        set.add("Beijing");
        set.add("New York");
        set.add("New York");
        set.add("New York");
        set.add("New York");

        System.out.println(set);

        Iterator<String> iterator = set.iterator();

        while (iterator.hasNext()) {
            System.out.println(iterator.next().toUpperCase() + " ");
        }

        //不使用迭代器,用for-each循环简化操作
        for(Object element: set) System.out.println(element);
    }
}
