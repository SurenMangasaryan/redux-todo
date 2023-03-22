import React, { useRef } from 'react'
import { connect } from 'react-redux'
import "../AddPanel/AddPanel.css"

function AddPanel({ addTodo }) {
    const text = useRef("");

    function addForm(evt) {
        evt.preventDefault();
        if (text.current.value !== "") {
            addTodo(text.current.value);
            text.current.value = "";
        }
    }

    return (
        <form onSubmit={(evt) => addForm(evt)} >
            <div className='box-add'>
                <input type="text" ref={text} className='input-add' />
                <button className='button-add'>Add</button>
            </div>
        </form>
    )
}

export default connect(null, dispatch => ({
    addTodo: (text) => {
        dispatch({ type: "ADD", payload: text });
    }
}))(AddPanel);