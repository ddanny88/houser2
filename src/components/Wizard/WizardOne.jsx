import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip, clearInput } from '../../ducks/reducer';


class WizardOne extends Component {


    handleNamechange = (e) => {
        this.props.updateName(e.target.value)
    }

    handleAddress = (e) =>{
        this.props.updateAddress(e.target.value)
    }

    handleCityChange = (e) =>{
        this.props.updateCity(e.target.value)
    }

    handleStateChange = (e) => {
        this.props.updateState(e.target.value)
    }

    handleZipChange = (e) => {
        this.props.updateZip(e.target.value)
    }
    
    handleCancel = () => {
        this.props.clearInput();
    }

   
    render() {
        const { name, address, city, st, zipcode } = this.props;
        return (
            <div>
                <div>
                    <input onChange={this.handleNamechange} value={name} placeholder='name' type="text" /><br />
                    <input onChange={this.handleAddress} value={address} placeholder='address' type="text" /><br />
                    <input onChange={this.handleCityChange} value={city} placeholder='city' type="text" /><br />
                    <input onChange={this.handleStateChange} value={st} placeholder='state' type="text" /><br />
                    <input onChange={this.handleZipChange} value={zipcode} placeholder='zip' type="text" /><br />
                </div>
                <Link to="/"><button onClick={this.handleCancel}>Cancel</button></Link>
                <Link to='/wizard/step2'><button>Next Step</button></Link>
               
            </div>
        );
    }
}


//connects the component to the state from within the reducer: 
const mapStateToProps = (state) => {
    const { name, address, city, st, zipcode } = state;
    return {
        name,
        address,
        city,
        st,
        zipcode
    }
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip, clearInput })(WizardOne)