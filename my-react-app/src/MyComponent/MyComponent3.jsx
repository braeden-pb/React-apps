import React, { useState } from "react"

function MyComponent3() {

    const [foods, setFood] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFood([...foods, newFood]);
    }

    function handleRemoveFood(index) {
        setFood(foods.filter((_, i) => i !== index));
    }

    return (<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={handleAddFood}>Add Food</button><br></br>
    </div>);
}

export default MyComponent3