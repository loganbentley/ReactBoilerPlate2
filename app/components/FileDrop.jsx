var React = require('react');
var Dropzone = require('react-dropzone');

var FileDrop = React.createClass({
  onDrop: function (files) {
    console.log('Received files: ', files);
  },
  render: function () {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
});

module.exports = FileDrop;
