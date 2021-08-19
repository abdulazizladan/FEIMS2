import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SiteService } from "app/admin/services/site.service";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { addSite, addSiteFail, addSiteSuccess, loadSites, loadSitesFail, loadSitesSuccess } from "./site.actions";

@Injectable()
export class SiteEffect {

  addSite$ = createEffect(() => this.actions$.pipe(
    ofType(addSite),
    exhaustMap(({site}) => this.siteService.addSite(site).pipe(
        map(site => addSiteSuccess({site})),
        catchError(error => of(addSiteFail({reason: error})))
    ))
  ));

  loadBuildings$ = createEffect(() => this.actions$.pipe(
    ofType(loadSites),
    exhaustMap(() => this.siteService.getSites().pipe(
      map(sites => loadSitesSuccess({sites})),
      catchError(error => of(loadSitesFail({reason: error})))
    ))
  ));

  constructor(
    private actions$: Actions, 
    private siteService: SiteService
  ) {}
}