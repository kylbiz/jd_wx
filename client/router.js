FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogHome"});
  }
});

FlowRouter.route('/:postId', {
  action: function(params) {
  	console.log(params.postId);
    BlazeLayout.render("mainLayout", {content: "blogPost"});
  }
});