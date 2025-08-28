import { Router } from 'express';

const router = new Router();

router.post('/posts');
router.get('/posts');
router.get('/posts/:id');
router.put('/posts');
router.delete('/posts/:id');

module.exports = router;