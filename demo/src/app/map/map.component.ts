import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { MapService } from './map.service';
import { Mapstyle, StandardMapStyle } from './mapstyle';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, skip, delay } from 'rxjs/operators';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  public lat: number = 47.408962;
  public lng: number = 8.547644;
  public zoom = 19;
  public markerLastLocation: any;
  public map: any;
  public marker: any;
  public infowindow: any;
  public geocode:any;
  private initLat: number = 47.408962;
  private initLng: number = 8.547644;

  private unsubscribe$ = new Subject();

  constructor(
    private mapsApiLoader: MapsAPILoader,
    private mapService: MapService,
    private translate: TranslateService
  ) {
    combineLatest(this.mapService.sourceMapsChangeEmitted$)
    .pipe(
      takeUntil(this.unsubscribe$)
      )
    .subscribe((res) => {
      const data:any = res[0];
        this.lat = Number(data[0]) || this.initLat;
        this.lng =  Number(data[1]) || this.initLng;
        this.setMarkerMap([this.lat, this.lng]);
      this.mapService.updateDraggableMarkerActivation(false);
    });
    this.mapService.markerDragActivEmitted$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((state) => {
        if (this.marker) {
          this.marker.setDraggable(state);
        }
    });
  }
  ngOnInit() {
    this.initGooglemaps();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  private initGooglemaps() {
    this.mapsApiLoader.load().then(() => {
      console.log(document.getElementById('googleMap'))
      this.map = new google.maps.Map(document.getElementById('googleMap') as HTMLElement, {
        center: { lat: this.lat, lng: this.lng },
        zoom: this.zoom,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.LEFT_BOTTOM,
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
        },
        scrollwheel: false,
        // @ts-ignore mapId in beta
        mapId: '28120f873247615c', //90f87356969d889c
        //useStaticMap : true 
      });

      const icon = {
        url: ('./assets/img/marker.png')
      };
      this.marker = new google.maps.Marker(<any>{
        icon,
        map: this.map,
        draggable: false,
      });
      this.mapService.startMapsAPI(this.map);
      this.infowindow = new google.maps.InfoWindow();
      const styled_Map = new google.maps.StyledMapType(StandardMapStyle);
      this.map.mapTypes.set('styled_map', styled_Map);
      this.setMarkerMap([this.lat, this.lng]);
    });
  }
  private setMarkerMap(data:any) {
    this.markerLastLocation = data;
    this.mapService.map.setMapTypeId('satellite');
    this.mapService.map.setCenter({ lat: Number(this.markerLastLocation[0]), lng: Number(this.markerLastLocation[1]) });
    this.mapService.map.setZoom(19);
    this.marker.setPosition({ lat: Number(this.markerLastLocation[0]), lng: Number(this.markerLastLocation[1]) });
    this.marker.setAnimation(google.maps.Animation.DROP);
    this.geocode = new google.maps.Geocoder();
    this.infowindow = new google.maps.InfoWindow({ pixelOffset: new google.maps.Size(0, -60) });

    google.maps.event.addListener(this.marker, 'dragend', () => {
      this.geocode.geocode({
        latLng: this.marker.getPosition()
      }, (responses:any) => {
        if (responses && responses.length > 0) {
          const filteredResponse = responses.filter((el: { types: any[]; }) => el.types[0] === 'street_address');
          if (filteredResponse[0]) {
            this.mapService.sendMarkerDragAddress(filteredResponse[0].formatted_address);
            this.infowindow.setContent(
              `<div id="iw-container">
                <div class="iw-title">
                  ${this.translate.instant('GENERIC.ADDRESS')}
                </div>
                <div class="iw-content">
                    <b>${filteredResponse[0] ? filteredResponse[0].formatted_address : this.translate.instant('GENERIC.NOADDRESS')}</b>
                </div>
              </div>`);
          }
        } else {
          this.infowindow.setContent(
            `<div id="iw-container">
            <div class="iw-title">${this.translate.instant('GENERIC.ADDRESS')}</div>
                <div class="iw-content">
                    <b>${this.translate.instant('GENERIC.NOADDRESS')}</b>
                </div>
            </div>`);
        }
      });
      this.infowindow.setPosition(this.marker.getPosition());
      this.infowindow.open(this.mapService.map);
      setTimeout(() => {
        this.infowindow.close();
      }, 3000);
    });
  }
}
