module.exports = function(mongoose) {
	//TODO - Add char limits to name(s)
	var playerSchema = mongoose.Schema({
		fname: { type: String, required: true },
		lname: { type: String, required: true },
		nickname: { type: String, required: true },
		email: { type: String, required: false },
		wins: { type: String, required: false },
		losses: { type: String, required: false },
		matchesPlayed: { type: String, required: false },
		streak: { type: String, required: false },
		ratio: { type: String, required: false },
		createdDate: { type: Date, default: Date.now },
	    rating: { type: Number, default: 1200 }
	});

	var Players = mongoose.model('players', playerSchema);

	return {
		Players: Players
	};
};
