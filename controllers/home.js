const shoppingList = require('../models/shoppinglist')


module.exports = {
    getIndex: async (req, res) => {
        try {
            const items = await shoppingList.find()
            res.render("index.ejs", { shoppingList: items })

        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },

    addItem: async (req, res) => {
        try{
            await shoppingList.create({
                title: req.body.title, 
                content: req.body.content
            })
            console.log('New item has been added!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }

}
