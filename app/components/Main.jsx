var React = require('react');
var FileDrop = require('FileDrop');

var Main = (props) => {
		return (
			<div>
				<div>
					<div>
						<h1>Dropzone test</h1>
						<FileDrop></FileDrop>
						{props.children}
					</div>
				</div>
			</div>
		);
}

module.exports = Main;
