// src/components/Counter/Counter.jsx
import React, { useReducer } from 'react';
import './Counter.css';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter App</h1>
            <div className="counter-value">{state.count}</div>
            <div className="button-group">
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: 'INCREMENT' })}
                >
                    Increase
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: 'DECREMENT' })}
                >
                    Decrease
                </button>
            </div>
            <button
                className="btn btn-success"
                onClick={() => dispatch({ type: 'RESET' })}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;