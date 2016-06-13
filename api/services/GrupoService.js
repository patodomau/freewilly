module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO Grupo (usuario, nome, foto, descricao) VALUES ("
						+Grupo.setMarks(request.usuario)+", "+Grupo.setMarks(request.nome)+", "
						+Grupo.setMarks(request.foto)+", "+Grupo.setMarks(request.descricao)+");";

		Grupo.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	update: function(request, response) {

		var query = "UPDATE Grupo SET usuario = "+Grupo.setMarks(request.usuario)+", nome = "+Grupo.setMarks(request.nome)+", "
						+"foto = "+Grupo.setMarks(request.foto)+", descricao = "+Grupo.setMarks(request.descricao)
						+" WHERE idGrupo = "+request.idGrupo+";";

		Grupo.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	delete: function(request, response) {

		var query = "DELETE FROM Grupo WHERE idGrupo = "+request.idGrupo+";";

		Grupo.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	select: function(request, response) {

		var query = "SELECT * FROM Grupo WHERE idGrupo = "+request.idGrupo+";";

		Grupo.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(results.rows);
		});
	},

	selectByUsuario: function(request, response) {

		var query = "SELECT * FROM Grupo WHERE usuario = "+Grupo.setMarks(request.usuario)+";";

		Grupo.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(results.rows);
		});
	}
}