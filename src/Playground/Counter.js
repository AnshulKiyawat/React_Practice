let count = 0;
const addOne = ()=>{
    count = count+1;
    renderCounterApp();
}

const subOne = ()=>{
    count = count-1;
    renderCounterApp();
};
const reset = ()=>{
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

const renderCounterApp = ()=> {

    var template2 = (
        <div>
            <h1>Count :{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
    
    ReactDOM.render(template2,appRoot);
}

renderCounterApp();