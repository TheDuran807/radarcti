import express from 'express'
import { getAllRegisterhgo } from '../controllers/Registroscontrollerhgo.js'
const router= express.Router()

router.get('/',getAllRegisterhgo)


export default router
