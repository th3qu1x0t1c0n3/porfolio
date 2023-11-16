/// <reference types="react-scripts" />
import axios from "axios";

export const environment = {
    production: false,
    cegep: "https://cegep.fdtt.space/v1/",
    dndAPI: "https://www.dnd5eapi.co/api/"
}

export const cegepInstance = axios.create({
    baseURL: environment.cegep,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    params: {}
})

export const dndInstance = axios.create({
    baseURL: environment.dndAPI,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    params: {}
})