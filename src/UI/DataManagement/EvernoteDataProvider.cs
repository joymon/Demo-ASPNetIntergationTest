using EvernoteSDK;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using System.Web;

namespace Joymononline
{
    /// <summary>
    /// Evernote data provider. Returns data from joymon@gmail.com evernote account.
    /// </summary>
    public class EvernoteDataProvider :IWhatsNewDataProvider,IWhoAmIDataProvider
    {
        static EvernoteDataProvider()
        {
            ENSession.SetSharedSessionDeveloperToken(evernote, noteStoreUrl);
        }
        const string evernote= "";
        const string noteStoreUrl = "https://www.evernote.com/shard/s243/notestore";
        const string notebookName = "joymononline";
        string IWhatsNewDataProvider.GetData()
        {
            //string whatsNew = GetFromNote("whatsnew");
            string whatsNew = @"Celebrated Johan's first B'Day.<br/>Blessed with Baby Boy Johan.<br/>Joined <a href='http://www.orioninc.com' target='_blank' data-mce-href='http://www.orioninc.com'>Orion Inc</a> US office as Architect.";

            return whatsNew;
        }
        [System.Security.Permissions.PermissionSet(System.Security.Permissions.SecurityAction.Assert, Unrestricted =true )]
        private static string GetFromNote(string noteName)
        {
            if (!ENSession.SharedSession.IsAuthenticated)
            {
                ENSession.SharedSession.AuthenticateToEvernote();
            }
            IList<ENNotebook> notebooks = ENSession.SharedSession.ListNotebooks();
            ENNoteSearch search = new ENNoteSearch(noteName);
            var notes = ENSession.SharedSession.FindNotes(search, null, ENSession.SearchScope.All, ENSession.SortOrder.Normal, 2);
            ENNote note = ENSession.SharedSession.DownloadNote(notes[0].NoteRef);
            Console.WriteLine(note.Title);
            Console.WriteLine(note.TextContent);
            Console.WriteLine(note.HtmlContent);
            return note.HtmlContent;
        }

        string IWhoAmIDataProvider.GetData()
        {
            return GetFromNote("whatsnew");
        }
    }
}