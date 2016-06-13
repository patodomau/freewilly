module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO GrupoUsuarios (idGrupo, usuario) VALUES ("+request.idGrupo+", "
						+GrupoUsuarios.setMarks(request.usuario)+");";

		GrupoUsuarios.query(query, function (error, results) {

			if(error)
				////sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	/*update: function(request, response) {

		var query = "UPDATE GrupoUsuarios SET ";

		GrupoUsuarios.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(results);
		});
	},*/

	delete: function(request, response) {

		var query = "DELETE FROM GrupoUsuarios WHERE idGrupo = "+request.idGrupo+" AND usuario = "
						+GrupoUsuarios.setMarks(request.usuario)+";";

		GrupoUsuarios.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response({sucesso: true});
		});
	},

	selectByUsuario: function(request, response) {

		var query = "SELECT * FROM GrupoUsuarios WHERE usuario = "+GrupoUsuarios.setMarks(request.usuario)+";";

		GrupoUsuarios.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(results.rows);
		});
	},

	selectByIdGrupo: function(request, response) {

		var query = "SELECT * FROM GrupoUsuarios WHERE idGrupo = "+GrupoUsuarios.setMarks(request.idGrupo)+";";

		GrupoUsuarios.query(query, function (error, results) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(results.rows);
		});
	}
}