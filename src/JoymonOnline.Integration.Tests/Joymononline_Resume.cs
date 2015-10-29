using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using System.Net;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;
using System.Web.UI;
using System.Diagnostics;

namespace UI.Tests
{
    [TestClass]
    public class Joymononline_Resume
    {
#region "Test specific"
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
            //Debugger.Launch();
        }
#endregion

        //[TestMethod]
        [HostType("ASP.NET")]
        [UrlToTest(Common.BaseUrl + "Resume.aspx")]
        public void WhenResumePageIsRequested_ShouldReturn200AndContent()
        {
            Page page = TestContext.RequestedPage;
            //Debugger.Break();
            Assert.IsTrue(page.Title.Equals("Joymon Online | Resume"), page.Title);
        }
    }
}
