<%@ Page Title="Joymon Online | Projects" Language="C#" EnableViewState="false"
    MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Projects.aspx.cs" Inherits="JoymonOnline.Projects" %>

<%@ OutputCache CacheProfile="Cache1Week" %>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="Main">
    <script src="Scripts/angular.js" type="text/javascript" ></script>
    <script src="Scripts/angular-sanitize.js" type="text/javascript"></script>

    <script src="JS/app/app.js" type="text/javascript" ></script>
    <script src="JS/app/projects.component.js" type="text/javascript"></script>
    <script src="JS/app/projects.service.js" type="text/javascript"></script>
    <div class="shim column"></div>
    
    <div ng-app="JoymonOnline" class="page" id="resume">
        
        <div id="content">
            <h3>Applications</h3>
            <p>
                Below are my personal projects which are available to public use.
           
            </p>
            <projects></projects>
            
        </div>
    </div> 
</asp:Content>
