using System;
using System.IO;
using FakeHost;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.IntegrationTests
{
    public abstract class IntegrationTest
    {
        [TestInitialize()]
        public virtual void Initialize()
        {
            Browser.InitializeAspNetRuntime(
                  Path.GetFullPath(@"..\..\..\UI"));
        }
    }
}
