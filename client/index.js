var React = require('react');
var ReactDOM = require('react-dom');

import Hour from './Hours'

var App = React.createClass({
  render: function() {
    var hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']
    return (
      <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      {hours.map((hour) => <Hour time={hour} />)}
      </div>
    );
  }
})

ReactDOM.render(<App />, document.getElementById('root'));
