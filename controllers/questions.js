// create question controller

const Question = require("../models/question");

const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        res.status(200).json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createQuestion = async (req, res) => {
    try {
        const question = await Question.create(req.body);
        res.status(201).json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateQuestion = async (req, res) => {
    try {
        const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteQuestion = async (req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Question deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getQuestionsByFinanceCategory = async (req, res) => {
    try {
        const questions = await Question.find({ financeCategory: req.params.category });
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getQuestionsByFinanceCategoryAndQuestion = async (req, res) => {
    try {
        const questions = await Question.find({ financeCategory: req.params.category, question: req.params.question });
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getQuestionsByFinanceCategoryAndQuestionAndAnswer = async (req, res) => {
    try {
        const questions = await Question.find({ financeCategory: req.params.category, question: req.params.question, answer: req.params.answer });
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionsByFinanceCategory,
    getQuestionsByFinanceCategoryAndQuestion,
    getQuestionsByFinanceCategoryAndQuestionAndAnswer
}