using System;
using System.Security;
using JoymonOnline;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UI.Tests
{
    [TestClass]
    public class ExceptionExtensions_GetFullMessage
    {
        [TestMethod]
        public void WhenExceptionHasInnerException_ReturnBoth()
        {
            try {

                ThrowException();
            }
            catch(Exception ex)
            {
                string fullMsg = ex.GetFullMessage();
            }

        }
        void ThrowSecurityException()
        {
            throw new SecurityException();

        }
        void ThrowException()
        {
            try {
                ThrowInnerException();
            }
            catch (Exception ex)
            {
                throw new Exception("joy",ex );
            }
        }
        void ThrowInnerException()
        {
            throw new ArgumentException("dfd", "eer");
        }
    }
}
