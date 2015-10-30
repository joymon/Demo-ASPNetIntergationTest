using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using System.Net;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;
using System.Web.UI;
using System.Diagnostics;
using FakeHost;

namespace UI.Tests
{
    [TestClass]
    public class Joymononline_Default
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
        [TestInitialize]
        public void Initialize()
        {
            Browser.InitializeAspNetRuntime(
                 Path.GetFullPath(@"..\..\..\UI"));
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
                Assert.IsTrue(result.ResponseText.Contains("Joymon Online | Home"), "Default page is wrong");
            }
        }
      
    }
}
