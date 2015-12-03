using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace JoymonOnline
{
    public static class ExceptionExtensions
    {
        public static string GetFullMessage(this Exception ex)
        {
            string message= string.Empty;
            if(ex != null)
            {
                message = message +string.Format("Exception:{0}\nMessage:{1}\nStackTrace:\n{2}\n\n{3}", 
                    ex.GetType(),
                    ex.Message,
                    ex.StackTrace, 
                    GetFullMessage(ex.InnerException));
            }
            return message;
        }
        public static string GetFullMessageInHTML(this Exception ex)
        {
            string message = string.Empty;
            if (ex != null)
            {
                message = message + string.Format("Exception:{0}<br/>Message:{1}<br/>StackTrace:<br/>{2}<br/><br/>{3}",
                    ex.GetType(),
                    ex.Message,
                    ex.StackTrace,
                    GetFullMessage(ex.InnerException));
            }
            return message;
        }
    }
}
