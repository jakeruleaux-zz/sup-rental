import Ember from 'ember';

export default Ember.Component.extend({
  addAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addAnnouncement', true);
    },

    saveAnnouncement() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('addAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
