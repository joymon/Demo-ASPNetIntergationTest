using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using System.Net;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;
using System.Web.UI;
using System.Diagnostics;
using FakeHost;
using System.Linq;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class Joymononline_Default :IntegrationTest
    {
        private TestContext testContextInstance;
        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the 
        ///current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        /// <summary>
        /// Test method
        /// </summary>
        /// <remarks>Need to use Debugger.Break(); and attach to w3wp.exe for debugging as it runs inside IIS.</remarks>
        [HostType("ASP.NET")]
        [UrlToTest(Common.BaseUrl+"default.aspx")]
        public void WhenDefaultIsRequested_ShouldReturn200AndContent()
        {
            Page page = TestContext.RequestedPage;
            
            Assert.IsTrue(page.Title.Equals("Joymon Online | Home"),page.Title);
        }

        [TestMethod]
        public void WhenDefaultIsRequested_ShouldReturnProperTtile()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Default.aspx");
                string actual = result.ResponseXml.Descendants("title").First().Value.Trim();
                Assert.AreEqual("Joymon Online | Home",actual, "Default page is wrong");
            }
        }
    }
}
