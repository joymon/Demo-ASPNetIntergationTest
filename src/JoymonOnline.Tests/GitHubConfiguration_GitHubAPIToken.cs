using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.Tests
{
    [TestClass]
    public class GitHubConfiguration_GitHubAPIToken
    {
        [TestMethod]
        public void WhenThereIsNoConfigEntry_ReturnNull()
        {
            string expected = null;
            string actual = GitHubConfiguration.GitHubAPIToken.Value;
            Assert.AreEqual(expected, actual, "There is not GithubAPI token");
        }
    }
}
