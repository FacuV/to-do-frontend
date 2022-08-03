import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.text : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }
    
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input 
                    type="text" 
                    placeholder='Update your item' 
                    value={input} 
                    name="text"
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='todo-button edit'>Add</button>
                </>
            ): 
            <>
            <input 
                type="text" 
                placeholder='Add a task' 
                value={input} 
                name="text"
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
                <button className='todo-button'>Add</button>
            </>
            }
        </form>
    )
}

export default TodoForm