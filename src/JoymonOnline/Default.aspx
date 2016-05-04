<%@ Import Namespace="JoymonOnline" %>
<%@	Page Language="C#" MasterPageFile="~/site.master" Title="Joymon Online | Home" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JoymonOnline.Default" %>

<asp:content id="Content1" contentplaceholderid="Main" runat="server">

	<div class="shim column"></div>
	
	<div class="page" id="home">
		<div id="sidebar">
			<h4>Contact me</h4>
			<a href="mailto:joymon@gmail.com">joymon@gmail.com</a><br />
			Mob : +1 661-750-9787,NO1-NOJOY-16
		</div>
		<div id="content">
			<h3>Welcome	to JoymonOnline</h3>
			<p>Hi I am Joy.Here you can find details to know me more.It includes my personal details,education details and professional details.	</p>
			<hr	/>
			<div id="whatsnew">
				<h4>What's New</h4>
                <%=DataProviderFactory.GetWhatsNewDataProvider().GetData() %>
			</div>
			<div id="coollinks">
				<h4>Cool Links</h4>
				<ul	class="link">
					<li><a href="http://www.joyfulwpf.blogspot.com" target="_blank">My WPF blog</a></li>
					<li><a href="http://www.joymonscode.blogspot.com" target="_blank">Joymon v/s Code</a></li>
				</ul>
			</div>
			<hr	/>
			<h4>Who Am I ?? </h4>
            <%=DataProviderFactory.GetWhoAmIDataProvider().GetData() %>
		</div>
	</div>

	<asp:ObjectDataSource ID="ObjectDataSource1" Runat="server" TypeName="PhotoManager" 
		SelectMethod="GetPhotos">
	</asp:ObjectDataSource>

</asp:content>
