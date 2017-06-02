webpackJsonp([4],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bed_add_page__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BedAddPageModule", function() { return BedAddPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BedAddPageModule = (function () {
    function BedAddPageModule() {
    }
    return BedAddPageModule;
}());
BedAddPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bed_add_page__["a" /* BedAddPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bed_add_page__["a" /* BedAddPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__bed_add_page__["a" /* BedAddPage */]
        ]
    })
], BedAddPageModule);

//# sourceMappingURL=bed-add-page.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectedPage; });
var ProtectedPage = (function () {
    function ProtectedPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ProtectedPage.prototype.ionViewCanEnter = function () {
        this.storage.get('id_token').then(function (id_token) {
            if (id_token === null) {
                // this.navCtrl.setRoot('LoginPage');
                // return false;
                return true;
            }
        });
        return true;
    };
    return ProtectedPage;
}());

//# sourceMappingURL=protected-page.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_beds_service__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedAddPage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BedAddPage = (function (_super) {
    __extends(BedAddPage, _super);
    function BedAddPage(navCtrl, navParams, menuCtrl, storage, formBuilder, bedsService) {
        var _this = _super.call(this, navCtrl, navParams, storage) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.menuCtrl = menuCtrl;
        _this.storage = storage;
        _this.formBuilder = formBuilder;
        _this.bedsService = bedsService;
        _this.bedData = _this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
            bed_location: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
            beds_in_room: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
        });
        return _this;
    }
    BedAddPage.prototype.process = function () {
        this.bedsService.add(this.bedData.value);
        this.navCtrl.push('BedsPage');
        /* this.bedsService.add(this.bedData.value)
          .then(() => this.navCtrl.push('BedsPage'))
          .catch((e) => console.log("add bed error", e)); */
    };
    return BedAddPage;
}(__WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__["a" /* ProtectedPage */]));
BedAddPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bed-add-page',template:/*ion-inline-start:"/home/thiers/Projects/ionic-bedweter/src/pages/bed-add-page/bed-add-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n    <ion-title>{{ \'page.beds.add\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row justify-content-around>\n      <ion-col col-sm-6 col-md-6 col-lg-4 col-xl-3  align-self-center>\n        <form [formGroup]="bedData" (ngSubmit)="process()">\n          <ion-item>\n            <ion-label floating>{{ \'label.title\' | translate }}:</ion-label>\n            <ion-input type="text" formControlName="title"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label floating>{{ \'label.bed_location\' | translate }}:</ion-label>\n            <ion-input type="text" formControlName="bed_location"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label floating>{{ \'label.beds_in_room\' | translate }}:</ion-label>\n            <ion-input type="number" formControlName="beds_in_room"></ion-input>\n          </ion-item>\n          \n\n          <button margin-top ion-button type="submit" [disabled]="!bedData.valid">{{ \'button.submit\' | translate }}</button>\n\n        </form>\n        \n      </ion-col>\n\n    </ion-row>\n    \n    \n    \n  </ion-grid>  \n  \n</ion-content>\n'/*ion-inline-end:"/home/thiers/Projects/ionic-bedweter/src/pages/bed-add-page/bed-add-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__providers_beds_service__["a" /* BedsService */]])
], BedAddPage);

//# sourceMappingURL=bed-add-page.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map