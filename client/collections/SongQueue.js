// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {

  	this.on('add', function() {
  		if (this.length < 2) {
  			this.playFirst();
  		}
  	}, this)

  	this.on('ended', function() {
  		if (this.models.length > 1) {
  		this.shift();
  		this.playFirst();
  	}
  	}, this)


    this.on('dequeue' , function() {
      this.remove();
    },this)

    },

  playFirst: function() {
    this.models[0].play()
  },

});
