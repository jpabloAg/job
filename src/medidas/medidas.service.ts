import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';  

@Injectable()
export class MedidasService {
    constructor(private readonly _http:HttpService){}

    url:string = "http://autogeneradores-dllo.epm.com.co/datos-medidores?fecha="

    public getMedidas(date:string){
        return new Promise(resolve => {
            setTimeout(() => {
                this._http.get(this.url + date).subscribe(response => {
                    resolve(response.data);
                });
            },10000);
        });
    }
}
