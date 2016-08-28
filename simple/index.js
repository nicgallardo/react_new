var value = "Hello!";
var something = "React";

var Comp1 = React.createClass({
  render: function(){
    return (
      <div className="textDiv">
        This is {something}
      </div>
    )
  }
})

var Comp2 = React.createClass({
  render: function(){
    return (
      <div className="textDiv">
        Well {value}
      </div>
    )
  }
})


var TestComponent = React.createClass({
  render: function(){
    return (
      <div>
        <Comp1 />
        <Comp2 />
      </div>
    )
  }
})

ReactDOM.render(
  <TestComponent />,
  document.getElementById('example')
);
