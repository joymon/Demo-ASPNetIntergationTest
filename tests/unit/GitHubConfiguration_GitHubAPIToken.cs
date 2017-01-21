using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.Tests
{
    [TestClass]
    public class GitHubConfiguration_GitHubAPIToken
    {
        [TestMethod]
        public void WhenTokenIsReadFromConfig_ShouldNotbeNull()
        {
            string expected = null;
            string actual = GitHubConfiguration.GitHubAPIToken.Value;
            Assert.AreNotEqual(expected, actual, "There is no GitHubAPIToken in app.config");
        }
    }
}
