import React from 'react'
import { connect } from 'react-redux/es/exports'
import '../Footer/Footer.css'

function Footer({ todos, clearCompleted }) {

    const checkedArr = todos.filter(todo => {
        return todo.isChecked;
    }).length

    return (
        <div className='footer'>
            <p className='check-desription'>{checkedArr}/{todos.length}</p>
            <button className='footer-clear' onClick={() => clearCompleted()}>Clear Completed</button>
        </div>
    )
}

export default connect(
    (state) => ({ todos: state }),
    (dispatch) => ({
        clearCompleted: () => {
            dispatch({ type: "CLEAR" })
        }
    })
)(Footer);
