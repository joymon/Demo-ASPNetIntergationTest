using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Joymononline
{
    public partial class Error : System.Web.UI.Page
    {
        public string ExceptionDetails
        {
            get
            {
                Exception ex = Server.GetLastError();
                return ex.GetFullMessage();   
            }
        }
    }
}