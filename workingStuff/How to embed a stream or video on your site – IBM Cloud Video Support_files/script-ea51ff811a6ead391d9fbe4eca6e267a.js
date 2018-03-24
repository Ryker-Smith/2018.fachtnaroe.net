/*
 * jQuery v1.9.1 included
 */


$(document).ready(function() {
  
  $.extend( $.easing, {
	   easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	   }
    });
  
  // HELPERS
  function getLocale() { 
    var locale = window.location.pathname.split('/')[2]; 
    switch(locale) {
      case 'ja':
      case 'es':
      case 'ko':
        return locale;
      default:
        return 'en-us';
    }
  }
  
  //NAVIGATION
  
  if($('.search-box').length === 0) {
    //if there's no search-box in the page then show the saerch field in the navigation
    // $('#Nav').removeClass('no-search')
  } else {
    //remove placeholder text from search input fields
    $('.search-box #query').attr({'placeholder':'', 'autocomplete':'off'});
  }
	
  //responsive hamburger menu actions
  $('a, #Nav .nav-toggle').bind('touchstart', function() {
     return true;
  });
  $('#Nav .nav-toggle').on('click',function() {
      $('#Nav').toggleClass('show');
      if ($('#Nav').hasClass('show')) {
          $('#Nav').css('height', $('#Nav').height() + $('#Nav .nav').outerHeight());
      } else {
          $('#Nav').removeAttr('style');
      }
  });
 
  
	//HOMEPAGE 
  var catList = $('.category-list');
  if(catList.length){
    //get system status
    var pinId = '207852567'; //System status article
    var pinHolder = $('.status');
    showPinned(pinId, pinHolder); 
    showCategories(catList); //get homepage categories
  }
  
	function getPinned(id){
  	return $.getJSON("https://ustream.zendesk.com/api/v2/help_center/" + getLocale() + "/articles/" + id);
	}
  function showPinned(id, el){
    getPinned(id).success(function(data){
      var article = data.article;
      var title = article.title;
      var link = article.html_url;
      var style = 'online';
      var info = 'All systems are currently online.';

      if(title.toUpperCase().indexOf('LIMITED') > -1){
        style = 'limited';
      }
      if(title.toUpperCase().indexOf('OUTAGE') > -1){
        style = 'alert';
      }
      var html = '<div class="' + style + '"><span class="ui-icon ui-icon--confirm">' + info + '</span> <a href="' + link + '">See Details</a></div>';
      $(el).prepend(html);
    });
  }
  
  function getCategories(){
    return $.getJSON( "https://ustream.zendesk.com/api/v2/help_center/" + getLocale() + "/categories.json");
  }

  function showCategories(list) {

  getCategories().success(function(data){

      var categories = data.categories;
      var categorieCount = data.categories.length;
      var html = '';
      var ico;

      for (var i = 0; i < 4; i++) {
        if (typeof categories[i] == 'undefined') {
          break;
        }

        switch(categories[i].id){
           case 200548827:
            //Plans
              ico = 'illustrative-icon--subscriber';
              break;
           case 200548837:
            //Manage Acct
              ico = 'illustrative-icon--user-edit';
              break;
           case 200545438:
            //Manage Channel
              ico = 'illustrative-icon--portal-video';
              break;
          case 200545458:
            //Manage Videos
              ico = 'illustrative-icon--play';
              break;
          default:
              ico = 'illustrative-icon--record';
              break;
        }

        html += '<a href="' +  categories[i].html_url + '" class="grid-column grid-column-lg-6 block-item">';
        html += '<div class="inner">';
        html += '<div class="illustrative-icon ' + ico +'"></div>';
        html += '<h3 class="text--normal">' + categories[i].name +'</h3>';
        html += '<p>' + categories[i].description + '</p>';
        html += '<span class="ui-icon ui-icon--forward" data-id="' + categories[i].id + '">See Articles</span>';
        html += '</div></a>';
      }

      if (categorieCount > 4) {
        html += '<div class="grid-column link-box"><div class="inner">';

        for (var i = 4; i < categorieCount; i++) {
          html += '<div class="link-item"><a data-id="' + categories[i].id + ' "href="' + categories[i].html_url + '" class="ui-icon ui-icon--forward">' + categories[i].name + '</a></div>';
        }

        html += '</div></div>';
      }

      $(list).append(html);

    });
  }
  
	//CATEGORY PAGE
  var sectList = $('#section-list');
  if(sectList.length){
    var pathArray = window.location.pathname.split( '/' );
    var catId = pathArray[pathArray.length - 1];
    showSections(catId,sectList);
   }

  var numArticles;
  var countArr = [];
  function getSections(catId){
    return $.getJSON( "https://ustream.zendesk.com/api/v2/help_center/" + getLocale() + "/categories/" + catId + "/sections.json");
  }

  function showSections(catId,list){
    getSections(catId).success(function(data){
      var sections = data.sections;
      var numSections = sections.length;
      //var sectionArr = [];

      $.each(sections, function(){

          var id = this.id;
          var name = this.name;
          var url = this.html_url;
          var description = this.description;
          if(description === ''){
          description = 'Sed tristique tincidunt libero, venenatis commodo sem volutpat nec.'
        }
          $.ajaxSetup({
             async: false
          });
          //var total = 0;
          var html = null;
          var countArr = [];
          var numArticles;

        $.getJSON("/api/v2/help_center/" + getLocale() + "/sections/" + id + "/articles.json", function( data ) {
          var articles = data.articles;
          numArticles = data.articles.length;

          $.each(articles, function(){
             var title = this.title;
             var link = this.html_url;

             if(numArticles > 0){
               if(numSections < 2){
                 html = '<li><a href="' + link + '">';
                 html += title + '</a></li>';
                 $(sectList).attr('id', 'article-list').removeClass().addClass('article-list').append(html);
                return;
              }else{
              return numArticles;
              }
            }else{
              console.log('no articles here.');
              return;
            }

          });
            console.log('Total: ' + numArticles);

          if(numArticles > 0) {
           if(numSections > 1 && numArticles > 0){

            html = '<li class="column column-6"><div class="inner clear">';
            html +='<div class="meta"><a class="title" href="'+url+'">' + name + '</a>';
            html +='<p>' + description + '</p></div>';
            html +='<a class="read-more" href="' + url + '">';
            html +='See All ' + numArticles + ' Articles';
            html += '</a>';
            html += '</div></li>';

            $(sectList).append(html);
             

          }else{
            return;
            }
          }else{
            console.log('Empty Section.');
          }

         });
      });
      
      //set min-height of box-content 
     	$(window).resize(setBoxMinHeight);
      setBoxMinHeight();
    });
  }
	
  // ECDN MAINTENANCE WINDOW NOTIFICATION
  var currentLocation = window.location.href;
  var urlChunks = currentLocation.split('/');
  var urlChunksLen = urlChunks.length;
  var locationId = urlChunks[urlChunksLen-1];
  var ecdnNotification = $('#ecdnMaintenence');
  
  if(locationId === '115000669329-ECDN-Enterprise-Content-Delivery-Network' || locationId === '115000669329') {
    if(!ecdnNotification.hasClass('inactive')) {
    	ecdnNotification.removeClass('hidden');
    } else {
    	ecdnNotification.addClass('hidden'); 
    }
  } else {
   ecdnNotification.addClass('hidden'); 
  }
 // ECDN MAINTENANCE WINDOW NOTIFICATION END


  function getArticles(sectId){
    return $.getJSON("https://ustream.zendesk.com/api/v2/help_center/" + getLocale() + "/sections/" + sectId + "/articles.json");
  }
  function showArticles(sectId, list){
    getArticles(sectId).success(function(data){
        //var articleList = [];
          //var articles = data.articles;
        //var numArticles = articles.length;

              $.each(articles, function(){

          this.html = '<li><a href="' + this.html_url + '">';
                this.html += this.title + '</a></li>';
                $(list).attr('id', 'article-list').append(this.html);
          //console.log(this.html);
      });

    });
  }
  
  //egalize height of category page boxes
  function setBoxMinHeight() {
  	var h = 0;
    sectList.find('li').each(function() {
       	var metaHeight = 0;
      	$(this).find('.meta').children().each(function() {
        	metaHeight += $(this).height() + parseInt($(this).css('margin-top'))+ parseInt($(this).css('margin-bottom'));
        });
      	h = Math.max(h, metaHeight);
    });
    if ($(window).width() < 640) h = 'auto';
    sectList.find('.meta').css('height',h);
  }
  
  
  //SEARCH RESULTS PAGE
  $('.search-results li .search-result-meta').each(function() {
    var links = $(this).find('a').clone();
    var meta = $(this);
    var prevLabel = "";
    meta.empty();
    $(this).empty().append('in ').css('visibility','visible');
    links.each(function() {
      var label = $(this).text().toUpperCase();
      if (label != prevLabel && $(this).attr('href').indexOf('agent/users/') == -1) meta.append($(this));
      prevLabel = label;
    });
    	
  });
  
  
  //HEADER BREADCRUMBS
  $('.breadcrumbs').each(function() {
    var items = $(this).find('li').clone();
    var $this = $(this).empty().addClass('show');
    var prevLabel = "";
    items.each(function() {
      if ($(this).find('a').length > 0) {
        var label = $(this).find('a').text().toUpperCase();
        if (label != prevLabel) $this.append($(this));
        prevLabel = label;
      }
        
    });
  });
  
  if (!String.prototype.toSlug) {
	  String.prototype.toSlug = function () {
		return this.toLowerCase()
		  .replace(/\s/g, '-')
		  .replace(/&/g, 'and')
		  .replace(/[^\w-]+/g,'')
		  .replace(/[-*]+/g,'-')          
		  .trim();
	  };
	}
  
  $.stickyContent = function(el) {
    var base = this;
        base.$el = $(el);
        base.el = el;
    base.$parent = base.$el.parent();

    base.init = function () {
      $(window).scroll(base.onScroll);
      $(window).resize(base.onResize);
      $(window).load(base.onResize);
      base.onScroll();
      base.onResize();
    }

    base.onScroll = function() {
      var windowTop = $(window).scrollTop();

      var sidebarOverflow = base.$parent.height() < windowTop-base.$parent.offset().top+base.$el.height()+40;

      if (base.$parent.offset().top <= windowTop && !sidebarOverflow) {
                base.$el.removeClass('bottom').addClass('fixed');
            } else {
        base.$el.removeClass('fixed');
        if (sidebarOverflow) base.$el.addClass('bottom');
        else base.$el.removeClass('bottom');
      }
    }
    base.onResize = function() {
      base.$parent.css({height: $('article').height()+80});
      base.onScroll();
    }
    base.init();
  };
  $.fn.stickyContent = function() {
      return this.each(function () {
          (new $.stickyContent(this));
      });
  };

  $.sideNav = function (el) {
    var base = this;
        base.$el = $(el);
        base.el = el;

    base.init = function () {

      var sidenav = $('<ul class="sidenav"></ul>');
      var i = 0;
      var last_h2;

      $('article').find('h2,h3').each(function(el) {
        var id = $(this).text().toSlug() + "_" + i;
        $(this).attr('id',id);
        if ($(this)[0].nodeName.toLowerCase() == "h2") {
          var el = sidenav.append('<li><a href="#'+id+'">'+$(this).text()+'</a></li>');
          last_h2 = el;
        } else {
          var last = $(last_h2).children().last();
          if (last.find('ul').length == 0) last.append('<ul class="nav"></ul>');
          var el = last.find('ul').append('<li><a href="#'+id+'">'+$(this).text()+'</a></li>')
        }
        el.find('a').click(function(e) {
          e.preventDefault();
          var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top+1;
          $('html, body').stop().animate({ scrollTop: offsetTop }, 600, 'easeInOutExpo');
          e.preventDefault();
        });
        i++;
      });
      if (sidenav.find('li').length > 1) {
      	base.$el.prepend(sidenav);
      	base.sideNavItems = sidenav.find("a");
      	base.lastId = "";
        base.scrollItems = base.sideNavItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

        //bind events
        $(window).scroll(base.onScroll);
        base.onScroll();
        $(window).resize(base.onResize);
        base.onResize();
      }
    };
    base.onScroll = function() {			
      var windowTop = $(window).scrollTop();

      // Get id of current scroll item
      var cur = base.scrollItems.map(function(){
       if ($(this).offset().top < windowTop+20)
         return this;
      });

      // Get the id of the current element
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";
			if (id == "") {
        base.$el.find('li').eq(0).addClass('active');
      } else if (base.lastId !== id) {
         base.lastId = id;
         base.sideNavItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parents("li").addClass("active");
      }
    }
    base.onResize = function() {			
      base.$el.width(base.$el.parent().width()-20);
    }
    base.init();
  }
  $.fn.sideNav = function() {
      return this.each(function () {
          (new $.sideNav(this));
      });
  };
  
  //init stickycontent
	if ($('.stickyContent').length > 0) {
    	$('.stickyContent').stickyContent();
	}
	
	//init sidenav
	if ($('article[data-sidenav]').length > 0) {
    	$('.sidebar .stickyContent').sideNav();
	}
  
  
  //init responsive tables
	$('table.responsive').each(function() {
		var el = $(this);
		var wrapper = $('<div class="table-container"></div>').insertBefore(el);
		el.appendTo(wrapper);
	});
  
  
  
  // Footer language selector
  var locale = getLocale();
  switch(locale) {
    case 'en-us':
      $('#LangSelect .select-label').text('English (US)');
      break;
    case 'ko':
      $('#LangSelect .select-label').text('한국어');
      break;
    case 'ja':
      $('#LangSelect .select-label').text('日本語');
      break;
  }
  $('#ChooseLangSelect option').attr('selected',null);
  $('#ChooseLangSelect option[value='+locale+']').attr('selected','selected')
  $('#ChooseLangSelect').change(function(e) {
  	window.location.href = "/hc/change_language/"+$(this).val();
  });
  
  /*
  
  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $answerbodyTextarea = $(".answer-body textarea"),
  $answerFormControls = $(".answer-form-controls"),
  $commentContainerTextarea = $(".comment-container textarea"),
  $commentContainerFormControls = $(".comment-form-controls");

  $answerbodyTextarea.one("focus", function() {
    $answerFormControls.show();
  });

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  if($answerbodyTextarea.val() !== "") {
    $answerFormControls.show();
  } */

});
