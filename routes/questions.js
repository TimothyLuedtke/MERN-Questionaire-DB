// create Questions model routes
const express = require("express");
const router = express.Router();

// controllers
const {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionsByFinanceCategory
} = require("../controllers/questions");

router.route("/AllQuestions").get(getAllQuestions);

router.route("/QuestionByFinanceCategory/:category").get(getQuestionsByFinanceCategory);

router.route("/Question/:id").get(getQuestionById);

router.route("/createQuestion").post(createQuestion);

router.route("/updateQuestion/:id").put(updateQuestion);

router.route("/deleteQuestion/:id").delete(deleteQuestion);

module.exports = router;