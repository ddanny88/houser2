import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHouses } from '../../ducks/reducer';
import axios from 'axios';
import './dash.css';


class Dashboard extends Component {


    componentDidMount(){
        this.props.getHouses();
    }


    // passing in the id of the selected object and deleting it from the list. Then returning the updated list. 
    deleteHome = (id) => {
        axios.delete(`/api/house/${id}`)
            .then(() => {
                this.props.getHouses();
            })
            .catch(err => console.log(err));
    }


    render() {
        const { houseList } = this.props;
        let displayHomes = houseList.map(home => (
            <House
                id={home.id}
                key={home.id}
                name={home.name}
                address={home.address}
                city={home.city}
                state={home.state}
                zip={home.zip}
                img={home.img}
                mortgage={home.mortgage}
                rent={home.rent}
                deleteHome={this.deleteHome}
            />
        ))
        return (
            <div className="dash-container">
                Dashboard
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                <br className="break"/>
                {displayHomes}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { houseList } = state
    return {
        houseList
    }
}


export default connect(mapStateToProps, { getHouses })(Dashboard);