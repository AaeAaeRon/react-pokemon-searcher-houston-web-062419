import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component{

  constructor(){
    super()

    this.state={
      displayPoke: [],
      pokemons: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => this.setState({       
      displayPoke: data,
      pokemons: data
    }))
  }

  render(){
    
    return(
      <div className="App">
        <PokemonIndex pokemons={this.state.displayPoke}/>
      </div>
    )
  }
}
  


export default App
