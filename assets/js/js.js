/*
 * Author: @intothenexo intothenexo[at]gmail.com, hotmail.com
 * About: http://about.me/intothenexo
 * INDEX
 *
 * 0. Defaults
 * 1. Initialization
 *  |- 1.1 xxx
 *
 * 2. Fn
 *  |- 2.1 xxx
 *
 * 3. Events
 *  |- 3.1 xxx
 *
 */

// Ready
$(function(){
  // Custom Accordion
  $('.accordion.collapsible li .title').click(function(){
    var $thisLi = $(this).parent('li');

    if($thisLi.hasClass('active')){
      var accordion = $thisLi;
      accordion.find('.content').slideUp(function(){
        accordion.removeClass('active');
      });
    }else{
      $thisLi.siblings().removeClass('active').find('.content').slideUp();
      $thisLi.find('.content').slideDown('slow');
      $thisLi.addClass('active');  
    }    
  });

  // Reload welcome
  $("#iFrame-plugin").attr("src",'welcome.html');
});

// Load
$(window).load(function() {
  //
  // 0. Defaults
  // ----------------------------------------------------------------------
  var $linksList = $('#links-list'),
      $auth = $('#auth'),
      $demo = $('#demo'),
      $down = $('#down'),
      $gith = $('#gith'),
      $site = $('#site');
  
  //
  // 1. Initialization
  // ----------------------------------------------------------------------
  // 1.1 xxx

  
/*
  $('#w-menu-izq-wrapper').find('a').each(function(){
    if($(this).attr('href')===document.URL){
      $(this).closest('.w-submenu-wrapper').prev('.w-menu-lvl1').click();
      return false;
    }
  });*/

  //
  // 2. Fn
  // ----------------------------------------------------------------------
  // 2.1 xxx
  var makeLinks = function( $obj ){
    linkAuth = $obj.attr('auth'),
    linkDemo = $obj.attr('demo'),
    linkDown = $obj.attr('down'),
    linkGith = $obj.attr('gith');
    linkSite = $obj.attr('href');

    if(linkAuth){
      $auth.find('a').attr('href',linkAuth);
      $auth.fadeIn(500);
    }
    if(linkDemo){
      $demo.find('a').attr('href',linkDemo);
      $demo.fadeIn(500);
    }
    if(linkDown){
      $down.find('a').attr('href',linkDown);
      $down.fadeIn(500);
    }
    if(linkGith){
      $gith.find('a').attr('href',linkGith);
      $gith.fadeIn(500);
    }
    if(linkSite){
      $site.find('a').attr('href',linkSite);
      $site.fadeIn(500);
    }


  };

  //
  // 3. Events
  // ----------------------------------------------------------------------
  // 3.1 Links behaviour
  $("a").click(function(e){
    if($(this).attr("target")!=="_blank"){
      e.preventDefault();      
      if($("#iFrame-plugin").attr("src")!==$(this).attr("href")){
        $(this).parent().addClass('active').siblings().removeClass('active');

        $linksList.find('li').css({'display':'none'});
        makeLinks($(this));

        $("#loading-msg").fadeIn();
        $("#iFrame-plugin").attr("src",$(this).attr("href"));
      }
    }
  });

  // iFrame load complete
  $('#iFrame-plugin').load(function(){
      $("#loading-msg").fadeOut();
  });
});