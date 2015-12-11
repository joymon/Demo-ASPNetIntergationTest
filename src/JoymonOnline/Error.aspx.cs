using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JoymonOnline
{
    public partial class Error : System.Web.UI.Page
    {
        public string ExceptionDetails
        {
            get
            {
                Exception ex = Server.GetLastError();
                Response.StatusCode = GetStatusCodeFromException(ex);
                return ex.GetFullMessage();   
            }
        }

        private int GetStatusCodeFromException(Exception ex)
        {
            int httpCode = 500;
            HttpException httpEx = ex as HttpException;
            if(httpEx != null)
            {
                httpCode= httpEx.GetHttpCode();
            }
            return httpCode;
        }
    }
}