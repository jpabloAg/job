import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { MedidasService } from './medidas/medidas.service';

@Controller()
export class AppController {
  constructor(private readonly _medidas: MedidasService) {}

  @Get("medidas_time")
  getHello2() {
    var time = "";
    for(var hour = 0; hour < 24; hour++){
      for(var date = 0; date < 31; date++){
        var hour_format = hour.toString().length < 2 ? `0${hour}`:hour;
        var date_format = date.toString().length < 2 ? `0${date}`:date;
        time = `${hour_format}${date_format}082021`;
        this._medidas.getMedidas(time).then(x => console.log(x));
      }
    }
  }
}
