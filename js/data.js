import {renderAlert} from './utils/alerts.js';

export const fetchData = async () => {
    try {
        const res = await fetch('../json-data/state-capitals.json');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        renderAlert("alertDanger", "Something went wrong...");
    }
}