import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import TagPanel from './components/TagPanel';
import TodoPanel from './components/TodoPanel';
import MenuPanel from './components/MenuPanel';

const tasksArr =  [
  {title:"spin class" , tags:["social", "fitness"], complete: false},
  {title:"julia's party" , tags:["social"], complete: true},
  {title:"spanish meetup" , tags:["social", "spanish"], complete: false},
  {title:"duolingo" , tags:["spanish"], complete: false},
  {title:"lift weights" , tags:["fitness"], complete: true},
  {title:"laundry" , tags:["housework"], complete: false},
  {title:"dishes" , tags:["housework"], complete: false},
  {title:"vacuum" , tags:["housework"], complete: false},
  {title:"walk 606 with Shamika" , tags:["fitness", "social"], complete: false}
];

class TodoContainer extends Component {
    state = {
      tags: [
        {title: 'spanish', checked: false}, 
        {title: 'housework', checked: false}, 
        {title: 'social', checked: false}, 
        {title: 'fitness', checked: false}
      ],
      tasks: []
    };

    toggleTag = (event) => {
      const tags = [...this.state.tags];
      const i = tags.findIndex(e => e.title === event.target.value);

      tags[i].checked = !tags[i].checked
      this.setState({tags});
      this.updateTasks();
    };

    updateTasks = () => {
      const checkedArr = this.state.tags
        .filter(e => e.checked)
        .map(e => e.title);

      const tasks = tasksArr.filter(e =>
        e.tags.some(tag => checkedArr.includes(tag))
      );

      this.setState({tasks});
    };


  
    render() {
      console.log("state", this.state);
      return (
        <Grid fluid>
              <Row>
                <TagPanel tags={this.state.tags} handler={this.toggleTag}/>
                <TodoPanel tasks={this.state.tasks}/>
                <MenuPanel />
              </Row>
        </Grid>
      );
    }
  }
  
  export default TodoContainer;