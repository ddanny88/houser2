import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImg } from '../../ducks/reducer';

class WizardTwo extends Component {

    handleImgChange = (e) => {
        this.props.updateImg(e.target.value);
    }


    render() {
        return (
            <div>
                WizardTwo
                <br/>
                <input
                    type="text"
                    onChange={this.handleImgChange}
                    placeholder="imge url"
                    value={this.props.img}
                />
                <Link to="/wizard/step1"><button>Previous Step</button></Link>
                <Link to="/wizard/step3"><button>Next Step</button></Link>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { img } = state;
    return {
        img
    }
}
export default connect(mapStateToProps, { updateImg })(WizardTwo);