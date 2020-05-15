// import pencilIcon from '@ckeditor/ckeditor5-core/theme/icons/pencil.svg';

//const logo = require("./pilcrow.svg")
const opts = {}
opts.testf = function(){return "test"}
opts.name = {}
opts.name.icon = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>'
opts.name.bla = function() {return "blah"}
ClassicEditor.create( document.querySelector( '#editor' ), opts )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
