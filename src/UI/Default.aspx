<%@ Import Namespace="Joymononline" %>
<%@	Page Language="C#" MasterPageFile="~/site.master" Title="Joymon Online | Home" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Joymononline.Default" %>

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
					<li><a href="http://www.silverlightedweb.blogspot.com" target="_blank">My Silverlight blog</a></li>
					<li><a href="http://joymon.picasaweb.google.com" target="_blank">Photos in Picasa</a></li>
				</ul>
			</div>
			<hr	/>
			<h4>Who Am I ?? </h4>
			<p>I am a software engineer currently working in  <a href="http://www.orioninc.com" target="_blank"> Orion Inc</a> located at New Jersey, US.I have specialized mainly in .Net technologies such as WPF, WCF, ASP.Net MVC, Linq, Silverlight etc...My earlier technologies were .net windows forms and ASP.Net web forms.</p>
			<p>Regarding education,I completed MBA from <a href="http://www.b-u.ac.in/sde/default.asp" target="_blank">Bharatiar university</a> Coimbatore specialized in <a href="http://www.b-u.ac.in/sde/courses.html" target="_blank">ISM (Information Systems Management)</a>.My previous courses are B.Tech and Diploma.
			I graduated in the year of 2005 from <a href="http://www.annauniv.edu/" target="_blank">Anna university Chennai</a> with specialization in Computer Science.
			The diploma is also in the same computer science which is obtained from <a href="http://www.sreeramapoly.org/" target="_blank"> Sree Rama Govt. Polytechnic, Triprayar</a> in the year 2002.Schools I studied are <a href="https://www.facebook.com/SKHSSApm" target="_blank" >S.K.H.S Anandapuram</a>, I.J.L.P.S. Kallettumkara and St.Joseph's E.M.H.S Anandapuram.</p>
			<p>I was born in the year 1984 in a small Christian family.My family members include My father,mother,sister and aunt.
			.My father is an ex-government employee,mother is a retired teacher and my sister working as registered nurse. Married to Dhanya in the year 2012 and we got our first gift Johan in 2014.</p>
			
		</div>
	</div>

	<asp:ObjectDataSource ID="ObjectDataSource1" Runat="server" TypeName="PhotoManager" 
		SelectMethod="GetPhotos">
	</asp:ObjectDataSource>

</asp:content>
