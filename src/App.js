import React from 'react';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(props) {  //매개변수 props 생성자
    super(props);   // 매개변수 pros 초기화
    this.state = {   // item 에 item.id, item.title, item.done 매개변수 이름과 값 할당
      item :{id:0, title:"Hello World 1 ", done:true},
    };
  }
  render() {
    return (
      <div className="App">
        <Todo item={this.state.item}/>
      </div>
    );
  }
}
export default App;