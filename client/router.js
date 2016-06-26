BlazeLayout.setRoot('body');
// 首页
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("home");
  }
});

