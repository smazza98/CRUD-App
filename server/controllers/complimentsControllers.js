const asyncHandler = require("express-async-handler");
const Compliment = require("../models/complimentModel");

// @desc Get compliments
// @route GET/api/compliments
// @access Private
const getCompliment = asyncHandler(async (req, res) => {
    const compliments = await Compliment.find();

    res.status(200).json(compliments);
});

// @desc Set compliments
// @route POST/api/compliments
// @access Private
const setCompliment = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Add a text field");
    }

    const compliment = await Compliment.create({
        text: req.body.text,
    });

    res.status(200).json(compliment);
});

// @desc Update compliments
// @route PUT/api/compliments
// @access Private
const updateCompliment = asyncHandler(async (req, res) => {
    const compliment = await Compliment.findById(req.params.id);

    if (!compliment) {
        res.status(400);
        throw new Error("Compliment not found");
    }

    const updateCompliment = await Compliment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updateCompliment);
});

// @desc Delete compliments
// @route DELETE/api/compliments
// @access Private
const deleteCompliment = asyncHandler(async (req, res) => {
    const compliment = await Compliment.findById(req.params.id);

    if (!compliment) {
        res.status(400);
        throw new Error("Compliment not found");
    }

    await compliment.deleteOne();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getCompliment,
    setCompliment,
    updateCompliment,
    deleteCompliment,
};