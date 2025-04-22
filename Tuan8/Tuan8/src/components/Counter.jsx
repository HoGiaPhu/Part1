import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
            <h1 className="text-4xl font-bold mb-6">Simple Counter</h1>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center">
                <div className="text-6xl font-bold mb-6">{count}</div>
                <div className="flex gap-4">
                    <button
                        onClick={() => dispatch(decrement())}
                        className="bg-red-400 hover:bg-red-500 text-white py-2 px-6 rounded-2xl text-xl"
                    >
                        -
                    </button>
                    <button
                        onClick={() => dispatch(reset())}
                        className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-6 rounded-2xl text-xl"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => dispatch(increment())}
                        className="bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded-2xl text-xl"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}