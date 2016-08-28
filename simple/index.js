var value = function(){
  var test = [1, 2, 3, 4, 5, 6, 7, 8]
  return test.map(function(val){
    return <div><b>{val}</b></div>;
  })
}
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
        {value()}
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
