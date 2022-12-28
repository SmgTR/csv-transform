import { sendCandidatesFile } from '@/controllers/candidatesController';
import { Router } from 'express';

const router = Router();

router.get('/candidates', sendCandidatesFile);

export default router;
