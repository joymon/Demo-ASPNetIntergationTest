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
            //Debugger.Launch();
        }
        
        //[TestMethod]
        [HostType("ASP.NET")]
        [UrlToTest(Common.BaseUrl+"default.aspx")]
        public void WhenDefaultIsRequested_ShouldReturn200AndContent()
        {
            Page page = TestContext.RequestedPage;
            //Debugger.Break();
            Assert.IsTrue(page.Title.Equals("Joymon Online | Home"),page.Title);
        }
        /// <summary>
        /// This method will check a url to see that it does not return server or protocol errors
        /// </summary>
        /// <param name="url">The path to check</param>
        /// <returns></returns>
        /// <remarks>http://stackoverflow.com/questions/924679/c-sharp-how-can-i-check-if-a-url-exists-is-valid</remarks>
        public bool UrlIsValid(string url)
        {
            try
            {
                HttpWebRequest request = HttpWebRequest.Create(url) as HttpWebRequest;
                request.Timeout = 5000; //set the timeout to 5 seconds to keep the user from waiting too long for the page to load
                request.Method = "HEAD"; //Get only the header information -- no need to download any content

                HttpWebResponse response = request.GetResponse() as HttpWebResponse;

                int statusCode = (int)response.StatusCode;
                if (statusCode >= 100 && statusCode < 400) //Good requests
                {
                    return true;
                }
                else if (statusCode >= 500 && statusCode <= 510) //Server Errors
                {
                    Console.WriteLine(String.Format("The remote server has thrown an internal error. Url is not valid: {0}", url));
                    return false;
                }
            }
            catch (WebException ex)
            {
                if (ex.Status == WebExceptionStatus.ProtocolError) //400 errors
                {
                    return false;
                }
                else
                {
                    Console.WriteLine(String.Format("Unhandled status [{0}] returned for url: {1}", ex.Status, url), ex);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(String.Format("Could not test url {0}.", url), ex);
            }
            return false;
        }
    }
}
