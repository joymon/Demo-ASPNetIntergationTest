using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FakeHost;
using System.IO;
using System.Net;
using Joymononline;

namespace JoymonOnline.IntegrationTests
{
    /// <summary>
    /// Summary description for MVCIntegrationFrameworkTest
    /// </summary>
    [TestClass]
    public class PageLoadTests : IntegrationTest
    {
        public PageLoadTests()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        private TestContext testContextInstance;

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
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

        #region Additional test attributes
        //
        // You can use the following additional attributes as you write your tests:
        //
        // Use ClassInitialize to run code before running the first test in the class
        // [ClassInitialize()]
        // public static void MyClassInitialize(TestContext testContext) { }
        //
        // Use ClassCleanup to run code after all tests in a class have run
        // [ClassCleanup()]
        // public static void MyClassCleanup() { }

        // Use TestCleanup to run ecode after each test has run
        // [TestCleanup()]
        // public void MyTestCleanup() { }
        //
        #endregion

        [TestMethod]
        public void TestDefaultPage()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/");
                Assert.IsTrue(result.StatusCode == 200, "Main page failed");
            }
        }
        [TestMethod]
        public void TestResumePage()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Resume.aspx");
                Assert.IsTrue(result.StatusCode == 200, "Main page failed");
            }
        }
        [TestMethod]
        public void TestBlogsPage()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Blogs.aspx");
                Assert.IsTrue(result.StatusCode == 200, "Main page failed");
            }
        }
        [TestMethod]
        public void TestLinksPage()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Links.aspx");
                Assert.IsTrue(result.StatusCode == 200, "Main page failed");
            }
        }
        [TestMethod]
        public void TestProjectsPage()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Projects.aspx");
                Assert.IsTrue(result.StatusCode == 200, "Main page failed");
            }
        }
        [TestMethod]
        public void TestChangelogPage()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/Changelog.aspx");
                Assert.IsTrue(result.StatusCode == 200, "Main page failed");
            }
        }
        /// <summary>
        /// Error page test
        /// </summary>
        /// <remarks>Why its 200. Need to change to 404</remarks>
        [TestMethod]
        public void WhenWrongUrlIsRequested_ShouldReturn()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/PageNotExists.aspx");
                Assert.IsTrue(result.StatusCode == 200, "Main page failed");
            }
        }
    }
}
