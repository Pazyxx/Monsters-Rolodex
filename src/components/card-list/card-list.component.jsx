import { Component } from "react";
import "./card-list.styles.css"

class CardList extends Component{

    createMonsters = (monsters) => {
        
        return monsters.map((monster) => {
            return(
                <div className="card">
                    <img alt="" src={`https://robohash.org/${monster.id}?set=set2&size=260x220`}/>
                    <span className="monster-name" key={monster.id}>{monster.name}</span>
                    <p key={monster.username} className="monster-email" >{monster.email}</p>
                </div>
            
            )
        })

    }
    
    render(){ 
        
        const { monsters } = this.props
        const { createMonsters } = this
        console.log(monsters)
        return(
            <div className="card-container">
                {createMonsters(monsters)}
            </div>
        )
    }
}

export default CardList