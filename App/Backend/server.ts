import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import {readFile, writeFile} from 'node:fs/promises'

const app = new Hono()

app.use("/*", cors()) //Filter for å si hvem som kan gå på servere. /* betyr alle har lov

app.use("/statics/*", serveStatic({ root: "./" }));

app.get('/json', async (c) => {
    const data = await readFile("./jsonData/database.json", "utf-8")
    return c.json(JSON.parse(data))
}) //Definerer hvilken URL vi henter info fra. I dette tilfellet localhost3999/json



app.post('/submit', async (c) => {

    try {
    const data = await c.req.json();
    const jsonData = await readFile("./jsonData/database.json", "utf-8");
    await writeFile(
        "./jsonData/database.json",
        JSON.stringify([...JSON.parse(jsonData), data], null, 2)
);

    return c.json({ message: 'Data saved' });
} catch (error) {
    console.error("Could not write to file: " + error)
    return c.json({ message: 'Failed to save data to file' }, 500);
    }
}) //Post request for creating a new article in the data.json file. 


const port = 3999 //Definerer porten til serveren

console.log("Server is running!")

serve({
    fetch: app.fetch,
    port
}) //Serveren starter i hono med den gitte porten (3999)


