import { BASE_URL } from "./db-profile";

export let arreyData;

export default async function getData(path, objValue) {
    try {
        const apiIrl = BASE_URL[objValue];
        const res = await fetch(`${apiIrl}/${path}`);
        const data = await res.json();
        arreyData = data;
        return arreyData;
    } catch(error) {
        console.error(error);
    }
}

// getData("notebook");