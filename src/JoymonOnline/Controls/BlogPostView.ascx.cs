using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JoymonOnline.Controls
{
    public partial class BlogPostView : System.Web.UI.UserControl
    {
        public string TrimSubject(string subject)
        {
            string plainText = HtmlTagsRemover.Remove(subject);
            string retVal = plainText;// HttpUtility.HtmlEncode(subject.Trim());
            if (retVal.Length > 150)
            {
                retVal = retVal.Substring(0, 150) + "...";
            }
            return retVal;
        }
    }
}
