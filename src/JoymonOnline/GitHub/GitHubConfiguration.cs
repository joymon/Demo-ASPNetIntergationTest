using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace JoymonOnline
{
    public class GitHubConfiguration
    {
        public static Lazy<string> GitHubAPIToken = new Lazy<string>(() =>
        {
                return ConfigurationManager.AppSettings["GitHubAPIToken"];
        });
    }
}