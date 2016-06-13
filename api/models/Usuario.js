//var DEF_USER_PHOTO = '/images/views/profile_default.png';
//var DEF_COVER_PHOTO = '/images/views/cover_default.png';

module.exports = {

	tableName: 'usuario',
	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {

		usuario : {
			type: 'string',
			primaryKey: true
		},

		senha : {
			type: 'string'
		},

		nome : {
			type: 'string'
		},

		aniversario : {
			type: 'date'
		},

		foto : {
			type: 'string'
		},

		descricao : {
			type: 'string'
		}
	},

	setUndefined: function (field) {
		
		if(field != "")
			return field;

		return null;	
	},

	setMarks: function (string) {

		if(string != null)
			return "'"+string+"'";

		return string;
	}
};