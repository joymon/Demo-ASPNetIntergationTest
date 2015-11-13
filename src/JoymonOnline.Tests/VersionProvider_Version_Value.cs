using System;
using JoymonOnline;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.Tests
{
    [TestClass]
    public class VersionProvider_Version_Value
    {
        [TestMethod]
        public void WhenInvoked_ReturnTheVersionOfJoymonOnlineAssembly()
        {
            string expectedValue = typeof(VersionProvider).Assembly.GetName().Version.ToString();

            string actialValue = VersionProvider.Version.Value;
            Assert.IsTrue(expectedValue.Equals(actialValue), "Expecting {0}. But VersionProvider gave {1}",expectedValue,actialValue);
        }
    }
}
