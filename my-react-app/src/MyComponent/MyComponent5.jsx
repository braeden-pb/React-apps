import React, { useState, useEffect } from "react"

function MyComponent5() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWdith] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height]);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color])


    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    function handleResize() {
        setWdith(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p style={{ color: color }}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br></br>
        <button onClick={changeColor}>Change Color</button><br></br>
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
    </>);
}

export default MyComponent5