import { Component } from 'react'
import { SearchBox } from './components/search-box/SearchBox.component'
import { CardList } from './components/card-list/CardList.component'

import './App.styles.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1 className="title">Monster Rolodex</h1>
        <SearchBox
          placeholder="Enter monster name"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}

export default App
