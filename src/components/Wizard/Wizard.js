import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            address:'',
            city: '',
            state:'',
            zip:0
        }
    }

    handleName=(val)=>{
        this.setState({
            name: val
        })
    }

    handleAddress=(val)=>{
        this.setState({
            address: val
        })
    }

    handleCity=(val)=>{
        this.setState({
            city: val
        })
    }

    handleState=(val)=>{
        this.setState({
            state: val
        })
    }

    handleZip=(val)=>{
        this.setState({
            zip: val
        })
    }

    handleCreateHouse = () => {
        const {name, address, city, state, zip} = this.state
        const newHouse = {
            name,
            address,
            city,
            state,
            zip
        }

        axios.post('/api/houses', newHouse).then(
            res=> {this.props.getHouses(res.data)
                   this.handleCancel() 
                    }).catch(error => {
                        console.log(error)
                    })
    }

    render() {
        return (
            <div>
                <Link to='../Dashboard'><button>Cancel</button></Link>

                Wizard
                <input placeholder='name' onChange={(e)=> this.handleName(e.target.value)} value={this.state.name}></input>
                <input placeholder='address' onChange={(e)=> this.handleAddress(e.target.value)} value={this.state.address}></input>
                <input placeholder='city' onChange={(e)=> this.handleCity(e.target.value)} value={this.state.city}></input>
                <input placeholder='state' onChange={(e)=> this.handleState(e.target.value)} value={this.state.state}></input>
                <input placeholder='zip' onChange={(e)=> this.handleZip(e.target.value)} value={this.state.zip}></input>
                <button onClick={this.handleCreateHouse}>Complete</button>

            </div>
        )
    }
}
