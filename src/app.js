class Header extends React.Component{
    render(){
        return <p>This is Form Header</p>
    }
}

const jsx = (
    <div>
        <h1>Titile</h1>
        <Header />
        <Header/>
    </div>
)

ReactDOM.render(jsx,document.getElementById('app'));