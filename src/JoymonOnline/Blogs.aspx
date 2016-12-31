<%@ Page Language="C#" MasterPageFile="~/site.master" AutoEventWireup="true" CodeBehind="Blogs.aspx.cs"
    Inherits="JoymonOnline.Blogs" Title="Joymon Online | Blogs" %>

<%@ OutputCache CacheProfile="Cache1Day" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="Server">
    <blogs-view></blogs-view>
</asp:Content>

