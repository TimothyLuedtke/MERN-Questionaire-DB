const Question = require("../models/question");


exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        res.status(200).json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createQuestion = async (req, res) => {
const question = new Question(req.body);
try {
    await question.save();
    res.status(201).json({
        status: "success",
        data: {
            question
    }
    });
} catch (err) {
    res.status(500).json({ 
        status: 'error',
        message: err.message
    });
}
}

exports.updateQuestion = async (req, res) => {
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

exports.deleteQuestion = async (req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Question deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getQuestionsByFinanceCategory = async (req, res) => {
    try {
        const questions = await Question.find({ financeCategory: req.params.category });
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getQuestionsByFinanceCategoryAndQuestion = async (req, res) => {
    try {
        const questions = await Question.find({ financeCategory: req.params.category, question: req.params.question });
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getQuestionsByFinanceCategoryAndQuestionAndAnswer = async (req, res) => {
    try {
        const questions = await Question.find({ financeCategory: req.params.category, question: req.params.question, answer: req.params.answer });
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
