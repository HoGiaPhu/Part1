
import { useState } from 'react';

export default function Calculator() {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput('Error');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-pink-200">
            <div className="bg-white p-6 rounded-2xl shadow-2xl">
                <div className="mb-4 text-right text-3xl p-4 bg-gray-100 rounded-xl">{input || '0'}</div>
                <div className="grid grid-cols-4 gap-4">
                    {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
                        <button
                            key={item}
                            onClick={() => item === '=' ? handleCalculate() : handleClick(item)}
                            className="bg-blue-400 hover:bg-blue-500 text-white text-2xl p-4 rounded-xl"
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        onClick={handleClear}
                        className="col-span-4 bg-red-400 hover:bg-red-500 text-white text-2xl p-4 rounded-xl"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}