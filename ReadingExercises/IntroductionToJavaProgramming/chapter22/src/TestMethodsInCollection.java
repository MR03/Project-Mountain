import java.util.HashSet;

/**
 * Created by Administrator on 2016/2/20.
 */
public class TestMethodsInCollection {
    public static void main(String[] args) {
        HashSet<String> set1 = new HashSet<String>();

        set1.add("London");
        set1.add("Paris");
        set1.add("NewYork");
        set1.add("Beijing");
        set1.add("New York");
        set1.add("New York");
        set1.add("New York");
        set1.add("New York");

        System.out.println("set1 is " + set1);
        System.out.println(set1.size() + " elements in set1");

        set1.remove("London");
        System.out.println("\nset1 is " + set1);
        System.out.println(set1.size() + " elements in set1");

        HashSet<String> set2 = new HashSet<String>();
        set1.add("London");
        set1.add("Paris");
        set1.add("NewYork");

    }
}
