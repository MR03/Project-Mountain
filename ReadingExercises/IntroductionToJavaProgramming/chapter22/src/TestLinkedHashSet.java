import java.util.LinkedHashSet;

/**
 * Created by Administrator on 2016/2/22.
 */
public class TestLinkedHashSet {
    public static void main(String[] args) {
        LinkedHashSet<String> set = new LinkedHashSet<String>();

        set.add("London");
        set.add("Paris");
        set.add("NewYork");
        set.add("Beijing");
        set.add("New York");
        set.add("New York");
        set.add("New York");

        System.out.println(set);

        for(Object element: set) System.out.println(element.toString().toLowerCase());


    }
}
