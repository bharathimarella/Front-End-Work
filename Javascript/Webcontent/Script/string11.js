function display()
{
	var s="http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/your info.jsp";
	
	alert(s.match("contactus"));
	alert(s.match("your info"));
	alert(s.match)
}
function replace()
{
	var s="http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/your info.jsp";
	var r=document.getElementById("re").value;
	var p=document.getElementById("place").value;
	document.write(s.replace("navigate",r));
	document.write(s.replace("contact",p));
}