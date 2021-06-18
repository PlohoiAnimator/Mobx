import React from 'react'
import todo from './store/Todo'
import { observer } from 'mobx-react-lite'

const Todo = observer(() => {
    console.log('render')
    return (
        <div>
            <button onClick={() => todo.fetchTodos()}>Todo List</button>
            {todo.todos.map(t => 
                <div className='card' key={t.id}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <input type='checkbox' checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
                        {t.title}
                        <button onClick={() => todo.removeTodo(t.id)} className='btn btn-danger'>x</button>                    
                    </div>
                </div>    
            )}
        </div>        
    )

})
export default Todo