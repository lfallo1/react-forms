var React = require('react');
var FormInputText = require('./FormInputText.jsx');
var emailValidator = require("email-validator");

var Form = React.createClass({

    validateEmail : function(value){
        return emailValidator.validate(value);
    },

    validateText : function(value){
        return value && value.length < 20;
    },

    onSubmit : function(){
        if(this.refs.fieldEmail.state.valid && this.refs.fieldFirstName.state.valid && this.refs.fieldLastName.state.valid){
            console.log('valid');
        } else{
            console.log('invalid');
        }
    },

    render : function(){

        return (
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <FormInputText ref="fieldEmail" inputType="text"  placeholder="Email address" validate={this.validateEmail}/>
                        <FormInputText ref="fieldFirstName" inputType="text"  placeholder="first name" validate={this.validateText}/>
                        <FormInputText ref="fieldLastName" inputType="text"  placeholder="last name" validate={this.validateText}/>
                        <button className="btn btn-primary btn-lg" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Form;