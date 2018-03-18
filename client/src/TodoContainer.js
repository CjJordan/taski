import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import API from "./utils/API";
import TagPanel from './components/TagPanel';
import TodoPanel from './components/TodoPanel';
import MenuPanel from './components/MenuPanel';

const tasksArr =  [
  {id: 0, title:"spin class" , tags:["social", "fitness"], complete: false, date:"2018-03-14 18:40:07.142Z"},
  {id: 1, title:"julia's party" , tags:["social"], complete: true, date:"2018-03-18 18:40:07.142Z"},
  {id: 2, title:"spanish meetup" , tags:["social", "spanish"], complete: false, date:"2018-03-18 18:40:07.142Z"},
  {id: 3, title:"duolingo" , tags:["spanish"], complete: false, date:"2018-03-17 18:40:07.142Z"},
  {id: 4, title:"lift weights" , tags:["fitness"], complete: true, date:"2018-03-18 18:40:07.142Z"},
  {id: 5, title:"laundry" , tags:["housework"], complete: false, date:"2018-03-18 19:40:07.142Z"},
  {id: 6, title:"dishes" , tags:["housework"], complete: false, date:"2018-03-18 18:40:07.142Z"},
  {id: 7, title:"vacuum" , tags:["housework"], complete: false, date:"2018-03-19 18:40:07.142Z"},
  {id: 8, title:"walk 606 with Shamika" , tags:["fitness", "social"], complete: false, date:"2018-03-20 18:40:07.142Z"}
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

    componentDidMount() {
      this.loadTasks();
    }

    loadTasks = () => {
      API.getTasks()
        .then(res =>this.setState({ tasks: res.data}))
        .catch(err => console.log(err));
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

    toggleComplete = (id) => {
      const task = tasksArr.find(e => e.id === id);
      task.complete = !task.complete;
      this.updateTasks();
    }


  
    render() {
      console.log("state", this.state);
      return (
        <Grid fluid>
              <Row>
                <TagPanel tags={this.state.tags} handler={this.toggleTag}/>
                <TodoPanel tasks={this.state.tasks} handler={this.toggleComplete}/>
                <MenuPanel />
              </Row>
        </Grid>
      );
    }
  }
  
  export default TodoContainer;