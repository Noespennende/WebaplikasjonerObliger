import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import {readFile} from 'node:fs/promises'

const app = new Hono()

app.use("/*", cors()) //Filter for å si hvem som kan gå på servere. /* betyr alle har lov

app.use("/statics/*", serveStatic({ root: "./" }));

app.get('/json', async (c) => {
    const data = await readFile("./jsonData/database.json", "utf-8")
    return c.json(JSON.parse(data))
}) //Definerer hvilken URL vi henter info fra. I dette tilfellet localhost3999/json

const port = 3999 //Definerer porten til serveren

console.log("Server is running!")

serve({
    fetch: app.fetch,
    port
}) //Serveren starter i hono med den gitte porten (3999)


