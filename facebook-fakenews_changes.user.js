// ==UserScript==
// @name    Garrett's Facebook Changes - Fake News
// @include http://facebook.com/*
// @include http://*.facebook.com/*
// @include https://facebook.com/*
// @include https://*.facebook.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @grant   none
// ==/UserScript==
$(document).ready(function () {
  if (window.top == window.self) {
    var words = [
      'Trump',
      'President',
      'Sponsored',
      'Suggested Post',
      'People You May Know',
      'Topics to Follow',
      'Buy and Sell Groups Near You',
      'Events You May Like',
      'Facebook Sports',
      'are now friends.',
      'years of friendship on Facebook!',
      'foxnews.com',
      'Fox News',
      'bible',
      'jesus',
      '21stcenturywire.com',
      '70news.wordpress.com',
      'abcnews.com.co',
      'activistpost.com',
      'addictinginfo.org',
      'americannews.com',
      'americannewsx.com',
      'amplifyingglass.com',
      'anonews.co',
      'beforeitsnews.com',
      'bigamericannews.com',
      'bipartisanreport.com',
      'bluenationreview.com',
      'breitbart.com',
      'burrardstreetjournal.com',
      'callthecops.net',
      'christiantimes.com',
      'christwire.org',
      'chronicle.su',
      'civictribune.com',
      'clickhole.com',
      'coasttocoastam.com',
      'collective-evolution.com',
      'consciouslifenews.com',
      'conservativeoutfitters.com',
      'countdowntozerotime.com',
      'counterpsyops.com',
      'creambmp.com',
      'dailybuzzlive.com',
      'dailycurrant.com',
      'dailynewsbin.com',
      'dcclothesline.com',
      'demyx.com',
      'denverguardian.com',
      'derfmagazine.com',
      'disclose.tv',
      'duffelblog.com',
      'duhprogressive.com',
      'empireherald.com',
      'empirenews.net',
      'empiresports.co',
      'en.mediamass.net',
      'endingthefed.com',
      'enduringvision.com',
      'flyheight.com',
      'fprnradio.com',
      'freewoodpost.com',
      'geoengineeringwatch.org',
      'globalassociatednews.com',
      'globalresearch.ca',
      'gomerblog.com',
      'govtslaves.info',
      'gulagbound.com',
      'hangthebankers.com',
      'humansarefree.com',
      'huzlers.com',
      'ifyouonlynews.com',
      'infowars.com',
      'intellihub.com',
      'itaglive.com',
      'jonesreport.com',
      'lewrockwell.com',
      'liberalamerica.org',
      'libertymovementradio.com',
      'libertytalk.fm',
      'libertyvideos.org',
      'lightlybraisedturnip.com',
      'nationalreport.net',
      'naturalnews.com',
      'ncscooper.com',
      'newsbiscuit.com',
      'newsexaminer.com',
      'newslo.com',
      'newsmutiny.com',
      'newswire-24.com',
      'nodisinfo.com',
      'now8news.com',
      'nowtheendbegins.com',
      'occupydemocrats.com',
      'other98.com',
      'pakalertpress.com',
      'politicalblindspot.com',
      'politicalears.com',
      'politicops.com',
      'politicususa.com',
      'prisonplanet.com',
      'private-eye.co.uk',
      'react365.com',
      'realfarmacy.com',
      'realnewsrightnow.com',
      'redflagnews.com',
      'redstate.com',
      'rilenews.com',
      'rockcitytimes.com',
      'satiratribune.com',
      'stuppid.com',
      'theblaze.com',
      'thebostontribune.com',
      'thedailysheeple.com',
      'thedcgazette.com',
      'thefreethoughtproject.com',
      'thelapine.ca',
      'thenewsnerd.com',
      'theracketreport.com',
      'therundownlive.com',
      'thespoof.com',
      'theuspatriot.com',
      'truthfrequencyradio.com',
      'twitchy.com',
      'unconfirmedsources.com',
      'USAToday.com.co',
      'usuncut.com',
      'veteranstoday.com',
      'wakingupwisconsin.com',
      'weeklyworldnews.com',
      'wideawakeamerica.com',
      'winningdemocrats.com',
      'witscience.org',
      'wnd.com',
      'worldnewsdailyreport.com',
      'worldtruth.tv',
      'yournewswire.com'
    ];
    var style = $('<style>#contentArea { width: 100% !important; left: 0; } #rightCol { display: none; }</style><style>.removedNote { z-index:9999; margin: 30px 0 50px; padding: 0 12px; text-align: center; cursor: pointer; } .removedNote span { padding: 4px; background-color: #e9ebee; text-shadow: 1px 1px 0 #ffffff; color: #90949c; } .removedNote div { height: 2px; border-bottom: 1px solid #90949c; box-shadow: 1px 1px #ffffff; margin: -11px; }</style>')
    var ggf = 0;
    var ggi = 0;
    $('html > head').append(style);
    $('body').append('<div id="count" style="position:fixed;top:2px;right:10px;color:#000000;font-weight:bold;opacity:0.4;z-index:9999;cursor:pointer;font-size:2.5em;letter-spacing:-4px;">0</div>');
    $('._2s1y').css({
      'background': '#00779b repeating-linear-gradient(350deg, #009ecf 0px, #009ecf 40px, #00779b 40px, #00779b 80px, #006482 80px, #006482 120px, #005069 120px, #005069 160px, #006482 160px, #006482 200px, #00779b 200px, #00779b 240px) repeat fixed 0 0',
      'opacity': '0.85'
    });
    //Loop Interval and Click to Stop  
    function startLoop() {
      var loop = setInterval(function () {
        $(loopActions);
      }, 750);
      $('div#count').click(function () {
        ggf = 0;
        clearInterval(loop);
      });
    };
    //Loop Functions
    function loopActions() {
      $('#count').text(ggf++);
      $('._2s1y').css('background-position', '0 ' + - ggf + 'px');
      $('._5qxm').css({
        'background-color': '#ffffff',
        'background-image': 'none'
      });
      $('._5z6o').css('width', '25%');
      $('._4a6n').css({
        'color': '#000000',
        'font-size': '14px',
        'font-weight': 'normal',
        'padding': '0'
      });
      $.each(words, function (key, value) {
        $('._5pat:contains(' + value + ')').not('.hidden_elem').hide().removeClass('_5pat').addClass('removedPost').before('<div class="removedNote"><span>REMOVED -' + value + ' </span><div></div></div>');
      });
    };
    //Un-Hide Post
    $(document).on('click', '.removedNote', function () {
      $(this).next('.removedPost').fadeToggle();
    });
    //Start Loop Automatically
    $(startLoop);
    //Start Loop (or reset) Manually with Double Click
    $('div#count').dblclick(function () {
      $(startLoop);
    });
  }
});