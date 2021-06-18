import { observer } from 'mobx-react-lite'
import React from 'react'
import counter from './store/counter'

const Counter = observer(() => {
    return (
        <div className='container d-flex justify-content-center align-items-center flex-column' style={{marginTop: 100, marginBottom: 50}}>
            <div className='container d-flex justify-content-center align-items-center flex-column border border-dark w-auto p-4' style={{fontSize: 25}}>
                {counter.total}
                <div className='container d-flex justify-content-center'>
                    <button 
                        className='btn btn-warning d-flex justify-content-center align-items-center pb-3 mt-2' 
                        style={{fontSize: 36, fontWeight:'bold', width: 50, height:50, borderRadius: 50, border: 0}}
                        onClick = {() => counter.increment()}
                    >
                            +
                    </button>

                    <button 
                        className='btn btn-warning d-flex justify-content-center align-items-center pb-3 mt-2' 
                        style={{fontSize: 46, fontWeight:'bold', width: 50, height:50, borderRadius: 50, border: 0}}
                        onClick = {() => counter.decrement()}
                    >
                            -
                    </button>                    
                </div>
            
            </div>
        </div>
    )
})

export default Counter