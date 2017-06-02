import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {BedModel} from '../models/bed.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class BedsService {

  private cfg: any;
  private nextid: number;
  private beds: any;

  constructor(
    private authHttp: AuthHttp) {

    this.cfg = AppConfig.cfg;
    this.nextid = 207;
    this.beds = {};
  }

  getAll() {
  /*
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.beds)
      .toPromise()
      .then(rs => {
        return rs.json();
      });
   */
     //return this.beds.json();
     let result = [];
     for (var id in this.beds) {
       result.push(this.beds[id]);
     };
     return result;
  }

  getOne(id: number) {
  /*
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.beds + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json().bed;
      });
  */
    return this.beds[id];
  }

  add(bed: BedModel) {
  /*
    return this.authHttp.post(this.cfg.apiUrl + this.cfg.beds, bed)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("create bed error", e));
  */
     bed.id = this.nextid++;
     this.beds[bed.id] = bed;
     return true;
   }

  update(bed: BedModel) {
  /*
    return this.authHttp.put(this.cfg.apiUrl + this.cfg.beds + '/' + bed.id, bed)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("update bed error", e));
  */
     this.beds[bed.id] = bed;
     return bed;
  }

  remove(id: number) {
  /*
    return this.authHttp.delete(this.cfg.apiUrl + this.cfg.beds + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("delete bed error", e));
  */
    let bed = this.beds[id];
    delete this.beds[id];
    return bed;
  }
}
