using System;
using System.Linq;
using FakeHost;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class Joymononline_Error :IntegrationTest
    {
        [TestMethod]
        public void WhenPageIsNotValid_RedirectToErrorPage()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/PageNotExists.aspx");
                Assert.IsTrue(result.ResponseText.Contains("Joymon Online | Error"), "Error page is wrong");
            }
        }
        [TestMethod]
        public void WhenPageIsNotValid_ErrorPageShouldHaveProperTitle()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/PageNotExists.aspx");
                string actual = result.ResponseXml.Descendants("title").First().Value.Trim();
                Assert.AreEqual("Joymon Online | Error", actual, "Error page is wrong");
            }
        }

    }
}
