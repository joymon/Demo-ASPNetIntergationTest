using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Web;

namespace JoymonOnline
{
    [ExcludeFromCodeCoverage]
    public class Project
    {
        public string Name { get;set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string SourceUrl { get;set; }
    }
}