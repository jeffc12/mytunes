// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

	url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',


	parse:function(response){
		return response.results;
	},

	initialize: function() {
		this.fetch({
			data: {limit: 20}
		});

	},


  model: SongModel

});
