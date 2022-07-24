
// //  var navTab = document.querySelector("#myNav");

// //  var navItems = document.querySelector("#navItems");


//  var hidden = navItems.classList.remove("hide");
//  var show = navItems.classList.add("show");

//  const myFun =()=>{
//    if( hidden == show){
//     hidden
//    }else if( show !== hidden){
//     hidden
//    }else{
//     hidden
//    }
   
    
            
//  }

// //  navTab.addEventListener("click", showIt);

$(document).ready(()=>{
  $("#myNav").click(()=>{
    $("#navItems").toggleClass("hidden flex" );
  });

  $("#oneQ").click(()=>{
    $("#oneA").toggleClass( "hidden flex" )
  });


  $("#twoQ").click(()=>{
    $("#twoA").toggleClass( "hidden flex" )
  });
  $("#threeQ").click(()=>{
    $("#threeA").toggleClass( "hidden flex" )
  });
  $("#devQ").click(()=>{
    $("#devA").toggleClass( "hidden flex" )
  });
})