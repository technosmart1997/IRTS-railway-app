import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class GetDataProvider {

officers : any;
  url : string = 'http://localhost/angularmysql/';
  constructor(public http: Http) {
    console.log('Hello GetDataProvider Provider');
  }

  getByZone(zone){
    // console.log(zone);
        return this.http.post('http://localhost:3000/api/getZone', zone).map(res => res.json());
    }

  getByGrade(grade){
      return this.http.post('http://localhost:3000/api/getGrade', grade).map(res => res.json());
  }  

  getByBatch(batch){
    // console.log(batch);
    return this.http.post('http://localhost:3000/api/getBatch', batch).map(res => res.json());
}  
getByPost(post){
  // console.log(post);
  return this.http.post('http://localhost:3000/api/getPostedAt', post).map(res => res.json());
}  

postUser(user){
  // console.log(user);
  return this.http.post('http://localhost:3000/api/postUser', user).map(res => res.json());
}

getUser(user){
  console.log(user);
  return this.http.post('http://localhost:3000/api/getUser', user).map(res => res.json());
}


}
