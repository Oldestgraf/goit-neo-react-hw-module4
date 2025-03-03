import axios from "axios";

const ACCESS_KEY = "DxYBlkA5Bj1CqFrblq34DtC9rK0Zv4V4CWUDv8eWfOE";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchPhotos = async (keyWord, page = 1) => {
    const response = await axios.get("search/photos", {
        params: {
            query: keyWord,
            page,
            per_page: 12,
            client_id: ACCESS_KEY,

        },
    });
    return response.data;
};

