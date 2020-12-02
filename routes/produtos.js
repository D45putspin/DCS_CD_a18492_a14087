const express =  require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'usando o get para obter prods'
    });

});
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'usando o post para obter prods'
    });

});
module.exports = router;