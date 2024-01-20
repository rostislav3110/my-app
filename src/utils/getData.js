import { BASE_URL } from "./db-profile";

export let arreyData;

export default async function getData(path) {
    try {
        const res = await fetch(`${BASE_URL}/${path}`);
        const data = await res.json();
        arreyData = data;
        return arreyData;
    } catch(error) {
        console.error(error);
    }
}

// getData("notebook");