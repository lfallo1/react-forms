var React = require('react');
var EventButton = require('./EventButton.jsx');
var InputNumber = require('./InputNumber.jsx');

var Calculator = React.createClass({

    getInitialState : function(){
      return {'result' : ''}
    },

    clearResult : function(){
        this.setState({'result' : ''});
        this.refs.number1.setState({'value' : 0});
        this.refs.number2.setState({'value' : 0});
    },

    setResult : function(result){
        this.setState({'result' : result});
    },

    isValidNumber : function(num1, num2){
        return num1 && num2 && !(isNaN(num1) || isNaN(num2))
    },

    onAdd : function(e){
        if(this.isValidNumber(this.refs.number1.state.value, this.refs.number2.state.value)){
            this.setResult(Number(this.refs.number1.state.value) + Number(this.refs.number2.state.value));
        }
    },
    onSubtract : function(e){
        if(this.isValidNumber(this.refs.number1.state.value, this.refs.number2.state.value)){
            this.setResult(Number(this.refs.number1.state.value) - Number(this.refs.number2.state.value));
        }
    },
    onMultiply : function(e){
        if(this.isValidNumber(this.refs.number1.state.value, this.refs.number2.state.value)){
            this.setResult(Number(this.refs.number1.state.value) * Number(this.refs.number2.state.value));
        }
    },
    onDivide : function(e){
        if(this.isValidNumber(this.refs.number1.state.value, this.refs.number2.state.value) && this.refs.number2.state.value != 0){
            this.setResult(Number(this.refs.number1.state.value) / Number(this.refs.number2.state.value));
        }
    },

    render : function(){
        return (
            <div className="row calculator-wrapper">
                <div className="col-md-6">
                    <div className="row calculate-inputs">
                        <InputNumber ref="number1" />
                        <InputNumber ref="number2" />
                    </div>
                    <div className="row event-buttons">
                        <EventButton className="btn btn-primary btn-md" text="+Add" onClick={this.onAdd} />
                        <EventButton className="btn btn-primary btn-md" text="-Subtract" onClick={this.onSubtract} />
                        <EventButton className="btn btn-primary btn-md" text="*Multiply" onClick={this.onMultiply} />
                        <EventButton className="btn btn-primary btn-md" text="/Divide" onClick={this.onDivide} />
                    </div>
                    <div className="row calculator-results">
                        <div className="col-md-7">
                            <input disabled="true" placeholder="result" value={this.state.result} className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <EventButton className="btn btn-danger btn-lg" text="Clear" onClick={this.clearResult} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Calculator;