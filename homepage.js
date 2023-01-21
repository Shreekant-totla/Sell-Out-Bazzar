function toggleNav() {
    var nav = document.getElementById("left-nav");
    nav.classList.toggle("show-nav");
  }
  
  var scrollingContent = document.querySelector('.scrolling-content');
var scrollingSpeed = 1; // adjust this value to change the scrolling speed

function scrollContent() {
  scrollingContent.style.left = parseInt(scrollingContent.style.left || 0) - 1 + 'px';
  setTimeout(function() {
    if (Math.abs(parseInt(scrollingContent.style.left)) >= scrollingContent.scrollWidth/2) {
      var firstChild = scrollingContent.firstElementChild;
      scrollingContent.appendChild(firstChild);
      scrollingContent.style.left = '0px';
    }
    scrollContent();
  }, scrollingSpeed);
}

scrollContent();

var x=document.getElementById('login');
		var y=document.getElementById('register');
		var z=document.getElementById('btn');
		function register()
		{
			x.style.left='-400px';
			y.style.left='50px';
			z.style.left='110px';
		}
		function login()
		{
			x.style.left='50px';
			y.style.left='450px';
			z.style.left='0px';
		}
    

    function toggle(){
      var blur=document.getElementById("blur");
      blur.classList.toggle('active');

      // var loginform=document.getElementById("login-form");
      // loginform.classList.toggle('active');
    }
   
    let left=1;
    let right=4;
    function show(){
     for (let i=left;i<=right;i++)
      {
        document.getElementById("c"+i).style.display="inline-block";
      }
      
    }

    function moveRight()
    {
      if(left<=4 && right<=7)
      {
        document.getElementById("c"+left).style.display="none";
        left+=1;
        right+=1;
        for (let i=left;i<=right;i++)
        {
          document.getElementById("c"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }

    function moveLeft()
    {
      if(left>=2 && right>=5)
      {
        document.getElementById("c"+right).style.display="none";
        left-=1;
        right-=1;
        for (let i=left;i<=right;i++)
        {
          document.getElementById("c"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }