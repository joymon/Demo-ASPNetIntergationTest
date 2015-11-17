using System;
using FakeHost;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class ResourceLoadTests :IntegrationTest
    {
        [TestMethod]
        public void TestDefaultCSS()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/App_Themes/Black/Default.css");
                Assert.IsTrue(result.StatusCode == 200, "Default.CSS failed");
            }
        }
        [TestMethod]
        public void WhenDefaultCSSIsRequested_ShouldReturn200AndContent()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/App_Themes/Black/Default.css");
                var actualSize = result.ResponseText.Length;
                Assert.IsTrue(actualSize > 1, "The expected size of {0} is > 1. But actual was {1}", "/App_Themes/Black/Default.css",actualSize);
            }
        }
    }
}
