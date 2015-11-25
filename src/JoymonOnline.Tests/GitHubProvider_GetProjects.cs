using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Joymononline;

namespace JoymonOnline.Tests
{
    [TestClass]
    public class GitHubProvider_GetProjects
    {
        [TestMethod]
        public void WhenGitHubProviderIsAssignedToIProjectDataProvider_ShouldCompile()
        {
            IProjectDataProvider provider= new GitHubDataProvider();
            Assert.IsNotNull(provider);
        }
    }
}
