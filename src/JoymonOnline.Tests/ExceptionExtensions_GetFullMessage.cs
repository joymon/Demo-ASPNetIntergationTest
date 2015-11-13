using Joymononline;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

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
