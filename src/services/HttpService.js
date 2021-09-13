class HttpService {

    baseurl = "http://api.openweathermap.org/data/2.5/weather?q=";
    baseicon = "http://openweathermap.org/img/wn/";
    apikey ="&appid=f44e947afc6c0878ed4463a841db0599&units=metric&lang=fr";


    async get(path){
        return fetch(`${this.baseurl}${path}${this.apikey}`)
        .then(res=>res.json())
    }

}

export const httpService = Object.freeze(new HttpService());