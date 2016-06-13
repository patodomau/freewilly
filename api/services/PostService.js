module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO Post (usuario, titulo, conteudo) VALUES ("
						+Post.setMarks(request.usuario)+", "+Post.setMarks(request.titulo)+", "
						+Post.setMarks(request.conteudo)+");";

		Post.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	update: function(request, response) {

		var query = "UPDATE Post SET usuario = "+Post.setMarks(request.usuario)+", titulo = "+Post.setMarks(request.titulo)+", "
						+"conteudo = "+Post.setMarks(request.conteudo)+" WHERE idPost = "+request.idPost+";";

		Post.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	delete: function(request, response) {

		var query = "DELETE FROM Post WHERE idPost = "+request.idPost+";";

		Post.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	select: function(request, response) {

		var query = "SELECT * FROM Post WHERE idPost = "+request.idPost+";";

		Post.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(results.rows);
		});
	},

	selectByUsuario: function(request, response) {

		var query = "SELECT * FROM Post WHERE usuario = "+Post.setMarks(request.usuario)+";";

		Post.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(results.rows);
		});
	}
}