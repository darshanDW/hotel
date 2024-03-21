const express = require('express');
const router = express.Router();
const person = require('./../model/person');

const { model, models } = require('mongoose');
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;
        if (['chef', 'manager', 'waiter'].includes(worktype)) {
            const response = await person.find({ work: worktype });
            console.log('Data fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const upersondata = req.body;
        const response = await person.findByIdAndUpdate(personid, upersondata, {
            new: true,
            runValidators: true,
        });
        if (!response) {
            return res.status(404).json(
                { error: 'persosn not found' }
            );
        }
        console.log('Data updated');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}




)
router.delete('/:id', async (req, res) => {
    try {
        const personid = req.params.id;

        const response = await person.findByIdAndDelete(personid);
        if (!response) {
            return res.status(404).json(
                { error: 'persosn not found' }
            );
        }
        console.log('Data deleted');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}




)
module.exports = router;
