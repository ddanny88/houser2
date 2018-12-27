
//get all houses from the database and sends a json object of the houses. 
const getHouses = (req, res) => {
    let db = req.app.get("db")
    db.get_houses()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch(err => console.log(err))
}


//adds a house to the database and sends a msg of created when successful.
const addHouse = (req, res) => {
    let db = req.app.get("db")
    console.log(req.body)
    db.add_house(req.body.name, req.body.address, req.body.city, req.body.st, req.body.zipcode, req.body.img, req.body.mortgage, req.body.rent)
        .then(() => {
            res.sendStatus(201);
        })
        .catch(err => console.log(err))
}


// removes a house from the database.
const removeHouse = (req, res) => {
    let db = req.app.get("db")
    db.remove_house(req.params.id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
}

module.exports = {
    getHouses,
    addHouse,
    removeHouse
}