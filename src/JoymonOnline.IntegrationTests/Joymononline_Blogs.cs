using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using System.Net;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;
using System.Web.UI;
using System.Diagnostics;
using FakeHost;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class Joymononline_Blogs :IntegrationTest
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
        [HostType("ASP.NET")]
        [UrlToTest(Common.BaseUrl + "Blogs.aspx")]
        public void WhenChangeLogPageIsRequested_TitleShouldBeProper()
        {
            Page page = TestContext.RequestedPage;
            Console.WriteLine(Common.BaseUrl + "Blogs.aspx");
            
            Assert.IsTrue(page.Title.Equals("Joymon Online | Blogs"),page.Title);
        }
        [TestMethod]
        public void WhenBlogsIsRequested_TitleShouldBeProper()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Blogs.aspx");
                Assert.IsTrue(result.ResponseText.Contains("Joymon Online | Blogs"), "Default page is wrong");
            }
        }
    }
}
