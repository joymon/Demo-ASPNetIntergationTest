using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using System.Net;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;
using System.Web.UI;
using System.Diagnostics;
using UI.Tests;
using FakeHost;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class Joymononline_Links :IntegrationTest
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
        
        
        //[TestMethod]
        [HostType("ASP.NET")]
        [UrlToTest(Common.BaseUrl +"links.aspx")]
        public void WhenLinksPageIsRequested_TitleShouldBeProper()
        {
            Page page = TestContext.RequestedPage;
            //Debugger.Break();
            Assert.IsTrue(page.Title.Equals("Joymon Online | Links"));
        }
        [TestMethod]
        public void UrlIsValid()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/links.aspx");
                Assert.IsTrue(result.ResponseText.Contains("Joymon Online | Links"), "Links page title is wrong");
            }
        }
    }
}
