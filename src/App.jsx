import React from 'react'
import Counter from './Counter'
import Todo from './Todo'

const App = () => {
    return (
        <div className='d-flex flex-column'>
            <Counter/>
            <Todo/>
        </div>
    )
}

export default App