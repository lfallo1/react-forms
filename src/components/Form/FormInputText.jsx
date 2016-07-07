var React = require('react');

var InputText = React.createClass({

    propTypes : {
        validate : React.PropTypes.func.isRequired
    },

    getInitialState : function(){
      return {valid : false, touched : false, value : ''}
    },

    onChange : function(e){
        this.setState({valid : this.props.validate(e.target.value), value : e.target.value, touched : true});
    },

    render : function(){

        var inputClass = 'form-control';
        if(this.state.touched){
            inputClass += this.state.valid ? ' input-ok' : ' input-error';
        }

        return (
            <input className={inputClass} type={this.props.inputType} placeholder={this.props.placeholder} value={this.state.value} onChange={this.onChange} />
        );
    }
});

module.exports = InputText;