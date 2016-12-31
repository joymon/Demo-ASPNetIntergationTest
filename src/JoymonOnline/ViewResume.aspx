<%@ Page Title="Joymon Online | View Resume" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="ViewResume.aspx.cs" Inherits="JoymonOnline.ViewResume" %>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="Main">
    
    <script src="Scripts/angular.js" type="text/javascript"></script>
    <script src="Scripts/angular-sanitize.js" type="text/javascript"></script>

    <script src="JS/app/app.js" type="text/javascript"></script>
    <script src="JS/app/viewResume.component.js" type="text/javascript"></script>

    <div id="ngWrapper" ng-app="JoymonOnline">
    <view-resume></view-resume>    
    </div>
</asp:Content>
