const express = require('express');
const router = express.Router();
const uspesnoLayout = '../views/layouts/uspesno';

//-----------uspesna porudzbina--------------------------
router.get('/uspesna-porudzbina', (req, res) => {
    res.render('uspesno/uspesna_kupovina', { layout: uspesnoLayout });
});

router.get('/admin/uspesna-porudzbina', (req, res) => {
    res.render('uspesno/admin_uspesna_kupovina', { layout: uspesnoLayout });
});

module.exports = router;