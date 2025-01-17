import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={8}>
        <PokemonCard pokemon={this.props.pokemon} />
      </Card.Group>
    )
  }
}

export default PokemonCollection
