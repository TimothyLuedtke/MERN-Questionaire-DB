// create Question model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
    },
    description:[ 
    {
        type: String,
        required: false
    },
    // financeCategory: {
    //     type: String, // category of question
    //     enum: ["Cash", "Conventional", "FHA", "VA", "USDA"],
    //     required: false
    // },
]

});

module.exports = mongoose.model("Question", questionSchema);
