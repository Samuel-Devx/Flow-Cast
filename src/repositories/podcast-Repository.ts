import fs from "fs"
import path from "path"
import { json } from "stream/consumers";
import { Podcast } from '../model/podcast-Model';




const pathData = path.join(__dirname,"../repositories/poscasts.json")


export const repositoryPodcast = async (podcastname ?: string): Promise<Podcast[]> =>{
    const rawData =  fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData)


    if(podcastname){
        jsonFile = jsonFile.filter(
            (podcast: Podcast) => podcast.podCastName === podcastname 
        );
    }

    return jsonFile;
}
