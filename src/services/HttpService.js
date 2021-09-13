class HttpService {

    baseurl = "http://api.openweathermap.org/data/2.5/weather?q=";
    baseicon = "http://openweathermap.org/img/wn/"
    apikey ="&appid=f44e947afc6c0878ed4463a841db0599&units=metric&lang=fr"
    headers= {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    async getIcon(path){
        return fetch(`${this.baseicon}${path}@2x.png`/*, {headers:this.headers}*/)
        .then(res=>res.json())
    }

    async get(path){
        return fetch(`${this.baseurl}${path}${this.apikey}`/*, {headers:this.headers}*/)
        .then(res=>res.json())
    }

    async post(path, body){
        return fetch(`${this.baseurl}/${path}`, {method:"POST", body:JSON.stringify(body), headers:this.headers})
        .then(res=>res.json())
    }

    async put(path, body){
        return fetch(`${this.baseurl}/${path}`, {method:"PUT", body:JSON.stringify(body), headers:this.headers})
        .then(res=>res.json())
    }

    async delete(path){
        return fetch(`${this.baseurl}/${path}`, {method:"DELETE", headers:this.headers})
        .then(res=>res.json())
    }
}

export const httpService = Object.freeze(new HttpService());