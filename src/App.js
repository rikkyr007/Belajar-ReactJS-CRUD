import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
// import Todo component here
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [{
          id: '1',
          title: 'Buy Milk',
          done: false,
          date: new Date()
        },
        {
          id: '2',
          title: 'Meeting with Ali',
          done: false,
          date: new Date()
        },
        {
          id: '3',
          title: 'Tea Break',
          done: false,
          date: new Date()
        }
      ]
    };
  }
  render() {
    // use Todo component inside render method
    return ( < div className = "App" > <Todo mockData = {
        this.state.data
      }
      /> < /div > );
  }
}
export default App;