import { Card } from '../card/Card.component'

import './CardList.styles.css'

export function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}
