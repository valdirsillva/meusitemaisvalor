import * as dotenv from 'dotenv'
import cors from 'cors';
import express from "express";
import { routerCandidate } from './router/candidate';
import { routerContact } from "./router/contact";
import { routerDepartments } from './router/department';
import { routerReport } from './router/report';
import { routerSuggestionOrDoubt } from './router/suggestion-or-doubt';
import { routerClient } from './router/client';
import { routerProduct } from './router/product';

dotenv.config()

const app = express()

app.use(cors({ origin: process.env.DOMAIN_ORIGIN }))

app.use(express.json())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use("/api", routerClient)
app.use("/api", routerReport)
app.use("/api", routerContact)
app.use("/api", routerProduct)

app.use("/api", routerCandidate)
app.use("/api", routerDepartments)
app.use("/api", routerSuggestionOrDoubt)

app.listen(process.env.APP_PORT || 8888, () => {
    console.log(`RUNNING ADDRESS: http://localhost:${process.env.APP_PORT}`)
})

