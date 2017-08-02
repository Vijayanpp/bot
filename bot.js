(function()
{

	var App={
		
		init:function()
		{
			App.wishHello("","","")
		},
		
		wishHello:function(title,subtitle,data)
		{
			
			$("#title").text(title);
			$("#subtitle").text(subtitle);
			$("#content").text(data);
			
		}
	}
	App.init();
})(jQuery)