if (Meteor.isClient) {
  // Using body as root will change nothing, no events and
  // onRendered without html body tag
  //FlowLayout.setRoot('body');

  Template.body.onRendered(function() {
    // I'll fire only if there is a body tag
    alert('Yay, I heard you body onRendered');
  });

  Template.body.events({
    'click': function() {
      // This will never run too on templates handled by FlowLayout
      // neither with or without body tag
      alert('I heard you body');
    }
  });

  //Template.layout.events({
    //'click': function() {
      //alert('I hear only to layout');
    //}
  //});
}

FlowRouter.route('/', {
  action: function() {
    // I'll be inside body, but I hate to listen to his events
    FlowLayout.render('layout', { main: 'hello' });
  }
});
