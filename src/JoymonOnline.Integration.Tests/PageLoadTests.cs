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
    public class PageLoadTests
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
        //
        // Use TestInitialize to run code before running each test 
        [TestInitialize()]
        public void MyTestInitialize() {
            //Temp catch to see why this is not working in VSOnline CI
                Browser.InitializeAspNetRuntime(
                       Path.GetFullPath(@"..\..\..\UI"));
        }
        //
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
                Assert.IsTrue(result.StatusCode== 200, "Main page failed");
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
    }
}
