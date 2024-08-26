import { useState } from 'react';

function Calculadora() {
    const [input, setInput] = useState('');

    const agregarNumero = (numero) => {
        setInput(input + numero);
    };

    const limpiar = () => {
        setInput('');
    };

    const calcularRes = () => {
        try {
            setInput(eval(input));
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculadoraContainer">
            <input 
                type="text" 
                value={input} 
                readOnly 
                className="output bg-gray-800 text-white text-right p-2 mb-4 w-full"
            />
            <div className="grid grid-cols-3 gap-2 mb-4">
                <button className="btn" onClick={() => agregarNumero('1')}>1</button>
                <button className="btn" onClick={() => agregarNumero('2')}>2</button>
                <button className="btn" onClick={() => agregarNumero('3')}>3</button>
                <button className="btn" onClick={() => agregarNumero('4')}>4</button>
                <button className="btn" onClick={() => agregarNumero('5')}>5</button>
                <button className="btn" onClick={() => agregarNumero('6')}>6</button>
                <button className="btn" onClick={() => agregarNumero('7')}>7</button>
                <button className="btn" onClick={() => agregarNumero('8')}>8</button>
                <button className="btn" onClick={() => agregarNumero('9')}>9</button>
                <button className="btn" onClick={() => agregarNumero('0')}>0</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <button className="btnOperador" onClick={limpiar}>C</button>
                <button className="btnOperador" onClick={() => agregarNumero('+')}>+</button>
                <button className="btnOperador" onClick={() => agregarNumero('-')}>-</button>
                <button className="btnOperador" onClick={() => agregarNumero('*')}>x</button>
                <button className="btnOperador" onClick={() => agregarNumero('/')}>÷</button>
                <button className="btnOperador" onClick={calcularRes}>=</button>
            </div>
        </div>
    );
}

export default Calculadora;
