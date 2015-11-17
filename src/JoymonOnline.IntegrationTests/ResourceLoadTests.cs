using System;
using FakeHost;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class ResourceLoadTests :IntegrationTest
    {
        [TestMethod]
        public void WhenDefaultCSSIsRequested_ShouldReturn200AndContent()
        {
            int expectedSize = 7972;
            using (var browser = new Browser())
            {
                var result = browser.Get("/App_Themes/Black/Default.css");
                var actualSize = result.ResponseText.Length;
                Assert.IsTrue(actualSize == expectedSize, "The expected size of {0} is {1}. But actual is {2}", "/App_Themes/Black/Default.css",expectedSize,actualSize);
            }
        }
    }
}
