function Btn() {
    const onMouseOver = 
    () => console.log("mouse over")
    return (
        <button onMouseOver={onMouseOver}>Click me</button>
    );
}

export default Btn;