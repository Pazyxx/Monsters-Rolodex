import {Component} from "react"
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : "",
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  updateSearchField = (event) => {
    return (this.setState({searchField : event.target.value}));
  };

  render(){
    const { monsters, searchField } = this.state;
    const { updateSearchField } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return(
      <div id="main-div">
        <h1 className="app-title">Monsters Rolodex</h1>
        < SearchBox placeholder="search monsters" type="search" className="search-box" onChangeHandler={updateSearchField}/>
        < CardList monsters={filteredMonsters}/>
      </div>
    )
  }
  
}

export default App;
