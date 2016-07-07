var React = require('react');

var EventButton = React.createClass({

    propTypes : {
        onClick : React.PropTypes.func.isRequired
    },

    render : function(){
        return (
            <div className="col-md-3">
                <button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        );
    }

});

module.exports = EventButton;