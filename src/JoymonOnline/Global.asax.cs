using System;
using System.Web;

namespace JoymonOnline
{
    public class Global : System.Web.HttpApplication
    {
        void Application_Error(object sender, EventArgs e)
        {
            // Code that runs when an unhandled error occurs
            //Clear is really important as Server.Transfer won't clear the things writtne till the exception
            //TODO - Post into blog.
            Response.Clear();

            Server.Transfer("Error.aspx");
        }
    }
}
