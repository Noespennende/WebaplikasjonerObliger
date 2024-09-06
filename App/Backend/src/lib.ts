import {readFile, writeFile} from "node:fs/promises"
import {project} from "../../Types"

export async function getProjectData(){
    const data = await readFile('./jsonData/projectData.json', 'utf-8')
    const parsedData = JSON.parse(data)
    return parsedData  
}


export async function updateProjectData(updatedData: project){
    await writeFile('./jsonData/projectData.json', JSON.stringify(updatedData))
}

