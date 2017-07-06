package cucumberJava;

/**
 * Created by Ibermatica on 05/05/2017.
 */
import java.awt.event.KeyEvent;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.service.local.AppiumDriverLocalService;

import java.awt.AWTException;
import java.awt.Robot;

import cucumber.annotation.es.Dado;
import cucumber.annotation.es.Entonces;
import cucumber.annotation.es.Cuando;
import cucumber.annotation.es.Y;


public class cucumberJava {
    private WebDriver driver;
    AppiumDriverLocalService appiumService ;
    String appiumServiceUrl ;

    @Dado("que me conecte a la aplicacion$")
    public void openDevices(){
        appiumService = AppiumDriverLocalService.buildDefaultService();
        appiumService.start();
        appiumServiceUrl = appiumService.getUrl().toString();
        System.out.println("Appium Service Address : - "+ appiumServiceUrl);


        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("platformName","Android");

     /*
        capabilities.setCapability("deviceName","Xperia M2");
        capabilities.setCapability("platformVersion","5.1.1");
      */

        capabilities.setCapability("deviceName","Aquaris E5");
        capabilities.setCapability("platformVersion","6.0.1");
       /*
        capabilities.setCapability("deviceName","SM-G130HN");
        capabilities.setCapability("platformVersion","4.4.2");
        */

        capabilities.setCapability("browser_Name","Android");
        //capabilities.setCapability("app","/android-debug.apk");

        //capabilities.setCapability("app","src/apk/android-debug.apk");
        capabilities.setCapability("app","src/apk/AppiumDemo.apk");

        //capabilities.setCapability("app","C:\\Program Files (x86)\\Jenkins\\workspace\\iberbank_maestro\\src\\apk\\android-debug.apk");
       //capabilities.setCapability("app","src/apk/android-debug.apk");

        // capabilities.setCapability("app","/Iberbank_fuentes/IberBank.apk");
        try{
            //driver = new RemoteWebDriver(new URL("http://0.0.0.0:4723/wd/hub"), capabilities) {};
            driver = new AndroidDriver(new URL(appiumServiceUrl), capabilities);
            driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        } catch (MalformedURLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    };



    @Cuando("^introduzco usuario \"([^\"]*)\" y contraseña \"([^\"]*)\"$")
    public void I_enter_Usuario_as_and_Contrasena_as(String arg1, String arg2) throws AWTException {


       driver.findElement(By.id("user")).sendKeys(arg1);
       driver.findElement(By.id("pass")).sendKeys(arg2);
        driver.findElement(By.id("btnLogin")).click();

    }

    @Y("^para consultar cuentas introduje usuario \"([^\"]*)\" y contraseña \"([^\"]*)\"$")
    public void I_enter_Usuario_as_and_Contrasena_as2(String arg1, String arg2) throws AWTException {


        driver.findElement(By.id("user")).sendKeys(arg1);
        driver.findElement(By.id("pass")).sendKeys(arg2);

        driver.findElement(By.id("btnLogin")).click();

    }


    @Cuando("pulso en cuenta$")
        public void click_account()
        {
            driver.findElement(By.id("lblListHeader")).click();
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
            }
        }

        @Entonces("vere el saldo")
        public void veo_saldo(){
            Assert.assertTrue(isElementPresent(By.id("listaCuentas")));
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
            }
            driver.quit();
            System.out.println("Stop appium service");
            appiumService.stop();
        }

    @Entonces("no me dejara entrar a la aplicacion$")
    public void loginshouldbeunsuccessful() {

        Assert.assertTrue(isElementPresent(By.id("alertMessage")));

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
        }

        System.out.println("Stop driver");

        driver.quit();
        System.out.println("Stop appium service");
        appiumService.stop();

        //driver.quit();


    }

    @Entonces("entrare en la aplicacion$")
    public void loginshouldbesuccessful() {
        Assert.assertFalse(isElementPresent(By.id("alertMessage")));

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
        }

        System.out.println("Stop driver");

        driver.quit();
        System.out.println("Stop appium service");
        appiumService.stop();

    }


    public boolean isElementPresent(By by){
        try {
            driver.findElement(by);
            return true;
        }
        catch (org.openqa.selenium.NoSuchElementException e){
            return false;
        }
    }



}
