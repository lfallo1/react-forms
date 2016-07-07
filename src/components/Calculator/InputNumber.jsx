var React = require('react');

var InputNumber = React.createClass({

    getInitialState : function(){
      return {'value' : 0}
    },

    onChange : function(e){
      this.setState({'value' : e.target.value});
    },

    render : function(){
        return (
            <div className="col-md-6">
                <input type="number" className="form-control" value={this.state.value} onChange={this.onChange}/>
            </div>
        );
    }

});

module.exports = InputNumber;

