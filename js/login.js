var Nav = (function() {

  var
    nav 		= $('.css-tab'),
    section = $('.section'),
    link		= nav.find('.tab-link'),
    hasT 		= false;
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
      a.addClass('tab-hidden').removeClass('tab-active');
      s.addClass('tab-active');
      hasT = true;
      a.on('transitionend webkitTransitionend', function() {
        $(this).removeClass('tab-hidden');
        hasT = false;
        a.off('transitionend webkitTransitionend', function(){
          $(this).addClass('tab-hidden');
        });
      });
    }
    return false;
  };
  var bindActions = function() {
    link.on('click', switchPage);
  };
  var init = function() {
    bindActions();
  };
  return {
    init: init
  };
}());

Nav.init();
