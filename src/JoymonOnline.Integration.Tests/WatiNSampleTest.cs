using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WatiN.Core;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class WatiNSampleTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            //Not working as it needs IIS in build machine which is not present in VS Online.
            //
            //using (var browser = new IE("http://localhost/joymononline/default.aspx"))
            //{
            //    //browser.TextField(Find.ByName("q")).TypeText("WatiN");
            //    //browser.Button(Find.ByName("btnG")).Click();

            //    Assert.IsTrue(browser.Title.Equals("Joymon Online | Home"));
            //    browser.Close();
            //}
        }
    }
}
