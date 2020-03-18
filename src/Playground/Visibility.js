const appRoot = document.getElementById('app')
let visible = false

const show = () =>{
    visible = !visible
    Built_Visibility()
}

const Built_Visibility = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={show}>
                {visible?'Show Details':'Hide Details'}
            </button>
            {
            (visible)&& (<p>Here is some Text</p>)                
            }
        </div>
    )
    ReactDOM.render(template,appRoot)
}

Built_Visibility()