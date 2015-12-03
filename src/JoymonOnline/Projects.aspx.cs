using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JoymonOnline
{
    public partial class Projects : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        public bool GetVisibilityFromSourceUrl(object dataItem)
        {
            Project prj = dataItem as Project;
            if (string.IsNullOrWhiteSpace(prj.SourceUrl))
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}
