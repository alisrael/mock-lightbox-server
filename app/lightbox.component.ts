import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'fsc-lightbox',
    template: '<a href="{{returnUrl}}" target="FollettUniversalSearch">{{returnUrl}}</a>',
    inputs: ['returnUrl']
})

export class LightBoxComponent implements OnInit {
    public returnUrl: String;

    constructor(private _routeParams: RouteParams) {}

    ngOnInit() {
        this.returnUrl = decodeURIComponent(this._routeParams.get('returnUrl'));
        this.returnUrl = this.returnUrl + "&s=lightbox&q=dogs"
    }

}
