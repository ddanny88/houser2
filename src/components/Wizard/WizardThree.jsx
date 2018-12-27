import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgage, updateRent, addHouse, getHouses, clearInput } from '../../ducks/reducer';


class WizardThree extends Component {

    handleMortgage = (e) => {
        this.props.updateMortgage(e.target.value);
    }

    handleRent = (e) => {
        this.props.updateRent(e.target.value);
    }

    handleComplete = () => {
        this.props.addHouse(this.props.name, this.props.address, this.props.city, this.props.st, this.props.zipcode, this.props.img, this.props.mortgage, this.props.rent);

        this.props.getHouses();
        this.props.clearInput();
    }


    render() {
        return (
            <div>
                WizardThree
            <p>Recommended Rent: ${this.props.mortgage * 1.25}</p>

                <input
                    type="text"
                    placeholder='Monthly Mortgage Amount'
                    onChange={this.handleMortgage}
                    value={this.props.mortgage}
                />
                <input
                    type="text"
                    placeholder='Desired Monthly Rent'
                    onChange={this.handleRent}
                    value={this.props.rent}
                />
                <Link to="/wizard/step2"><button>Previous Step</button></Link>
                <Link to="/"><button onClick={this.handleComplete}>Complete</button></Link>
            </div>
        );
    }
}

//captures all of the state at the time of submition. This is where you are getting the state from and what is being sent.  
function mapStateToProps(state) {
    const {name, address, city, st, zipcode, img, mortgage, rent} = state
    return {
        name, 
        address,
        city, 
        st,
        zipcode,
        img,
        mortgage,
        rent
    }
}
//connects the component to the state from within the reducer: 
export default connect(mapStateToProps, { updateMortgage, updateRent, addHouse, getHouses, clearInput })(WizardThree);