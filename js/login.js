var Nav = (function() {

  var
    nav 		= $('.css-tab'),
    section = $('.section'),
    link		= nav.find('.tab-link'),
    navH		= nav.innerHeight(),
    isOpen 	= true,
    hasT 		= false;

  var toggleNav = function() {
    nav.toggleClass('tab-header-active');
    shiftPage();
  };


  var switchPage = function(e) {
    var self = $(this);
    var i = self.parents('.tab-item').index();
    var s = section.eq(i);
    var a = $('section.tab-active');
    var t = $(e.target);

    if (!hasT) {
      if (i == a.index()) {
        return false;
      }
      a
      .addClass('tab-hidden')
      .removeClass('tab-active');

      s.addClass('tab-active');

      hasT = true;

      a.on('transitionend webkitTransitionend', function() {
        $(this).removeClass('tab-hidden');
        hasT = false;
        a.off('transitionend webkitTransitionend');
      });
    }

    return false;
  };
  var keyNav = function(e) {
    var a = $('section.tab-active');
    var aNext = a.next();
    var aPrev = a.prev();
    var i = a.index();
    if (!hasT) {
      if (e.keyCode === 37) {

        if (aPrev.length === 0) {
          aPrev = section.last();
        }

        hasT = true;

        aPrev.addClass('tab-active');
        a
          .addClass('tab-hidden')
          .removeClass('tab-active');

        a.on('transitionend webkitTransitionend', function() {
          a.removeClass('tab-hidden');
          hasT = false;
          a.off('transitionend webkitTransitionend');
        });

      } else if (e.keyCode === 39) {
        if (aNext.length === 0) {
          aNext = section.eq(0)
        }
        aNext.addClass('tab-active');
        a.addClass('tab-hidden')
          .removeClass('tab-active');
        hasT = true;
        aNext.on('transitionend webkitTransitionend', function() {
          a.removeClass('tab-hidden');
          hasT = false;
          aNext.off('transitionend webkitTransitionend');
        });
      } else {
        return;
      }
    }
  };
  var bindActions = function() {
    link.on('click', switchPage);
    $(document).on('ready', function() {

    });
    $('body').on('keydown', keyNav);
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

}());

Nav.init();
