import com.sun.org.apache.xpath.internal.operations.Variable;

import javax.swing.*;
import javax.swing.tree.VariableHeightLayoutCache;

/**
 * Created by Administrator on 2016/2/25.
 */
public class FlashingText extends JApplet implements Runnable {
    private JLabel jlblText =  new JLabel("welecome", JLabel.CENTER);

    public FlashingText() {
        add(jlblText);
        new Thread(this).start();
    }
    @Override
    public void run() {
        try{
            while (true) {
                if(jlblText.getText() == null)
                    jlblText.setText("Welcome");
                else
                    jlblText.setText(null);

                Thread.sleep(200);
            }
        }
        catch (InterruptedException ex) {

        }
    }
}
