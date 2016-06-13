module.exports = {

	tableName: 'post',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	
	attributes: {

		idPost : {
			type: 'integer',
			primaryKey: true
		},

		usuario : {
			type: 'string'
		},

		titulo : {
			type: 'string'
		},

		conteudo : {
			type: 'string'
		},

		data : {
			type: 'date'
		}
	},

	setUndefined: function (field) {
		
		if(field != undefined)
			return field;

		return null;
	},

	setMarks: function (string) {

		if(string != null)
			return "'"+string+"'";

		return string;
	}
};