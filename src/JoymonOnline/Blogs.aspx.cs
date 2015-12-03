using System;

namespace JoymonOnline
{
    public partial class Blogs : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
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