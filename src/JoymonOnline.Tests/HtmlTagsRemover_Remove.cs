using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using System.Net;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;
using System.Web.UI;
using System.Diagnostics;
using Joymononline;

namespace UI.Tests
{
    [TestClass]
    public class HtmlTagsRemover_Remove
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
        public void WhenTextContainsBothOpeningAndEndingTag_ShouldRemoveBoth()
        {
            string input = "<b>joy</b>";
            string expected = "joy";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected,actual), "NOt able to remove opening and closing tags");
        }
        [TestMethod]
        public void WhenTextContainsBothOpeningAndEndingTagWithAttribute_ShouldRemoveBoth()
        {
            string input = "<b name='dfd'>joy</b>";
            string expected = "joy";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected, actual), "NOt able to remove opening and closing tags");
        }
        [TestMethod]
        public void WhenTextContainsSelfClosingTagWithoutAttributes_ShouldReturnEmptyString()
        {
            string input = "<b />";
            string expected = "";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected, actual), "NOt able to remove opening and closing tags");
        }
        [TestMethod]
        public void WhenTextContainsSelfClosingTagWithAttribute_ShouldReturnEmptyString()
        {
            string input = "<b name='joy'></b>";
            string expected = "";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected, actual), "NOt able to remove opening and closing tags");
        }
        [TestMethod]
        public void WhenTextContainsNoClosingTag_ShouldRemove()
        {
            string input = "<b>joy";
            string expected = "joy";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected, actual), "NOt able to remove opening and closing tags");
        }
        [TestMethod]
        public void WhenInputContainsNestedTags_ShouldRemove()
        {
            string input = "<b>joy<a>george</a></b>";
            string expected = "joygeorge";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected, actual), "NOt able to remove opening and closing tags");
        }
        [TestMethod]
        public void WhenInputContainsNestedTagsAndInnerTagDontHaveClosingTag_ShouldRemove()
        {
            string input = "<b>joy<a>george</b>";
            string expected = "joygeorge";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected, actual), "NOt able to remove opening and closing tags");
        }
        [TestMethod]
        public void WhenInputContainsNestedTagsAndInnerTagIsNotClosed_ShouldRemoveInnerTag()
        {
            string input = "<b>joy<a george</a></b>";
            string expected = "joy";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected, actual), "NOt able to remove opening and closing tags");
        }
        [TestMethod]
        public void WhenInputContainsNestedTagsAndInnerTagIsNotClosed_ShouldRemoveInnerTagAndReturnAllContentsInOuterTag()
        {
            string input = "<b>joy<a george</a> mon</b>";
            string expected = "joy mon";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected, actual), "NOt able to remove opening and closing tags");
        }

        [TestMethod]
        public void WhenInputContainsOpeningTagIsNotClosed_ShouldNotRemove()
        {
            string input = "<b joy";
            string expected = "<b joy";
            string actual = HtmlTagsRemover.Remove(input);
            Assert.IsTrue(string.Equals(expected, actual), "NOt able to remove opening and closing tags");
        }
    }
}
