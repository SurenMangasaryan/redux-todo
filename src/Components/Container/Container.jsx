import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux/es/exports'
import AddPanel from '../AddPanel/AddPanel'
import Todos from '../Todos/Todos'
import '../Container/Container.css'
import Footer from '../Footer/Footer'

function Container({ todos }) {

    const panelRef = useRef("");

    useEffect(() => {
        if (todos.length >= 8) {
            panelRef.current.style.overflowY = "scroll";
        }
    }, [todos])

    return (
        <div className='container'>
            <h1 className='title'>Todo List</h1>
            <div className='form-panel' ref={panelRef}>
                <AddPanel />
                <Todos />
                <Footer />
            </div>
        </div>
    )
}

export default connect(
    (state) => ({ todos: state }),
    null,
)(Container);