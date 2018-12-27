import axios from 'axios';


const initialState = {
   //WizardOne state: 
    name: '',
    address: '',
    city: '',
    st: '',
    zipcode: 0,
    //dashboard state: 
    houseList: [],
    //wizardTwo state: 
    img: '',
    //wizardThree state: 
    mortgage: 0,
    rent: 0
}

// action types: 
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const GET_HOUSES = 'GET_HOUSES';
const ADD_HOUSE = 'ADD_HOUSE';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const CLEAR = 'CLEAR';




//action functions: 
export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState(st){
    return {
        type: UPDATE_STATE,
        payload: st
    }
}
export function updateZip(zip){
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}
export function updateImg(url){
    return {
        type: UPDATE_IMG,
        payload: url
    }
}
export function updateMortgage(mortgage){
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}
export function updateRent(rent){
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}
export function clearInput(){
    return {
        type: CLEAR,
        payload: initialState
    }
}

// you are using promise middleware, you need a status fulfilled inside of the reducer so it knows the request has been fulfilled and the data can be passed through. 
export function getHouses(){
    return {
        type: GET_HOUSES,
        payload: axios.get('/api/houses')
        .then(response => response.data)
        .catch(err => console.log(`**${err}**`))
    }
}

export function addHouse(name, address, city, st, zipcode, img,  mortgage, rent){
    let home = {
        name,
        address,
        city,
        st,
        zipcode,
        img,  
        mortgage,
        rent
    }
    return {
        type: ADD_HOUSE,
        payload: axios.post('/api/house', home)

    }
}



// reducer: 
function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case UPDATE_CITY:
            return {
                ...state,
                city: action.payload
            }
        case UPDATE_STATE:
            return {
                ...state,
                st: action.payload
            }
        case UPDATE_ZIP:
            return {
                ...state,
                zipcode: action.payload
            }
        case `${GET_HOUSES}_FULFILLED`: 
            return {
                ...state,
                houseList: action.payload
            }
        case UPDATE_IMG: 
            return {
                ...state,
                img: action.payload
            }
        case UPDATE_MORTGAGE: 
            return {
                ...state,
                mortgage: action.payload
            }
        case UPDATE_RENT:
            return {
                ...state,
                rent: action.payload
            }
        case CLEAR:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer;
