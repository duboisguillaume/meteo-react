import { httpService } from "./HttpService";

class MeteoService {

    async find(ville){
        return httpService.get(ville);
    }

    async findIcon(icon){
        return httpService.getIcon(icon);
    }

}

export const meteoService = Object.freeze(new MeteoService());