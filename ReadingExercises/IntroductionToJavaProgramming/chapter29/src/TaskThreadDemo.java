/**
 * Created by Administrator on 2016/2/24.
 */
public class TaskThreadDemo {
    public static void main(String[] args) {
        Runnable printCharA = new PrintChar('a', 100);
        Runnable printCharB = new PrintChar('b', 100);
        Runnable printNum = new PrintNum(10000);

        Thread thread1 = new Thread(printCharA);
        Thread thread2 = new Thread(printCharB);
        Thread thread3 = new Thread(printNum);

        thread1.start();
        thread2.start();
        thread3.start();

        while (thread1.isAlive()) {
            System.out.println("线程A正在运行");
        }
    }
}

class PrintChar implements Runnable {

    private char charToPrint;
    private int times;

    public PrintChar(char c, int t) {
        charToPrint = c;
        times = t;
    }

    @Override
    public void run() {
        for(int i = 0; i < times; i++) {
            System.out.println(charToPrint);
        }
    }
}

class PrintNum implements Runnable {
    private int lastNum;

    public PrintNum(int n) {
        lastNum = n;
    }

    @Override
    public void run() {
        for(int i = 0; i < lastNum; i++) {
            System.out.println(" " + i);
        }
    }
}
