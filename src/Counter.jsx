import { useState } from "react";
import "./Counter.css"

function Counter () {
	const [count, setCount] = useState(0);
	const increase = () => {
		setCount(count + 1)
	}
	const subtraction = () => {
		setCount(count - 1)
	}
	console.log(count)
	return (
		<div className = "Counter">
				<div>
					<h2>Счетчик:</h2>
					<h1>{count}</h1>
					<button className = "minus" onClick={subtraction}>-Минус</button>
					<button className = "plus" onClick={increase}>Плюс+</button>
				</div>
		</div>
		)
};

export default Counter;