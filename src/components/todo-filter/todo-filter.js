import React, { Component } from 'react';

class TodoFilter extends Component {
  render() {
    return(
     <div>
       <span>Filter: </span>
       <span>
        <button>All</button>
       </span>
       <span>
        <button>Finished</button>
       </span>
     </div>
    );
  }
}

export default TodoFilter;