import React from 'react';
import {Todo} from './Todo';
export class TodoList extends React.Component{
    render(){
        const list = this.props.dataList;   
        const toDos = list.map((todo,k) =>
            <Todo key ={k}
                text = {todo.text}
                priority = {todo.priority}
                dueDate = {todo.dueDate}/>
        
        
        );
        console.log(toDos);
        return (<ul>{toDos}</ul>)
    }


}