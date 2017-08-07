(function()
{

	var App={
		
		init:function()
		{
			App.getName();
			App.wishHello("hi","","");
			
		},
		
		wishHello:function(title,subtitle,data)
		{
			var name=localStorage.getItem('name');
			(name==null)?name='pp':name=name;
			
			
			$("#title").text(title+" "+name);
			$("#subtitle").text(subtitle);
			$("#content").text(data);
			
		},
		getName:function()
	{
		if(localStorage)
		{
			localStorage.setItem('name','pp')
		}
	}
	}
	App.init();
})(jQuery)