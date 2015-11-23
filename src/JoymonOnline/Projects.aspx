<%@ Page Title="Projects" Language="C#"
     MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Projects.aspx.cs" Inherits="Joymononline.Projects" %>

<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="Main">
    <div class="shim column"></div>

    <div class="page" id="resume">
        <div id="content">
            <h3>Applications</h3>
            <p>
                Below are my personal projects which are available to public use.
            </p>

            <h4>Karel simulator</h4>
            <p class="first">
                This is an educational utility. It simplifies programming to a level of just controlling a robot using a fixed set of instructions. 
                <br/>
                Application url
                <a href="http://joymononline.in/apps/karel/karel.htm">http://joymononline.in/apps/karel/karel.htm</a>
            </p>
            <h4>Prayer Book</h4>
            <p class="first">
                This is an online prayer book currently having prayers in Malayalam only. This is developed for my own personal use. But anybody can use it. 
                <br />Application url
                <a href="http://joymononline.in/apps/prayerbook/index.html">http://joymononline.in/apps/prayerbook/index.html</a>
            </p>
            <h4> JoyfulTools for Visual Studio</h4>
            <p class="first">
                This is a Visual Studio Extension to do things easily. Mainly related to improve code quality. Current capabilities are removal of unwanted whitespaces, commented code.
                <br />
                Application url
                <a href ="https://visualstudiogallery.msdn.microsoft.com/c9256992-8b91-4448-b31c-fa1cd6a27455">https://visualstudiogallery.msdn.microsoft.com/c9256992-8b91-4448-b31c-fa1cd6a27455</a>
                <br />
                Source code <a href="https://github.com/joymon/joyful-visualstudio">https://github.com/joymon/joyful-visualstudio</a>
            </p>
        </div>
    </div>

</asp:Content>
