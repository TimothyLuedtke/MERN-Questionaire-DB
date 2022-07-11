// create Questions model routes
const express = require("express");
const router = express.Router();

// controllers
const {
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionsByFinanceCategory
} = require("../controllers/questions");


router.route("/questionbyfinancecategory/:category").get(getQuestionsByFinanceCategory);

router.route("/question/:id").get(getQuestionById);

router.route("/createquestion").post(createQuestion);

router.route("/updatequestion/:id").put(updateQuestion);

router.route("/deletequestion/:id").delete(deleteQuestion);

module.exports = router;