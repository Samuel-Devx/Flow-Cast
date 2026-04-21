import {IncomingMessage, ServerResponse} from "http"
import { repositoryPodcast } from "../repositories/podcast-Repository"


export const serviceListEpisodis = async (req: IncomingMessage, res: ServerResponse) =>{
    const data = await repositoryPodcast()
    return data
}


export const serviceFilterEpisodis = async (podcastName: string | null) =>{

    const querySring = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(querySring)
    return data
}
