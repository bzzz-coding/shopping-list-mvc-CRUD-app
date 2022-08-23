const mongoose = require('mongoose');

const ShoppingListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
// The first parameter, is the name of the model to be referenced elsewhere (in controllers), not the name of the db
// The third parameter is optional, and names the collection, otherwise the collection name will be automatically assigned 
module.exports = mongoose.model('ShoppingList', ShoppingListSchema, 'items');

// find all distince values of a field:
// https://stackoverflow.com/questions/23273123/list-all-values-of-a-certain-field-in-mongodb