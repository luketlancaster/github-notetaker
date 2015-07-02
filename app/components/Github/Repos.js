var React = require('react');

var Repos = React.createClass({
  render: function(){
    return (
      <div>
        REPOS <br />
        Username: {this.props.username} <br />
        Bio: {this.props.repos} <br />
      </div>
    )
  }
});

module.exports = Repos
