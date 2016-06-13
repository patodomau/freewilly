module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO PostReacao (idPost, usuario, reacao, compartilhou) VALUES ("
						+request.idPost+", "+PostReacao.setMarks(request.usuario)+", "
						+request.reacao+", "+request.compartilhou+");";

		PostReacao.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	update: function(request, response) {

		var query = "UPDATE PostReacao SET reacao = "+request.reacao+", compartilhou = "+request.compartilhou+" "
						+"WHERE idPost = "+request.idPost+" AND usuario = "+PostReacao.setMarks(request.usuario)+";";

		PostReacao.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	delete: function(request, response) {

		var query = "DELETE FROM PostReacao WHERE idPost = "+request.idPost
						+" AND usuario = "+PostReacao.setMarks(request.usuario)+";";

		PostReacao.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	select: function(request, response) {

		var query = "SELECT * FROM PostReacao WHERE idPost = "+request.idPost
			+" AND usuario = "+PostReacao.setMarks(request.usuario)+";";

		PostReacao.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(results.rows);
		});
	}
}