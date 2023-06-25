import { Owner } from '../../_interfaces/owner.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OwnerRepositoryService {
  constructor(
    private http: HttpClient,
    private envUrl: EnvironmentUrlService
  ) {}

  public getOwners = (route: string) => {
    return this.http.get<Owner[]>(
      this.CreateCompleteRoute(route, this.envUrl.urlAddress)
    );
  };

  public getOwner = (route: string) => {
    return this.http.get<Owner>(
      this.CreateCompleteRoute(route, this.envUrl.urlAddress)
    );
  };

  public createOwner = (route: string, owner: Owner) => {
    return this.http.post<Owner>(
      this.CreateCompleteRoute(route, this.envUrl.urlAddress),
      owner,
      this.generateHeaders()
    );
  };

  public updateOwner = (route: string, owner: Owner) => {
    return this.http.put(
      this.CreateCompleteRoute(route, this.envUrl.urlAddress),
      owner,
      this.generateHeaders()
    );
  };

  public deleteOwner = (route: string) => {
    return this.http.delete(
      this.CreateCompleteRoute(route, this.envUrl.urlAddress)
    );
  };

  private CreateCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  };

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  };
}
