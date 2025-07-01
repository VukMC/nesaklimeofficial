const express = require('express');
const router = express.Router();
const narudzbine = require('../models/narudzbine');
const profil = require('../models/profil');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/admin';
const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json( { message: 'Ulogujte se na nesaklime.com/admin' } );
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch(error) {
        res.status(401).json( { message: 'Ulogujte se da biste pristupili stranici, na nesaklime.com/admin' } );
    }
}

router.get('/admin', async (req, res) => {
    try {
        res.render('admin/index', { layout: adminLayout });
    } catch(error) {
        console.log(error)
    }
});

router.get('/narudzbine', authMiddleware, async (req, res) => {
    try {
        const data = await narudzbine.find();
        res.render('admin/admin', { data, layout: adminLayout });
    } catch(error) {
        console.log(error)
    }
});

router.get('/admin/home', authMiddleware, async (req, res) => {
    try {
        res.render('admin/home', { layout: adminLayout });
    } catch(error) {
        console.log(error)
    }
});

router.get('/admin/about', authMiddleware, async (req, res) => {
    try {
        res.render('admin/about', { layout: adminLayout });
    } catch(error) {
        console.log(error)
    }
});

router.get('/admin/katalog', authMiddleware, async (req, res) => {
    try {
        res.render('admin/katalog', { layout: adminLayout });
    } catch(error) {
        console.log(error)
    }
});

router.get('/narudzbina/:id', authMiddleware, async(req, res) => {
    try {
        let slug = req.params.id;

        const data = await narudzbine.findById( { _id: slug } );
        res.render('admin/narudzbina', { data, layout: adminLayout});
    } catch(error) {
        console.log(error);
    }
});

//------------Chech Log In---------------
router.post('/admin', async(req, res) => {
    try {
        const { username, password } = req.body;

        const user = await profil.findOne( { username } );

        if(!user) {
            return res.status(401).json( { message: 'Pogresno ime/lozinka' } );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return res.status(401).json( { message: 'Pogresno ime/lozinka' } );
        }

        const token = jwt.sign({ userId: user._id }, jwtSecret);
        res.cookie('token', token, { httpOnly: true });

        res.redirect('/narudzbine')
    } catch (error) {
        console.log(error);
    }
});

//---------------Admin Logout------------------
router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

//-------------Register-------------------

router.post('/register', async(req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await profil.create({ username, password: hashedPassword });
            res.status(201).json({ message: 'User Created', user });
        } catch (error) {
            if(error.code === 11000) {
                res.status(400).json({ message: 'User already in use' });
            }
            res.status(500).json({ message: 'Internal server error' });
        }
    } catch (error) {
        console.log(error);
    }
});

//--------------------klime-admin---------------------
router.get('/admin/gree-pular-12k', (req, res) => {
    res.render('admin/klime/gree-pular-12k', { layout: adminLayout }); 
});

router.get('/admin/gree-clivia-ai-12k', (req, res) => {
    res.render('admin/klime/gree-clivia-ai-12k', { layout: adminLayout }); 
});

router.get('/admin/gree-clivia-Ai-12k-black', (req, res) => {
    res.render('admin/klime/gree-clivia-ai-12k-black', { layout: adminLayout }); 
});

router.get('/admin/gree-amber-pro-12k', (req, res) => {
    res.render('admin/klime/gree-amber-pro-12k', { layout: adminLayout }); 
});

router.get('/admin/bergen-kron-smart-12k', (req, res) => {
    res.render('admin/klime/bergen-kron-smart-12k', { layout: adminLayout }); 
});

router.get('/admin/bergen-kron-smart-12k-black', (req, res) => {
    res.render('admin/klime/bergen-kron-smart-12k-black', { layout: adminLayout }); 
});

router.get('/admin/bergen-apollo-t-12k', (req, res) => {
    res.render('admin/klime/bergen-apollo-t-12k', { layout: adminLayout }); 
});

//----------------poruci-klime-admin---------------
router.get('/admin/poruci-gree-pular-12k', (req, res) => {
    res.render('admin/poruci-klimu/poruci-gree-pular-12k', { layout: adminLayout }); 
});

router.get('/admin/poruci-gree-clivia-ai-12k', (req, res) => {
    res.render('admin/poruci-klimu/poruci-gree-clivia-ai-12k', { layout: adminLayout }); 
});

router.get('/admin/poruci-clivia-Ai-12k-black', (req, res) => {
    res.render('admin/poruci-klimu/poruci-clivia-Ai-12k-black', { layout: adminLayout }); 
});

router.get('/admin/poruci-amber-pro-12k', (req, res) => {
    res.render('admin/poruci-klimu/poruci-amber-pro-12k', { layout: adminLayout }); 
});

router.get('/admin/poruci-kron-smart-12k', (req, res) => {
    res.render('admin/poruci-klimu/poruci-kron-smart-12k', { layout: adminLayout }); 
});

router.get('/admin/poruci-kron-smart-12k-black', (req, res) => {
    res.render('admin/poruci-klimu/poruci-kron-smart-12k-black', { layout: adminLayout }); 
});

router.get('/admin/poruci-apollo-t-12k', (req, res) => {
    res.render('admin/poruci-klimu/poruci-apollo-t-12k', { layout: adminLayout }); 
});

//------------------------poruci-konacno-admin----------------
router.post('/admin/poruci-gree-pular-12k', async(req, res) => {
    res.redirect('/admin/uspesna-porudzbina');
});

router.post('/admin/poruci-amber-pro-12k', async(req, res) => {
    res.redirect('/admin/uspesna-porudzbina');
});

router.post('/admin/poruci-bergen-apollo-t-12k', async(req, res) => {
    res.redirect('/admin/uspesna-porudzbina');
});

router.post('/admin/poruci-gree-clivia-ai-12k-black', async(req, res) => {
    res.redirect('/admin/uspesna-porudzbina');
});

router.post('/admin/poruci-gree-clivia-ai-12k', async(req, res) => {
        res.redirect('/admin/uspesna-porudzbina');
});

router.post('/admin/poruci-kron-smart-12k', async(req, res) => {
        res.redirect('/admin/uspesna-porudzbina');
});

router.post('/admin/poruci-bergen-kron-smart-12k-black', async(req, res) => {
        res.redirect('/admin/uspesna-porudzbina');
});

module.exports = router;