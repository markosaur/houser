module.exports={

getHouse: (req, res) => {
    console.log('are we there yet');
    
    const db = req.app.get('db')

    db.read_houses().then((houses)=>{ 
    console.dir(houses);

    res.status(200).send(houses)
    }).catch(err => console.log('Not get houses'));

},

createHouse: (req,res) => {
    console.log('where is my house')
    const db = req.app.get('db');
    console.log('how are you'); 
    const {name, address, city, state, zip} = req.body;
    console.log(req.body)   

    db.create_house([name, address, city, state, zip])
    .then(()=>
        res.sendStatus(200))
        .catch(err => {res.status(500).send({errorMessage : 'Something is really wrong, but have a nice day'})
            // console.log(err)

        });   
},

deleteHouse: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    dbInstance.delete_house(id)
    .then(() => res.sendStatus(200))
    .catch(err => {
        res.status(500).send({errorMessage: "It wasn't me"})
        console.log(err)
    })

}
}