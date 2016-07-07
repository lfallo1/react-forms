var React = require('react');
var Form = require('./components/Form/Form.jsx');
var Calculator = require('./components/Calculator/Calculator.jsx');

var App = React.createClass({

    render : function(){

        return (
            <div className="container">
                <Form />
                <Calculator />
            </div>
        );
    }
});

module.exports = App;