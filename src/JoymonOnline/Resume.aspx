<%@ Page Language="C#" MasterPageFile="~/site.master" Title="Joymon Online | Resume"
    CodeBehind="Resume.aspx.cs" Inherits="JoymonOnline.Resume" %>
<%@ OutputCache CacheProfile="Cache1Week" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="server">
<script src="Scripts/angular.js" type="text/javascript"></script>
    <script src="Scripts/angular-sanitize.js" type="text/javascript"></script>

    <script src="JS/app/app.js" type="text/javascript"></script>
    <script src="JS/app/resume.component.js" type="text/javascript"></script>

    <div id="ngWrapper" ng-app="JoymonOnline">
    <resume></resume>    
    </div>    
</asp:Content>
