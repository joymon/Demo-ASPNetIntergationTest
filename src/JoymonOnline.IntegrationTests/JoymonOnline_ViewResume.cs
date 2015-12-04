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
    public class JoymonOnline_ViewResume :IntegrationTest
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
        /// Test method for css default.css
        /// </summary>
        /// <remarks></remarks>
        
        [TestMethod]
        public void WhenViewResumeIsRequested_ShouldReturnIframeInContent()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/ViewResume.aspx");
                int actual = result.ResponseXml.Descendants("iframe").Count();
                Assert.AreEqual(1,actual,"iframe missing");
            }
        }

        [TestMethod]
        public void WhenViewResumeIsRequested_ShouldReturnProperTtile()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/ViewResume.aspx");
                string actual = result.ResponseXml.Descendants("title").First().Value.Trim();
                Assert.AreEqual("Joymon Online | View Resume", actual, "ViewResume page title is wrong");
            }
        }
      
    }
}
