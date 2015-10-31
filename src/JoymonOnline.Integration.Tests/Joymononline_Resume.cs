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
    public class Joymononline_Resume : IntegrationTest
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
        [TestMethod]
        public void WhenResumePageIsRequested_ShouldReturnProperTitle()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Resume.aspx");
                Assert.IsTrue(result.ResponseText.Contains("Joymon Online | Resume"), "Resumes page title is wrong");
            }
        }
    }
}
