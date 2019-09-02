import React, { Component } from 'react'

export default class House extends Component {
    render() {
        let {id, name, address, city, state, zip } =this.props.house
        return (
            <div>
                <h3>{name}</h3>
                <h3>{address}</h3>
                <h3>{city}</h3>
                <h3>{state}</h3>
                <h3>{zip}</h3>
                <button>Delete</button>
            </div>
        )
    }
}
