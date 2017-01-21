using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using JoymonOnline;
namespace JoymonOnline.Tests
{
    [TestClass]
    public class Projects_GetVisibilityFromSourceUrl
    {
        [TestMethod]
        public void WhenProjectHasNoSourceUrl_ReturnFalse()
        {
            Projects prj = new Projects();
            bool expected = false;
            bool actual =prj.GetVisibilityFromSourceUrl(new Project()
            {
                Name = "test project",
                Description = "test desc",
                Url ="some url"
            });
            Assert.AreEqual(expected, actual, "GetVisibilityFromSourceUrl returned wrong value");
        }
        [TestMethod]
        public void WhenProjectHasSourceUrl_Returntrue()
        {
            Projects prj = new Projects();
            bool expected = true;
            bool actual = prj.GetVisibilityFromSourceUrl(new Project() {SourceUrl="demourl.aspx" });
            Assert.AreEqual(expected, actual, "GetVisibilityFromSourceUrl returned wrong value");
        }
    }
}
