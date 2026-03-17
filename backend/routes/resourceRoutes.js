const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getResourceCards, createResourceCard, updateResourceCard, deleteResourceCard } = require('../controllers/resourceController');

router.get('/', getResourceCards);
router.post('/', auth, createResourceCard);
router.put('/:id', auth, updateResourceCard);
router.delete('/:id', auth, deleteResourceCard);

module.exports = router;
