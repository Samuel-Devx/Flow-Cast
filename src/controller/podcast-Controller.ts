import {IncomingMessage, ServerResponse} from "http"
import * as service from "../service/podcast-Service"



export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await service.serviceListEpisodis(req, res)
    res.writeHead(200, {'Content-Type': "application/json"})
    res.end(JSON.stringify(content))
}


export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse) => {

    

    const content = await service.serviceFilterEpisodis(req.url ?? null)

    res.writeHead(200, {'Content-Type': "application/json"})
    res.end(JSON.stringify(content))
}
