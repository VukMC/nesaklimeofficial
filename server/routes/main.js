const express = require('express');
const router = express.Router();
const narudzbine = require('../models/narudzbine');

// Routes
router.get('', (req, res) => {
    res.render('index'); 
});

router.get('/about', (req, res) => {
    res.render('about'); 
});

router.get('/katalog', (req, res) => {
    res.render('katalog'); 
});

//---------------------Klime------------------------
router.get('/gree-pular-12k', (req, res) => {
    res.render('klime/gree-pular-12k'); 
});

router.get('/gree-clivia-ai-12k', (req, res) => {
    res.render('klime/gree-clivia-ai-12k'); 
});

router.get('/gree-clivia-Ai-12k-black', (req, res) => {
    res.render('klime/gree-clivia-ai-12k-black'); 
});

router.get('/gree-amber-pro-12k', (req, res) => {
    res.render('klime/gree-amber-pro-12k'); 
});

router.get('/bergen-kron-smart-12k', (req, res) => {
    res.render('klime/bergen-kron-smart-12k'); 
});

router.get('/bergen-kron-smart-12k-black', (req, res) => {
    res.render('klime/bergen-kron-smart-12k-black'); 
});

router.get('/bergen-apollo-t-12k', (req, res) => {
    res.render('klime/bergen-apollo-t-12k'); 
});

//----------------Poruci Klime-----------------------
router.get('/poruci-gree-pular-12k', (req, res) => {
    res.render('poruci-klimu/poruci-gree-pular-12k'); 
});

router.get('/poruci-gree-clivia-ai-12k', (req, res) => {
    res.render('poruci-klimu/poruci-gree-clivia-ai-12k'); 
});

router.get('/poruci-clivia-Ai-12k-black', (req, res) => {
    res.render('poruci-klimu/poruci-clivia-Ai-12k-black'); 
});

router.get('/poruci-amber-pro-12k', (req, res) => {
    res.render('poruci-klimu/poruci-amber-pro-12k'); 
});

router.get('/poruci-kron-smart-12k', (req, res) => {
    res.render('poruci-klimu/poruci-kron-smart-12k'); 
});

router.get('/poruci-kron-smart-12k-black', (req, res) => {
    res.render('poruci-klimu/poruci-kron-smart-12k-black'); 
});

router.get('/poruci-apollo-t-12k', (req, res) => {
    res.render('poruci-klimu/poruci-apollo-t-12k'); 
});

//------------Updejtuj porudzbinu u bazu podataka--------
router.post('/poruci-gree-pular-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            grad: req.body.grad,
            mesto: req.body.mesto,
            ulica: req.body.ulica,
            klima: "Gree Pular 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/poruci-amber-pro-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            grad: req.body.grad,
            mesto: req.body.mesto,
            ulica: req.body.ulica,
            klima: "Gree Amber Pro 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/poruci-bergen-apollo-t-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            grad: req.body.grad,
            mesto: req.body.mesto,
            ulica: req.body.ulica,
            klima: "Bergen Apollo T 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/poruci-gree-clivia-ai-12k-black', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            grad: req.body.grad,
            mesto: req.body.mesto,
            ulica: req.body.ulica,
            klima: "Gree Clivia Ai 12k Black"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/poruci-gree-clivia-ai-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            grad: req.body.grad,
            mesto: req.body.mesto,
            ulica: req.body.ulica,
            klima: "Gree Clivia Ai 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/poruci-kron-smart-12k', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            grad: req.body.grad,
            mesto: req.body.mesto,
            ulica: req.body.ulica,
            klima: "Bergen Kron Smart 12k"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

router.post('/poruci-bergen-kron-smart-12k-black', async(req, res) => {
    try {
        const novaPorudzbina = new narudzbine({
            ime: req.body.ime,
            prezime: req.body.prezime,
            telefon: req.body.telefon,
            grad: req.body.grad,
            mesto: req.body.mesto,
            ulica: req.body.ulica,
            klima: "Bergen Kron Smart 12k Black"
        });

        await narudzbine.create(novaPorudzbina);
        res.redirect('/uspesna-porudzbina')
    } catch(error) {

    }
});

module.exports = router;

//---------bezkorisni-primeri-----------------------

//---------------ubacuje-narudzbine-u-db------------
    // function ubaciNarudzbinuUDB() {
    //     narudzbine.insertMany([
    //         {
    //             ime: "Vuk",
    //             prezime: "Mudrinic",
    //             telefon: "0615566989",
    //             grad: "Novi Sad",
    //             mesto: "Liman 2",
    //             ulica: "Resavska 4",
    //             postanski: "21000",
    //         },
    //         {
    //             ime: "Nebojsa",
    //             prezime: "Jovanovic",
    //             telefon: "0615566989",
    //             grad: "Novi Sad",
    //             mesto: "Podbara",
    //             ulica: "Patrijarha Carnojevica 5",
    //             postanski: "21000",
    //         },
    //     ])
    // }
    // ubaciNarudzbinuUDB();