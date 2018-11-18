$(function(){
let user_err=true;//无错
let pwd_err=true;
let cpwd_err=true;
let email_err=true;
let $username=$('#userName');
let $pwd=$('#passWord');
let $cpwd=$('#cpassWord');
let $email=$('#email');
let $user_tip=$('.user_tip');
let $pwd_tip=$('.pwd_tip');
let $cpwd_tip=$('.cpwd_tip');
let $email_tip=$('.email_tip');
let user_regex=/^[\w_]{5,15}$/;
let pwd_regex=/^[\w_\*]{6,16}$/;
let email_regex=/^[0-9a-zA-Z+@\.]+[a-z]+$/;
//用户名
$username.focus(function(){
  $user_tip.css({opacity:0});
});
$username.blur(function(){
  check_user();
});
function check_user()
{  let name=$username.val();
   if(name=='')
   {
   	  $user_tip.html("用户名不能为空！");
	  $user_tip.css({opacity:1});
	  user_err=true;
	  return;
  }
  else if(user_regex.test(name))
  {
    $user_tip.css({opacity:0});
    user_err=false;
   }
   else
   {
      $('.user_tip').html("用户名由5-15位的字母数字下划线组成！");
	  $('.user_tip').css({opacity:1});
	  user_err=true;
   }
}
//密码
$pwd.focus(function(){
    $pwd_tip.css({opacity:0});
});
$pwd.blur(function(){
	check_pwd();
})
function check_pwd(){
	let pass=$pwd.val();
	if(pass=='')
	{
		$pwd_tip.html('密码不能为空！');
		$pwd_tip.css({opacity:1});
		pwd_err=true;
	}
	else if(pwd_regex.test(pass))
	{
		$pwd_tip.css({opacity:0});
		pwd_err=false;
	}
	else
	{
		$pwd_tip.html('密码为6-16位的字母数字下划线*！');
		$pwd_tip.css({opacity:1});
		pwd_err=true;
	}
}
//确认密码
$cpwd.focus(function(){
   $cpwd_tip.css({opacity:0});
});
$cpwd.blur(function(){
	check_cpwd();
});
function check_cpwd()
{
	let pass=$pwd.val();
    let cpass=$cpwd.val();
    if(pass!='')
    {
    	if(pass!=cpass)
    {
        $cpwd_tip.html("两次输入的密码不一致，请重新输入！");
        cpwd_err=true;
    	$cpwd_tip.css({opacity:1});
    }
    else{
    	cpwd_err=false;
    	$cpwd_tip.css({opacity:0});
    }
    }
    else
    {
    	$cpwd_tip.html("请先输入密码！");
        cpwd_err=true;
    	$cpwd_tip.css({opacity:1});
    }
    
}
//邮箱
$email.focus(function(){
    $email_tip.css({opacity:0});
});
$email.blur(function(){
   check_email();
});
function check_email()
{
   let email=$email.val();
   if(email=='')
   {
   	 $email_tip.html("请输入邮箱！");
   	 $email_tip.css({opacity:1});
   	 email_err=true;
   }
   if(email_regex.test(email))
   {
   	 $email_tip.css({opacity:0});
   	 email_err=false;
   }
   else
   {
     $email_tip.html("邮箱格式不正确！");
   	 $email_tip.css({opacity:1});
   	 email_err=true;
   }
}
$('.login_register_btn').click(function(){
	check_user();
	check_pwd();
	check_cpwd();
	check_email();
   if(user_err==true&&pwd_err==true&&cpwd_err==true&&email_err==true)
   {
   	  $user_tip.css({opacity:0});
   	  $pwd_tip.css({opacity:0});
   	  $cpwd_tip.css({opacity:0});
   	  $email_tip.css({opacity:0});
   }  
   else
   {
   	 console.log(user_err,pwd_err,cpwd_err,email_err);
     alert('sub');
   }
});
});

