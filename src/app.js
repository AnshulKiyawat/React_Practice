class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
      this.removeOption = this.removeOption.bind(this);
      this.pickOption = this.pickOption.bind(this);
      this.addOption = this.addOption.bind(this);
      this.state = {
        options: props.options
      }
  }

  addOption(option) {
    if(!option){
      return 'Invalid Option'
    }else if(this.state.options.indexOf(option)>-1){
      return 'Duplicate Option';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
      })
    ); 
  }

  removeSingleOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  removeOption() {
    this.setState(()=>({ options: [] }));
  }

  pickOption(){
    const randNum = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[randNum];

    alert(option);
  }
    
  render() {
    const subtitle = 'Put your life in the hands of a computer';
  
    return (
      <div>
        <Header subtitle = {subtitle}/>
        <Action 
          hasOptions = {this.state.options.length>0}
          pickOption = {this.pickOption}
        />
        <Options 
          removeSingleOption = {this.removeSingleOption}
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
  
IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button onClick = {props.pickOption} disabled = {!props.hasOptions}>
      What should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
        <button onClick={props.removeOption}>Clear Options</button>
        {
            props.options.map((option) => (
              <Option 
                key={option} 
                optionText={option} 
                deleteOption = {props.removeSingleOption}
              />
            ))
        }
    </div>
  );
};
  
const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button onClick = {(e)=>{props.deleteOption(props.optionText)}}> 
          Remove 
        </button>
      </div>
    );
};
  
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
      this.setState(()=>({error}));

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
  