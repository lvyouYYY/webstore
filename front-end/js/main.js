$(function(){
   let $imgs=$('.ppt li');
   let $len=$imgs.length;
   let $ul=$('.points ul'); 
   let $lt=$('.prev');
   let $gt=$('.next');
   let timer;//定时器
   let $ppt=$('.ppt');
   //要进来的图片索引
   let $now=0;
   //当前图片的索引,因为初始时在第0张图片，所以初始值是0
   let $pre=0;
   for(let i=0;i<$len;i++)
   {//为每张图片创建圆点
   	let $li=$('<li>');
   	$li.appendTo($ul);
   }
   let $points=$('.points ul li');
   $points.eq(0).addClass('active');
   //圆点点击事件
   $points.click(function(){
      
      $(this).addClass('active').siblings().removeClass('active');
      $now=$(this).index();
      move();
      $pre=$now;
   });
   //核心移动函数
    let move=()=>{
   	if($now<0)
   	{   $now=$len-1;
   		$imgs.eq($now).css({left:-955});
   		$imgs.eq($pre).stop().animate({left:955});
   		$imgs.eq($now).stop().animate({left:0});
   		return;
   	}
   	else if($now>$len-1)
   	{
   		$now=0;
   		$imgs.eq($now).css({left:955});
   		$imgs.eq($pre).stop().animate({left:-955});
   		$imgs.eq($now).stop().animate({left:0});
   		return;
   	}
   	else if($now==$pre)
   	{
   		return;
   	}
   	if($now>$pre)
   	{
   		$imgs.eq($now).css({left:955});
   		$imgs.eq($pre).stop().animate({left:-955});
   	}
   	else
   	{
   		$imgs.eq($now).css({left:-955});
   		$imgs.eq($pre).stop().animate({left:955});
   	}
   	$imgs.eq($now).stop().animate({left:0});
   }
   //小于号点击事件
   $lt.click(()=>{
      $now--;
      move();
      $points.eq($now).addClass('active').siblings().removeClass('active');
      $pre=$now;
   });
   //大于号点击事件
   $gt.click(()=>{
      $now++;
      move();
      $points.eq($now).addClass('active').siblings().removeClass('active');
      $pre=$now;
   });
   //定时器
    let autoplay=()=>{
   	$now++;
      move();
      $points.eq($now).addClass('active').siblings().removeClass('active');
      $pre=$now;
   }
   timer=setInterval(autoplay,4000);
   //鼠标进入幻灯片事件，定时器停止
   $ppt.mouseenter(()=>{
   	//问题一：清除定时器，要把定时器作为参数传给clearInterval
      clearInterval(timer);
   });
   //鼠标移出幻灯片事件，定时器开启
   $ppt.mouseleave(()=>{
   	//定时器不是函数，开启定时器必须用setInterval
      timer=setInterval(autoplay,3000);
   });
});