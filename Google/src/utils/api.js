import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: 'AIzaSyCSHI-SgjDuiPj-L5mtaXd0O04gIOffWGU',
    cx: 'd7a6a1129f5ff4719',
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};