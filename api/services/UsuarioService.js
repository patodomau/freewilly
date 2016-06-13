module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO Usuario (usuario, senha, nome, aniversario, foto, descricao) "
						+"VALUES ("+Usuario.setMarks(request.usuario)+", "+Usuario.setMarks(request.senha)+", "
						+Usuario.setMarks(request.nome)+", "+Usuario.setMarks(request.aniversario)+", "
						+Usuario.setMarks(request.foto)+", "+Usuario.setMarks(request.descricao)+");";

		Usuario.query(query, function (error, result) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	update: function(request, response) {

		var query = "UPDATE Usuario SET senha = "+Usuario.setMarks(request.senha)+", nome = "+Usuario.setMarks(request.nome)+", "
						+"aniversario = "+Usuario.setMarks(request.aniversario)+", foto = "+Usuario.setMarks(request.foto)+", "
						+"descricao = "+Usuario.setMarks(request.descricao)+" WHERE usuario = "+Usuario.setMarks(request.usuario)+";";

		Usuario.query(query, function (error, result) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	delete: function(request, response) {

		var query = "DELETE FROM Usuario WHERE usuario = "+Usuario.setMarks(request.usuario)+";";

		Usuario.query(query, function (error, result) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	select: function(request, response) {

		var query = "SELECT * FROM Usuario WHERE usuario = "+Usuario.setMarks(request.usuario)+";";

		Usuario.query(query, function (error, result) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(result.rows);
		});
	}
}