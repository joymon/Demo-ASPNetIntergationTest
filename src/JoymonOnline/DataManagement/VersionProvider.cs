using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JoymonOnline
{
    public static class VersionProvider
    {
        public static Lazy<string> Version = new Lazy<string>(() => typeof(VersionProvider).Assembly.GetName().Version.ToString());
    }
}