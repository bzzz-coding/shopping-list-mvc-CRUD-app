const shoppingList = require('../models/shoppinglist')

module.exports = {
    getEdit: (req, res) => {
        const id = req.params.id;
        shoppingList.find({}, (err, items) => {
            res.render("edit.ejs", { shoppingList: items, idOfItem: id });
        });
    },

    deleteItem: (req, res) => {
        const id = req.params.id;
        shoppingList.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    },
    updateItem: (req, res) => {
        const id = req.params.id;
        shoppingList.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                content: req.body.content
            },

            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/");
            });
    }
}

