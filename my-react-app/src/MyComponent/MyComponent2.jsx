import React, { useState } from "react"

function MyComponent2() {

    const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });

    function handleYearChange(event) {
        setCar(c => ({ ...car, make: event.target.value }));
    }

    function handleMakeChange(event) {
        setCar(c => ({ ...car, make: event.target.value }));
    }

    function handleModelChange(event) {
        setCar(c => ({ ...car, make: event.target.value }));
    }

    return (<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}></input><br></br>
        <input type="text" value={car.make} onChange={handleMakeChange}></input><br></br>
        <input type="text" value={car.model} onChange={handleModelChange}></input><br></br>
    </div>);
}

export default MyComponent2