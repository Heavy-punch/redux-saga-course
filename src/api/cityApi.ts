import { City, ListResponse } from "models";
import axiosClient from "./axiosClient";

const cityApi = {
    getAll():Promise<ListResponse<City>>{
        const url = '/cities';
        const params = {
            _page:1,
            _limit:10,
        }
        return axiosClient.get(url,{params:params});
    }
}
export default cityApi;