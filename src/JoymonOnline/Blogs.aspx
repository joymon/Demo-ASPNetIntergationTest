<%@ Page Language="C#" MasterPageFile="~/site.master" AutoEventWireup="true" CodeBehind="Blogs.aspx.cs"
    Inherits="JoymonOnline.Blogs" Title="Joymon Online | Blogs" %>

<%@ OutputCache CacheProfile="Cache1Day" %>
<%@ Register TagPrefix="ctrls" TagName="BlogPostView"
    Src="~/Controls/BlogPostView.ascx" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="Server">
    <script src="Scripts/angular.js" type="text/javascript"></script>
    <script src="JS/app/app.js" type="text/javascript"></script>
    <script src="JS/app/feed.component.js" type="text/javascript"></script>
    <script src="JS/app/feed.service.js" type="text/javascript"></script>

    <div class="shim column"></div>

    <div ng-app="JoymonOnline" class="page" id="links">
        <div id="content">
            <h3>Blogs</h3>
            <p>This is my blogosphere.Here you can find few of my blogs with their latest posts.You may read all by clicking on the coresponding URL.</p>

            <blog-feed rss="http://feeds2.feedburner.com/JoymonsCode"></blog-feed>
            <blog-feed rss="http://feeds2.feedburner.com/Joyfulwpf"></blog-feed>
            <blog-feed rss="http://feeds2.feedburner.com/silverlightedweb"></blog-feed>


        </div>
    </div>
</asp:Content>

