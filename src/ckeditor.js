

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

export default class ClassicEditor extends ClassicEditorBase {}

import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

// Simple plugin which loads the data processor.
function Markdown( editor ) {
	editor.data.processor = new GFMDataProcessor( editor.editing.view.document );
}
// add test plugin
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// This SVG file import will be handled by webpack's raw-text loader.
// This means that imageIcon will hold the source SVG.

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

class AdvancedEditor extends Plugin {
	init() {
		const editor = this.editor;
		const toolbarItems = editor.config.get( 'toolbarItems' );
		toolbarItems.forEach( item => {
			editor.ui.componentFactory.add( item.label, locale => {
				const view = new ButtonView( locale );

				view.set( {
					label: item.label,
					icon: item.icon,
					tooltip: true
				} );
				view.on( 'execute', item.onClick.bind(editor) );

				return view;
			} );
		} );
	}
}
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';
class DisUploadAdapter {
	constructor( loader ) {
		// The file loader instance to use during the upload.
		this.loader = loader;
	}
	// Starts the upload process.
	upload() {
		const disUploader = this.loader.editor.config.get( 'disUploader' );
		return this.loader.file
			.then( file => new Promise( ( resolve, reject ) => {
				disUploader.upload( resolve, reject, file, this );
			} ) );
	}

	// Aborts the upload process.
	abort() {
		const disUploader = this.loader.editor.config.get( 'disUploader' );
		disUploader.abort( this );
	}
}

function DiscourseUpload( editor ) {
	editor.plugins.get( 'FileRepository' ).createUploadAdapter = loader => {
		// Configure the URL to the upload script in your back-end here!
		loader.editor = editor;

		return new DisUploadAdapter( loader );
	};
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Markdown,
	AdvancedEditor,
	FileRepository,
	Essentials,
	DiscourseUpload,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Image,
	ImageUpload,
	Indent,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'blockQuote',
			'|',
			'imageUpload',
			'insertTable',
			'undo',
			'redo',
			'Advanced Editor'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
