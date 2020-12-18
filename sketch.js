// 1 st code
$(window).on("load resize scroll", function() {
  $(".bg-static").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var rightPosition = windowTop - elementTop;
      $(this)
        .find(".bg-move")
        .css({ left: rightPosition });
  });
});

//2nd code
//2nd codevar message="Function Disabled!";
///////////////////////////////////
function clickIE4(){
  if (event.button==2){
  alert(message);
  return false;
  }
  }
  function clickNS4(e){
  if (document.layers||document.getElementById&&!document.all){
  if (e.which==2||e.which==3){
  alert(message);
  return false;
  }
  }
  }
  if (document.layers){
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown=clickNS4;
  }
  else if (document.all&&!document.getElementById){
  document.onmousedown=clickIE4;
  }
  document.oncontextmenu=new Function("return false")
  
  function disableCtrlKeyCombination(e)
  {
          //list all CTRL + key combinations you want to disable
          var forbiddenKeys = new Array('a', 'c', 'x', 'v', 'u', 'j');
          var key;
          var isCtrl;
          if(window.event)
          {
                  key = window.event.keyCode;     //IE
                  if(window.event.ctrlKey)
                          isCtrl = true;
                  else
                          isCtrl = false;
          }
          else
          {
                  key = e.which;     //firefox
                  if(e.ctrlKey)
                          isCtrl = true;
                  else
                          isCtrl = false;
          }
          //if ctrl is pressed check if other key is in forbidenKeys array
          if(isCtrl)
          {
                  for(i=0; i<forbiddenKeys.length; i++)
                  {
                          //case-insensitive comparation
                          if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase())
                          {
                                  alert('Key combination CTRL + ' +String.fromCharCode(key)+' has been disabled.');
                                  return false;
                          }
                  }
          }
          return true;
  }

  // 3rd code
  $(document).keydown(function(event){
    if(event.keyCode==123){
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
             return false;
    }
});

$(document).on("contextmenu",function(e){        
   e.preventDefault();
});