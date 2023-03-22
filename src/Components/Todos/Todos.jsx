import React from 'react'
import { connect } from "react-redux"
import "../Todos/Todos.css"
import CheckTodo from './TodosComponents/CheckTodo';

function Todos({ todos, deleteTodo }) {
    return (
        <div className='todos'>
            {todos !== undefined ?
                todos.map((todo, index) => {
                    return (
                        <div key={todo.id} className="box-todo">
                            <CheckTodo todo={todo} />
                            <button className='delete-btn' onClick={() => deleteTodo(index)}>X</button>
                        </div>
                    )
                }) : null}
        </div>
    )
}

export default connect(
    (state) => ({ todos: state }),
    (dispatch) => ({
        deleteTodo: (index) => {
            dispatch({ type: "DELETE", payload: index })
        }
    })
)(Todos)
