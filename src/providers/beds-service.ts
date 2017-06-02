import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {BedModel} from '../models/bed.model';
import {BedPlaceModel} from '../models/bedplace.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class BedsService {

  private cfg: any;
  private nextid: number;
  private bedplaces: any;
  private beds: any;

  constructor(
    private authHttp: AuthHttp) {

    this.cfg = AppConfig.cfg;
    this.nextid = 207;
    this.bedplaces = this.getBedPlaces();
    this.beds = {};
    for (var bp_id in this.bedplaces) {
      this.beds[bp_id] = [];
    }
  }

  getBedPlaces_mockup() {
    return {
      1200: {
        "id": 1200,
        "user_id": 100,
        "name": "NUMC",
        "description": "Radboud Universitair Medisch Centrum",
        "key": "JJDKJDKJFFDKJ",
        "ipns_dir": "QMkjadfkjafkasdfkjdsafk"
      },
      1207: {
        "id": 1207,
        "user_id": 100,
        "name": "CWZ",
        "description": "Canisius Wilhelmina Ziekenhuis",
        "key": "JJDKJDKJFFDKJ",
        "ipns_dir": "QMkjadfkjafkasdfkjdsafk"
       }
    };
  }

  getBedPlaces() {
    return this.getBedPlaces_mockup();
  }

  getBeds(bp_id: number){
    if (!this.beds.hasOwnProperty(bp_id)) {
      this.beds[bp_id] = [];
    };
    console.log(this.beds[bp_id]);
    return this.beds[bp_id].values();
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

     var result = [];

     for (var bp of this.bedplaces) {
       result += this.getBeds(bp);
     };
     return result;
  }

  getOne(bp_id: number, id: number) {
  /*
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.beds + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json().bed;
      });
  */
    return this.beds[bp_id][id];
  }

  add(bp_id: number, bed: BedModel) {
  /*
    return this.authHttp.post(this.cfg.apiUrl + this.cfg.beds, bed)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("create bed error", e));
  */
     console.log(this.bedplaces)
     console.log(this.beds)
     bed.id = this.nextid++;
     this.beds[bp_id][bed.id] = bed;
     return true;
   }

  update(bp_id: number, bed: BedModel) {
  /*
    return this.authHttp.put(this.cfg.apiUrl + this.cfg.beds + '/' + bed.id, bed)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("update bed error", e));
  */
     this.beds[bp_id][bed.id] = bed;
     return bed;
  }

  remove(bp_id: number, id: number) {
  /*
    return this.authHttp.delete(this.cfg.apiUrl + this.cfg.beds + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("delete bed error", e));
  */

    let bed = this.beds[bp_id][id];
    delete this.beds[bp_id][id];
    return bed;
  }
}
