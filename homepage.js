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
   

    // mobile & Tablets , home & lifestyle , Electronics & Appliances on load functionality common.
    let left=1;
    let right=4;
    let left1=1;
    let right1=4;
    let left2=1;
    let right2=4;
    
    function show(){
    for (let i=left;i<=right;i++)
      {
        document.getElementById("c"+i).style.display="inline-block";
      }
    for (let i=left1;i<=right1;i++)
      {
        document.getElementById("d"+i).style.display="inline-block";
        
      }
      for (let i=left2;i<=right2;i++)
      {
        document.getElementById("e"+i).style.display="inline-block";
        
      }
      
    }
// mobile & Tablets starts
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

    // mobile & Tablets ends here.


    // home & lifestyle starts here.

    
    function moveRight1()
    {
      if(left1<=4 && right1<=7)
      {
        document.getElementById("d"+left1).style.display="none";
        left1+=1;
        right1+=1;
        for (let i=left1;i<=right1;i++)
        {
          document.getElementById("d"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }

    function moveLeft1()
    {
      if(left1>=2 && right1>=5)
      {
        document.getElementById("d"+right1).style.display="none";
        left1-=1;
        right1-=1;
        for (let i=left1;i<=right1;i++)
        {
          document.getElementById("d"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }

    // home & lifestyle ends here.

    // Electronics & Appliances starts here.

    function moveRight2()
    {
      if(left2<=4 && right2<=7)
      {
        document.getElementById("e"+left2).style.display="none";
        left2+=1;
        right2+=1;
        for (let i=left2;i<=right2;i++)
        {
          document.getElementById("e"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }

    function moveLeft2()
    {
      if(left2>=2 && right2>=5)
      {
        document.getElementById("e"+right2).style.display="none";
        left2-=1;
        right2-=1;
        for (let i=left2;i<=right2;i++)
        {
          document.getElementById("e"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }

    // Electronics & Appliances ends here.

    // create alert
    
    function alerted()
    {
      
      alert("Alert Created")
    }


    // register and login page

    let fn=document.getElementById("First Name");
    let ln=document.getElementById("Last Name");
    let email=document.getElementById("Email");
    let pass=document.getElementById("Password");
    let formreg=document.getElementById("register");
    
   
    
    let RegCred=JSON.parse(localStorage.getItem("login-data"))||[];

    formreg.addEventListener("submit",(e) =>
    {
      e.preventDefault();
      
      let loginData={
        firstname : fn.value,
        lastname : ln.value,
        emailid : email.value,
        password : pass.value,
      };

      RegCred.push(loginData);
      localStorage.setItem("login-data",JSON.stringify(RegCred));
      console.log(RegCred);
      alert("Registration Successful")
      login();
      
    });
    let formlog=document.getElementById("login")
    
    let loginemail=document.getElementById("loginid").value;
     let loginpass= document.getElementById("loginpassword").value;
    formlog.addEventListener("submit",(e) =>
    {
      e.preventDefault();
      
      RegCred.forEach(function(ele){
        if(ele.emailid===loginemail && ele.password===loginpass)
        {
          alert("Bad Credentials");
        }
        else{
          alert("Login Successful")
        }
       })

      
      
      
    });
     
     

   


    function mobiles()
    {
      window.location.assign("productspage.html")
    }

    function cart()
    {
      window.location.assign("cartpage.html")
    }

    function image()
    {
      window.location.assign("homepage.html")
    }