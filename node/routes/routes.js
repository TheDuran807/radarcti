import express from 'express'
import { getAllRegister } from '../controllers/Registroscontroller.js'
const router= express.Router()

router.get('/',getAllRegister)


export default router
