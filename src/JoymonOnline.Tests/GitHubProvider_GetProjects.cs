using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Joymononline;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

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
        [TestMethod]
        public void WhenCalled_GetDetails()
        {
            //TODO - this is calling service. Use DI to avoid that.
            IProjectDataProvider provider = new GitHubDataProvider();
            List<Project> projects= provider.GetProjects().ToList();
            Assert.IsTrue(projects.Count() == 2, "Expected {0}.But actual was {1}", 1, projects.Count());
        }
    }
}
