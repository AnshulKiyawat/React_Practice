class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeOption = this.removeOption.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            options: []
        }
    }

    addOption(option) {

        if(!option){
            return 'Invalid Option'
        }else if(this.state.options.indexOf(option)>-1){
            return 'Duplicate Option';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        }) 
    }

    removeOption() {
        this.setState(()=>{
            return {
                options: []
            }
        })
    }

    pickOption(){
        const randNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randNum];

        alert(option);
    }
    
    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action 
            hasOptions = {this.state.options.length>0}
            pickOption = {this.pickOption}
          />
          <Options 
            removeOption = {this.removeOption}
            options = {this.state.options}
          />
          <AddOption 
            addOption = {this.addOption}
          />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
    render() {
      return (
        <div>
          <button onClick = {this.props.pickOption} disabled = {!this.props.hasOptions}>
          What should I do?
          </button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    render() {
      return (
        <div>
            <button onClick={this.props.removeOption}>Clear Options</button>
            {
                this.props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      return (
        <div>
          {this.props.optionText}
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const error = this.props.addOption(option);
        //alert(error);
        this.setState(()=>{
            return {
                error
            }
        })

        e.target.elements.option.value = '';
    }
    
    render() {
      return (
        <div>
            {this.state.error && (<p>{this.state.error}</p>)}
            <form onSubmit = {this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  