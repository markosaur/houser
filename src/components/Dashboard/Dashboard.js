import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import House from '../House/House';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }

    componentDidMount = () =>{
        this.getHouses();
        console.log('attempting to mount')
    }
    getHouses = () =>{
        axios.get('/api/houses').then((res) => {
            this.setState({
                houses: res.data
            })
        })
    }

    render() {
   
        return (
            <div>
            <h2>Dashboard</h2>
            {this.state.houses.map(element => {
                return <House house={element} key={element.id} getHouses = {this.getHouses}/>
                })
            } 
            <Link to='../Wizard'><button>Add New Property</button></Link>
            </div>
        )
    }
}

export default Dashboard