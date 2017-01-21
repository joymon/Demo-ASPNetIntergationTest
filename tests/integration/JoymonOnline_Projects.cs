using System.Linq;
using FakeHost;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class JoymonOnline_Projects : IntegrationTest
    {
        [TestMethod]
        public void WhenProjectsPageIsRequested_TheResponseShouldHaveTitle()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Projects.aspx");

                int actual = result.ResponseXml.Descendants("title").Count();
                Assert.AreEqual(1, actual, "Not able to get the title tag");

            }
        }
        [TestMethod]
        public void WhenProjectsPageIsRequested_ShouldReturnWithProperTitle()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Projects.aspx");
                string actual = result.ResponseXml.Descendants("title").First().Value.Trim();

                Assert.AreEqual("Joymon Online | Projects",actual, "Projects page title is wrong");
            }
        }
    }
}
