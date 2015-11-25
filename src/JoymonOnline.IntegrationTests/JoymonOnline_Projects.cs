using System;
using FakeHost;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class JoymonOnline_Projects : IntegrationTest
    {
        [TestMethod]
        public void WhenProjectsPageIsRequested_ShouldReturnWithProperTitle()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Projects.aspx");
                Assert.IsTrue(result.ResponseText.Contains("Joymon Online | Projects"), "Projects page title is wrong");
            }
        }
    }
}
