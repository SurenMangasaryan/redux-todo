import React, { useState } from 'react'
import { connect } from 'react-redux'

function CheckTodo({ todo, checkedTodo }) {

    const [bool, setBool] = useState(false);

    return (
        <div className='check-desc'>
            <input id='check' className="custom-checkbox" type="checkbox" checked={bool} onChange={(evt) => {
                checkedTodo({
                    ...todo,
                    isChecked: evt.target.checked
                });
                setBool(evt.target.checked)
            }} />
            <p className={bool ? 'check-desription' : 'not-check-desription'}>{todo.description}</p>
        </div>
    )
}

export default connect(
    null,
    (dispatch) => ({
        checkedTodo: (evt) => {
            dispatch({ type: "CHECKED", payload: evt })
        }
    })
)(CheckTodo)