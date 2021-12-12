import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map!: google.maps.Map;
  public sourceMaps = new Subject<Object>();
  public sourceMapsChangeEmitted$ = this.sourceMaps.asObservable();
  public markerDrag = new Subject<any>();
  public markerDragChangeEmitted$ = this.markerDrag.asObservable();
  public mapBadgeNotifier = new BehaviorSubject<boolean>(false);
  public mapBadgeNotifierEmitted$ = this.mapBadgeNotifier.asObservable();
  private markerDragActiv = new BehaviorSubject<boolean>(false);
  public markerDragActivEmitted$ = this.markerDragActiv.asObservable();

  constructor(public mapsAPILoader: MapsAPILoader) { }

  public startMapsAPI(map: any) {
    this.map = map;
    this.sourceMaps.next(this.map);
  }
  public notifyMapChangeBadgeSend(state: boolean) {
    this.mapBadgeNotifier.next(state);
  }
  public sendMarkerDragAddress(newaddress: string) {
    this.markerDrag.next(newaddress);
  }
  public updateDraggableMarkerActivation(active: boolean) {
    this.markerDragActiv.next(active);
  }
}
