import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  getPicUrl = () => {
    let back = this.props.pokemon.sprites["back"]
    let front = this.props.pokemon.sprites["front"]

    

  }

  render() {
  
    
    return (
      <Card>
        <div>
          <div onClick={this.getPicUrl} className="image">
            <img src={this.props.pokemon.sprites["front"]} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
              
              {this.props.pokemon.stats[5].name}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
