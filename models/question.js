// create Question model

const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: false
    },
    financeCategory: {
        type: String, // category of question
        enum: ["Cash", "Conventional", "FHA", "VA", "USDA"],
        required: false
    },

});

export const Question = mongoose.model("Question", questionSchema);