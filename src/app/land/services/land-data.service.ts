import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Land } from '../store/state/land.model';

@Injectable({
    providedIn: 'root',
})
export class LandService {
    constructor(private http: HttpClient) {}

    public getLands() : Observable<any> {
        return this.http.get(`/api/lands`)
    }

    public addLand (land: Land)  : Observable<any>{
        return this.http.post(`/api/land`, land);
    }

    public updateLandName (landId: number, landName: string) : Observable<any> {
        return this.http.patch(`/api/land`,{
            landId: landId,
            landName: landName
        })
    }

    public deleteLand (landId: number) : Observable<any>{
        const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
            body: {
                landId: landId
            }
          }
        return this.http.delete(`/api/land`,options);
    }
}