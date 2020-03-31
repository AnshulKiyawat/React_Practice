class Visibility extends React.Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);

        this.state = {
            visible: false
        }
    }

    show(){
        this.setState((prevState) => {
            return{
                visible : !prevState.visible
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.show}>
                    {this.state.visible?'Hide Details':'Show Details'}
                </button>
                {
                    (this.state.visible) && 
                    (
                        <div>
                        <p>You Can't See Me</p>
                        </div>
                    )                
                }
            </div>    
        );
    };
};

ReactDOM.render(<Visibility />,document.getElementById('app'));