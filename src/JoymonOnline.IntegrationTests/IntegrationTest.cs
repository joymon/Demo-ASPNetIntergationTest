using System;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using FakeHost;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.IntegrationTests
{
    [ExcludeFromCodeCoverage]
    public abstract class IntegrationTest
    {
        [TestInitialize()]
        public virtual void Initialize()
        {
            Browser.InitializeAspNetRuntime(
                  Path.GetFullPath(@"..\..\..\JoymonOnline"));
        }
    }
}
