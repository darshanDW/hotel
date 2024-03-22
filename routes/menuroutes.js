const express = require('express');
const router = express.Router();
const menu = require('./../model/menu');
const { model, models } = require('mongoose');


router.post('/', async (req, res) => {
    try {
        const dat = req.body
        const newmenu = new menu(dat);
        const response = await newmenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal prolem' });
    }
})
router.get('/', async (req, res) => {
    try {

        const dat = await menu.find();

        console.log('data fetch');
        res.status(200).json(dat);


    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal prolem' });
    }
})
router.get('/:tastetype', async (req, res) => {
    try {

        const tastetype = req.params.tastetype;
        if (tastetype == 'spice' || tastetype == 'sour' || tastetype == 'sweet') {
            const dat = await menu.find({ taste: tastetype });
            console.log('data fetch');
            res.status(200).json(dat);
        }
        else {
            res.status(404).json({ error: 'Invalid taste type' });

        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal prolem' });
    }
})
module.exports = router;