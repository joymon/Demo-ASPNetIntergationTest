using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace JoymonOnline
{
    /// <summary>
    /// Removes tags from html string.
    /// </summary>
    /// <remarks>Taken from http://stackoverflow.com/questions/785715/how-can-i-strip-html-tags-from-a-string-in-asp-net
    /// </remarks>
    public class HtmlTagsRemover
    {
        public static string Remove(string html)
        {
            return Regex.Replace(html, "<.*?>", String.Empty);
        }
    }
}