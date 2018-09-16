(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular/angular.component.css":
/*!***********************************************!*\
  !*** ./src/app/angular/angular.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\r\n    border: solid black 2px;\r\n    border-collapse: collapse;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/angular/angular.component.html":
/*!************************************************!*\
  !*** ./src/app/angular/angular.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'home'\">\n  <h3>Angular là gì?</h3>\n  <p>\n    <img src=\"https://angular.io/assets/images/logos/angular/angular.svg\" alt=\"Angular\" [ngStyle]=\"img\">\n    Angular là một Javascript flatform được xây dụng và phát triển bởi Google.\n    Platform này giúp xây dựng ứng dụng web nhanh chóng và dễ dàng. Với tính năng\n    tự động reload browser khi code có sự thay đổi, tự động unify và build project bằng lệnh.\n    Angular sử dụng Typescript thay cho Javascript và LESS hay SASS thay cho CSS.\n    Những điều này giúp cho code có tính chặt chẽ cao hơn và ngắn gọn hơn.\n  </p>\n  <p>\n    Một tính năng vô cùng quan trọng làm cho Angular khác biệt so với JQuery là quản lý các view theo các state -\n    thay đổi giao diện theo trạng thái ứng dụng. Điều này giúp tránh được các lỗi logic khi trong quá trình viết code,\n    đặc biệt trong các dự án lớn và phức tạp. Angular 6 là phiên bản mới nhất của platform này.\n  </p>\n  <h3>Component trong Angular</h3>\n  <p>\n    Một component có thể điều chỉnh một phần hiển thị ra của màn hình. Sử dụng component mang lại các lợi ích như dễ\n    dàng quản lý hay tái sử dụng các code.\n    Các component có các đặc tính như sau:\n  </p>\n  <ul>\n    <li>\n      Một component có thể chứa một hoặc nhiều các thẻ HTML\n    </li>\n    <li>\n      Các component có thể bao chứa lẫn nhau\n    </li>\n    <li>\n      Có tính tái sử dụng cao khi truyền vào các giá trị input\n    </li>\n    <li>\n      Component rất linh hoạt khi có thể thay đổi các trạng thái hiển thị của nó.\n    </li>\n  </ul>\n  <h3>Ví dụ về sử dụng Angular</h3>\n  <button (click)=\"show = !show\">Ẩn/hiện bảng nhân viên</button><br><br>\n  <table style=\"width: 100%;\" *ngIf=\"show\">\n    <tr>\n      <th>STT</th>\n      <th>Tên nhân viên</th>\n      <th>Giới tính</th>\n      <th>Email</th>\n      <th>Số điện thoại</th>\n      <th>Xóa</th>\n    </tr>\n    <tr *ngFor=\"let NV of danhSachNV\">\n      <td> {{NV.id}} </td>\n      <td> {{NV.name}} </td>\n      <td> {{NV.gender}} </td>\n      <td> {{NV.email}} </td>\n      <td> {{NV.phone}} </td>\n      <td><button (click)=\"delNV(NV.id)\">Xóa</button></td>\n    </tr>\n  </table>\n  <h4>Thêm nhân viên</h4>\n  <input placeholder=\"Tên nhân viên\" [(ngModel)]=\"name\" name=\"tenNV\"><br>\n  <input placeholder=\"Giới tính\" [(ngModel)]=\"gender\" name=\"gioitinh\"><br>\n  <input placeholder=\"Email nhân viên\" [(ngModel)]=\"email\" name=\"email\"><br>\n  <input placeholder=\"Số điện thoại\" [(ngModel)]=\"phone\" name=\"sdt\"><br>\n  <button (click)=\"addNV()\">Thêm nhân viên</button>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/angular/angular.component.ts":
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AngularComponent = /** @class */ (function () {
    function AngularComponent() {
        this.img = {
            'width': '200px',
            'height': '170px',
            'float': 'left',
            'margin-right': '20px'
        };
        this.show = true;
        this.name = '';
        this.gender = '';
        this.email = '';
        this.phone = '';
        this.danhSachNV = [
            { id: 1, name: 'Nguyễn Văn A', gender: 'Nam', email: 'nva@gmail.com', phone: '0123456789' },
            { id: 2, name: 'Trần Văn B', gender: 'Nam', email: 'tvb@yahoo.com', phone: '0123222789' },
            { id: 3, name: 'Bùi Thị C', gender: 'Nữ', email: 'btc@hotmail.com', phone: '0123333789' },
            { id: 4, name: 'Huỳnh Văn D', gender: 'Nam', email: 'hvd@gmail.com', phone: '0123444789' },
            { id: 5, name: 'Lý Thị E', gender: 'Nữ', email: 'lte@gmail.com', phone: '0123555789' },
            { id: 6, name: 'Nguyễn Thị G', gender: 'Nữ', email: 'ntg@yahoo.com', phone: '0123666789' },
            { id: 7, name: 'Ngô Minh H', gender: 'Nam', email: 'nmh@gmail.com', phone: '0123111789' }
        ];
    }
    AngularComponent.prototype.ngOnInit = function () {
    };
    AngularComponent.prototype.addNV = function () {
        if (this.name !== '' && this.gender !== '' && this.email !== '' && this.phone !== '') {
            this.danhSachNV.push({
                id: this.danhSachNV.length + 1,
                name: this.name,
                gender: this.gender,
                email: this.email,
                phone: this.phone
            });
        }
    };
    AngularComponent.prototype.delNV = function (id) {
        var idFound = this.danhSachNV.findIndex(function (NV) { return NV.id === id; });
        this.danhSachNV.splice(idFound, 1);
    };
    AngularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular',
            template: __webpack_require__(/*! ./angular.component.html */ "./src/app/angular/angular.component.html"),
            styles: [__webpack_require__(/*! ../home/home.component.css */ "./src/app/home/home.component.css"), __webpack_require__(/*! ./angular.component.css */ "./src/app/angular/angular.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularComponent);
    return AngularComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card>\r\n    <app-header class=\"header\"></app-header>\r\n</app-card>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GTO-Project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _webapp_webapp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webapp/webapp.component */ "./src/app/webapp/webapp.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card.component */ "./src/app/card.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routesConfig = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'webapp', component: _webapp_webapp_component__WEBPACK_IMPORTED_MODULE_8__["WebappComponent"] },
    { path: 'angular', component: _angular_angular_component__WEBPACK_IMPORTED_MODULE_11__["AngularComponent"] },
    { path: 'about', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"] }
];








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _webapp_webapp_component__WEBPACK_IMPORTED_MODULE_8__["WebappComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"],
                _card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                _angular_angular_component__WEBPACK_IMPORTED_MODULE_11__["AngularComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routesConfig)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card.component.ts":
/*!***********************************!*\
  !*** ./src/app/card.component.ts ***!
  \***********************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: "\n    <div class=\"header\">\n        <ng-content select=\".header\"></ng-content>\n    </div>\n    <div>\n        <ng-content></ng-content>\n    </div>\n    <div class=\"footer\">\n        <ng-content select=\".footer\"></ng-content>\n    </div>\n    ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    text-align: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.nav {\r\n    width: 100%;\r\n    height: 40px;\r\n    float: none;\r\n}\r\n.nav a {\r\n    color: white;\r\n    margin: 5px 40px 10px;\r\n}\r\n.info {\r\n    color: white;\r\n    height: 40px;\r\n    width: 100%;\r\n    font-size: 20px;\r\n    margin: 5px 20px 5px;\r\n}\r\n.info a {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: inline-block;\r\n}\r\n.icon a {\r\n    margin: 5px 10px 10px;\r\n    float: none;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer [class]=\"'header'\">\n  <div [class]=\"'nav'\">\n    <a routerLink=\"/home\" title=\"Trang chủ\">Trang chủ</a>\n    <a routerLink=\"/about\" title=\"About\" [style.color]=\"'bisque'\">About</a>\n  </div>\n  <div [class]=\"'info'\">\n    <span [style.margin-right]=\"'40px'\">Trần Minh Thạch</span>\n    <i [style.margin-right]=\"'40px'\" class=\"fa fa-phone\" style=\"font-size: 25px\">\n      0985.547.749\n    </i>\n    <a href=\"mailto:minhthach2701@gmail.com\" title=\"Gửi mail đến Trần Minh Thạch\">\n      <i class=\"material-icons\" style=\"font-size: 25px\">email</i>minhthach2701@gmail.com\n    </a>\n  </div>\n  <div [class]=\"'icon'\">\n    <a href=\"https://www.facebook.com/tran.minhthach.27.1\" title=\"Facebook\" target=\"_blank\"><i class=\"fa fa-facebook-official\"\n        style=\"font-size:40px\"></i></a>\n    <a href=\"https://www.linkedin.com/in/tr%E1%BA%A7n-minh-th%E1%BA%A1ch-90955113b/\" title=\"Linkedin\" target=\"_blank\"><i\n        class=\"fa fa-linkedin\" style=\"font-size:40px\"></i></a>\n    <a href=\"https://www.youtube.com/channel/UCe8DIFFSntyNQx0Ukia40gw?view_as=subscriber\" title=\"Youtube\" target=\"_blank\"><i\n        class=\"fa fa-youtube\" style=\"font-size:40px\"></i></a>\n  </div>\n  <hr>\n  <span [style.font-size]=\"'20px'\" [style.color]=\"'white'\">&copy;2018 - Trần Minh Thạch - Xây dựng web bằng Angular</span>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ../header/header.component.css */ "./src/app/header/header.component.css"), __webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    height: 50px;\r\n    width: 100%;\r\n    background-color: dodgerblue;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n}\r\n.nav {\r\n    float: left;\r\n    height: 50px;\r\n    width: 80%;\r\n}\r\n.nav a {\r\n    display: inline-block;\r\n    height: 30px;\r\n    text-decoration: none;\r\n    margin: 10px;\r\n    color: white;\r\n}\r\n.nav a:hover {\r\n    color: bisque;\r\n}\r\n.icon a {\r\n    display: inline-block;\r\n    height: 30px;\r\n    margin: 10px 7px 10px;    \r\n    color: aliceblue;\r\n    padding-right: 10px; \r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header [class]=\"'header'\">\n  <div [class]=\"'nav'\">\n    <a routerLink=\"/home\" title=\"Trang chủ\"><i class=\"fa fa-home\" style=\"font-size:25px\"></i></a>\n    <a routerLink=\"/home\" title=\"Trang chủ\">Trang chủ</a>\n    <a routerLink=\"/webapp\" title=\"Ứng dụng Web\">Ứng dụng Web</a>\n    <a routerLink=\"/angular\" title=\"Angular 6\">Angular 6</a>\n    <a routerLink=\"/about\" title=\"About\">About</a>\n  </div>\n  <div [class]=\"'icon'\">\n    <a href=\"https://www.facebook.com/tran.minhthach.27.1\" title=\"Facebook\" target=\"_blank\">\n      <i class=\"fa fa-facebook-official\"style=\"font-size:25px\"></i>\n    </a>\n    <a href=\"https://www.linkedin.com/in/tr%E1%BA%A7n-minh-th%E1%BA%A1ch-90955113b/\" title=\"Linkedin\" target=\"_blank\">\n      <i class=\"fa fa-linkedin\" style=\"font-size:25px\"></i>\n    </a>\n  </div>\n</header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\r\n    width: 80%;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 22px;\r\n    margin: 10px 10% 10px 10%;\r\n    text-indent: 20px;\r\n    text-align: justify;\r\n    line-height: 1.5;\r\n    font-weight: normal;\r\n}\r\n.home a {\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'home'\">\n  <div>\n    <h2>Kiến trúc một ứng dụng web</h2>\n    <p>\n      <img src=\"https://beboss.edu.vn/wp-content/uploads/2015/12/Cac-thanh-phan-co-ban-cua-website-hinh-1-300x166.jpg\"\n        alt=\"website\" [ngStyle]=\"imgLeft\">\n      Trước đây một website đơn giản được tạo ra cho người dùng truy cập và sẽ trả về\n      một trang html gồm text và hình ảnh cho người dùng, sau đó sẽ được hiển thị lên web browser.\n      Những website này đơn giản chỉ cần một web application được lưu trữ trên một server,\n      cùng với đó là một địa chỉ ip để người dùng truy cập vào và sử dụng.\n      Tuy nhiên với các website hiện đại các tính năng, các thành phần của nó\n      cũng phức tạp hơn nhiều đòi hỏi cần có một kiến trúc chung đế áp dụng chung\n      qua đó các web developer có thể hình dung được sự vận hành của web application. Cụ thể gồm 11 thành phần như hình\n      sau:\n      <img src=\"https://images.viblo.asia/1600/4db1ce65-f764-4899-8695-bea920920f0e.PNG\" [ngStyle]=\"img\">\n    </p>\n    <h3>DNS - Domain Name Server</h3>\n    <p>\n      <img src=\"https://tibo.vn/resources/images/khai-niem-dns-hosting828.jpg\" alt=\"DNS\" [ngStyle]=\"imgRight\">\n      Là công nghệ nền tảng tạo nên mạng lưới các trang web, internet hiện nay.\n      Về cơ bản DNS cung cấp một cặp key/value để tra cứu giữa tên miền với một địa chỉ IP,\n      cái mà yêu cầu khi máy tính chúng ta muốn gửi request tới một server nào đó.\n      Với người dùng khi truy cập thì ta chỉ cần tên miền của trang web,\n      tuy nhiên để máy tính và mạng internet có thể hiểu và đưa ta đến đúng địa chỉ của tên miền đó thì ta cần địa chỉ\n      IP\n    </p>\n    <h3>Load Balancer</h3>\n    <p>\n      Là công nghệ mà giúp cho việc mở rộng theo chiều ngang của ứng dụng\n      (mở rộng lượng server nhận các request) hoạt động được. Nó phần bổ các request,\n      và chuyển chúng tới các server được clone của nhau và gửi trả response của server về cho người dùng.\n      Vì các server xử lý request là như nhau cho nên nhiệm vụ của load balance chỉ là phân bố\n      các request tới các server để các server không bị quá tải\n    </p>\n    <h3>Web Application Server</h3>\n    <p>\n      Dây là nơi chứa các code logic, thực hiện các code đó tùy thuộc vào request của người dùng,\n      xử lý các request của người dùng và gửi lại html (ngoài ra có thể là json, file ...)\n      cho browser của người dùng. Web app server còn giao tiếp với một vài\n      cơ sở hạ tầng phía sau như databases, tầng caching, job queues, search services,\n      các microservices, data/logging queues... Các web app trên các web app server\n      thường được cài đặt bằng một ngôn ngữ lập trình tùy thuộc vào developer như: PHP, Ruby, Java, C#, Scala...,\n      và thường đi kèm cùng các framework hướng MVC như Laravel, Ruby on rails.\n      Ngoài ra, cũng có thể sử dụng các nền tảng như: Nodejs cùng Express\n    </p>\n    <h3>Database</h3>\n    <p>\n      <img src=\"https://www.novelucent.com/templates/novelucent/images/database-services.jpg\" alt=\"Database\" [ngStyle]=\"imgLeft\">\n      Tất cả các web app hiện nay đều sử dụng một hoặc nhiều database để lưu trữ dữ liệu.\n      Database cung cấp cách mà người ta định nghĩa cấu trúc dữ liệu, thêm dữ liệu mới, tìm kiếm dữ liệu,\n      cập nhật hoặc xóa dữ liệu, thực hiện các tính toán trên dữ liệu nếu cần thiết.\n      Có rất nhiều kiểu cũng như loại cơ sở dữ liệu và chúng đề dựa trên hai cộng nghệ chính về cơ sở dữ liệu là:\n    </p>\n    <ul>\n      <li>\n        SQL: sử dụng cho các cơ sở dữ liệu quan hệ, SQL dùng để tạo, truy vấn, cập nhật thêm sửa xóa dữ liệu\n      </li>\n      <li>\n        NoSQL: là công nghệ giúp lưu trữ dữ liệu lớn, không chỉ là các dữ liệu quan hệ và còn là các dữ liệu phi quan\n        hệ.\n      </li>\n    </ul>\n    <h3>Caching Service</h3>\n    <p>\n      Caching service cung cấp một cách để lưu dữ liệu dưới dạng một cặp key/value để giúp cho việc lưu trữ\n      và tìm kiếm thông tin với thời gian thực. Các ứng dụng thường sử dụng caching service để lưu các\n      kết quả tính toán phức tạp và tốn thời gian, vì vậy có thể lấy lại các kết quả đó mà không\n      mất công tính toán lại. Một ứng dụng có thể cache kết quả từ truy vấn cơ sở dữ liệu,\n      kết quả từ việc gọi một service ngoài, html cho một url ... Có 2 server thông dụng cho caching đó là Redis và\n      Memcache. Hai ví dụ cho việc caching như sau:\n    </p>\n    <ul>\n      <li>\n        Google thường cache các kết quả tìm kiếm của các từ thông dụng thay vì tính toán lại mỗi lần tìm kiếm.\n      </li>\n      <li>\n        Facebook cache dữ liệu khi ta log in như: dữ liệu các bài post, danh sách bạn bè ...\n      </li>\n    </ul>\n    <h3>Job Queue và Servers</h3>\n    <p>\n      Hầu hết các web application đều cần thực hiện các công việc bất đồng bộ và chạy ngầm\n      mà không trả về response cho request của người dùng. Ví dụ như việc Google thu thập\n      và đánh index của các trang web trên mạng internet để trả về kết quả tìm kiếm của người dùng,\n      việc này không được thực hiện ngay khi ta tìm kiếm mà thay vào đó Google thu thập các website\n      một cách bất đồng bộ và việc đánh index cũng diến ra tương tự.\n    </p>\n    <p>\n      Trong khi có nhiều kiến trúc khác nhau để thực hiện các công việc bất đồng bộ thì\n      một trong số cách ta có thể sử dụng là job queue. Nó sẽ gồm 2 thành phần\n      một là kiểu queue áp dụng để lưu các job là lấy các job ra để chạy,\n      hai là một server để chạy các job trong queue.\n    </p>\n    <p>\n      Job queue sẽ lưu trữ một list job cần phải chạy bất đồng bộ.\n      Một queue đơn giản nhất là FIFO (first in first out) tức các job được lưu trữ\n      theo kiểu job nào vào queue trước sẽ được thực hiện trước. Tuy nhiên để tăng tính\n      linh hoạt cho queue người ta sẽ sử dụng thêm tham số độ ưu tiên của các job,\n      như vậy các job sẽ được lưu vào queue một cách tuần tự nhưng khi thực hiện job thì job\n      nào có độ ưu tiên cao hơn sẽ thực hiện trước. Khi ứng dụng cần một job được chạy\n      hoặc theo lịch đề ra hoặc do người dùng chỉ thị thì ứng dụng sẽ đây job đó vào queue.\n      <p>\n        Job server xử lý các job. Chúng dự vào job queue để xác định có job nào cần thực hiện hay không,\n        nếu có chúng sẽ đưa job đó ra khỏi queue vào thực hiện.\n      </p>\n      <h3>Full-text search service</h3>\n      <p>\n        Full-text search service là công nghệ cho phép các web app cung cấp tìm kiếm tất cả\n        các kết quả liên quan đến input mà người dùng nhập vào.\n        Full-text search service dựa vào index ngược để tìm kiếm các tài liệu có chứa từ khóa tìm kiếm.\n      </p>\n      <p>\n        Trong khi các cơ sở dữ liệu hiện nay có hỗ trợ full-text search, tuy nhiên việc chạy tách biệt\n        việc tìm kiếm full-text là cần thiết để giảm thiểu việc tính toán lưu trữ index ngược cho server,\n        cũng như sẽ được cung cấp công cụ cho việc query dễ dàng hơn.\n        Một số nền tảng Full-text search service hiện nay là ElasticSearch, Sphinx.\n      </p>\n      <h3>Các dịch vụ</h3>\n      <p>\n        Khi ứng dụng của chúng ta đạt đến một độ lớn nào đó thì sẽ có một số tính năng cần được tách ra\n        một cách độc lập như một ứng dụng, tuy nhiên chúng sẽ hỗ trợ cho ứng dụng chính của chúng ta nên\n        được gọi là các services. Các service này sẽ chỉ có phạm vi hoạt động là trong ứng dụng,\n        nó cũng có thể tương tác được với các service khác.\n      </p>\n      <h3>Dữ liệu</h3>\n      <p>\n        Ngày này việc lưu lại mọi dữ liệu phát sinh trong quá trình sử dụng web app,\n        từ đó khai thác thêm các thông tin từ các dữ liệu đó vô cùng quan trọng.\n        Hầu hết các ứng dụng hiện nay đều dựa vào data pipeline (đường ống dữ liệu) để thu thập,\n        lưu trữ, và phân tích dữ liệu. Một data pipeline thường bao gồm 3 giai đoạn:\n      </p>\n      <ul>\n        <li>\n          Ứng dụng sẽ gửi dữ liệu thường là các sự kiện phát sinh trong quá trình người dùng tương tác\n          với ứng dụng, tới một bộ phận chịu trách nhiệm lưu trữ và xử lý dữ liệu.\n          Dữ liệu sau khi xử lý sẽ được chuyển tới một bộ phận khác.\n          2 công nghệ hiện nay được cung cấp bởi AWS cho công việc này là Kinesis và Kafka.\n        </li>\n        <li>\n          Dữ liệu gốc cùng với dữ liệu đã qua xử lý sau đó được lưu vào cloud storage\n        </li>\n        <li>\n          Sau đó khi cần phân tích dữ liệu gốc và dữ liệu đã qua xử lý sẽ được load và kho dữ liệu.\n        </li>\n      </ul>\n      <h3>Cloud Storage</h3>\n      <p>\n        Đây là nền tảng giúp ta lưu trữ, truy cập và chia sẻ dữ liệu dễ dàng thông qua internet.\n        Cloud storage giúp chúng ta lưu trữ và truy cập bất cứ cái gì mà chúng ta có thể lưu\n        ở hệ thống file local với lợi ích là ta có thể tương tác được với Cloud storage bằng\n        RESTful API thông qua HTTP. Một trong nhưng Cloud storage nổi tiếng hiện nay là S3 của Amazon.\n      </p>\n      <h3>CDN - Content Delivery Network</h3>\n      <p>\n        Là công nghệ cung cấp một cách để phục vụ các tài nguyên như html tĩnh, css, javascript\n        và ảnh thông qua các trang web một cách nhanh chóng và hiệu quả hơn là được lấy từ server gốc.\n        Nó làm việc bằng cách phân tán tài nguyên cho các server khác trên toàn thế giới,\n        khi đó người dùng cuối sẽ tải các tài nguyên từ các server kia thay cho server gốc của các\n        tài nguyên đó. Hình dưới minh họa lợi ích của việc sử dụng CDN:\n        <img src=\"https://images.viblo.asia/1600/9a3b2880-6bfe-4d77-bb38-1092e181948e.PNG\" alt=\"CND\" [ngStyle]=\"img\">\n      </p>\n      <h4>\n        Nguồn:\n        <a href=\"https://viblo.asia/p/kien-truc-web-hien-dai-RQqKLvgMl7z#_job-queue-va-servers-6\" target=\"_blank\" title=\"Kiến trúc web hiện đại - Viblo\">Kiến trúc web\n          hiện đại - Viblo</a>\n      </h4>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imgLeft = {
            'width': '200px',
            'height': '170px',
            'float': 'left',
            'margin-right': '20px'
        };
        this.imgRight = {
            'width': '200px',
            'height': '170px',
            'float': 'right',
            'margin-left': '20px'
        };
        this.img = {
            'width': '800px',
            'height': '500px',
            'display': 'block',
            'margin-left': 'auto',
            'margin-right': 'auto'
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"https://previews.123rf.com/images/monuttanit/monuttanit1708/monuttanit170800030/84411880-404-liquid-error-or-page-not-found-design-graphic-template-website-with-white-background.jpg\"\r\n    alt=\"PageNotFound\" class=\"img\">"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: ["\n  .img {\n    clear: inherit;\n    width: 1200px;\n    height: 600px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto\n  }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/webapp/webapp.component.html":
/*!**********************************************!*\
  !*** ./src/app/webapp/webapp.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'home'\">\n  <h2>FrontEnd và BackEnd là gì?</h2>\n  <p>\n    FrontEnd và BackEnd có thể hiểu là hai thành phần chính của Web Application Server. Hai thành phần này\n    đảm nhận việc hiển thị ứng dụng web cho người sử dụng và xử lý các thông tin mà người sử dụng\n    thao tác thông qua giao diện trang web.\n  </p>\n  <img src=\"https://vntesters.com/wp-content/uploads/2016/05/Website-Frontend-and-Backend.jpg\" alt=\"Fronend and Backend\"\n    [ngStyle]=\"img\">\n  <h3>FrontEnd là gì?</h3>\n  <span>\n    <img src=\"https://cdn.wccftech.com/wp-content/uploads/2016/10/Front-End-Development-Bundle.jpg\" alt=\"Frontend\"\n      [ngStyle]=\"imgLeft\">\n    <p>\n      Phần FrontEnd của một ứng dụng web là phần tương tác với người dùng. Tất cả mọi thứ được nhìn thấy\n      khi điều hướng trên Internet, từ các font chữ, màu sắc cho tới các menu xổ xuống và các thanh trượt,\n      là một sự kết hợp của HTML, CSS, và JavaScript được biên dịch trình duyệt máy tính.\n    </p>\n    <p>\n      Các ngôn ngữ để phát triển FrontEnd bao gồm 3 ngôn ngữ chủ đạo đó là: HTML, CSS và Javascript.\n      Tuy nhiên, để code nhanh gọn lẹ thì có thể sử dụng thêm các framework hay thư viện khác như:\n    </p>\n      <ul>\n        <li>\n          Một số thư viện/framework nổi tiếng: Bootstrap, jQuery, AngularJS, React JS, Vue JS, EmberJS...\n        </li>\n        <li>\n          Kĩ năng thiết kế, sử dụng Photoshop. Kiến thức và kinh nghiệm về UI/UX.\n        </li>\n        <li>\n          LESS, SASS (stylesheet language)\n        </li>\n        <li>\n          Sử dụng npm, grunt,...để optimize, minimize HTML/CSS/JS.\n        </li>\n        <li>\n          Kiến thức về Ajax, cách thiết kế giao diện responsive,...\n        </li>\n      </ul>\n    <p>\n      Tuy nhiên, đó chỉ là các ngôn ngữ lập trình. Để có được một ứng dụng web bắt mắt, có tính thẩm mỹ cao thì\n      các lập trình viên phải biết sử dụng font chữ sao cho chuẩn, đưa ra các bố cục hợp lý, biết cách thức phối\n      màu,...\n    </p>\n  </span>\n    <h3>BackEnd là gì?</h3>\n    <span>\n      <img src=\"https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2016/12/What-Is-Back-End-Development.png\" alt=\"BackEnd\" [ngStyle]=\"imgRight\">\n      <p>\n          Phần BackEnd của một ứng dụng web là nơi giúp cho phần FrontEnd có thể hoạt động được, là nơi lưu trữ tất cả dữ liệu, thuật toán, \n          là nơi xử lý mọi logic nghiệp vụ phức tạp ở ẩn ở phía sau FrontEnd, giúp cho hệ thống hoạt động trơn tru. \n          Một lập trình viên BackEnd xây dựng và duy trì công nghệ mà sức mạnh của những thành phần đó, cho phép phần giao diện người dùng của trang web có thể tồn tại được.\n      </p>\n      <p>\n          Để khiến cho máy chủ, ứng dụng, và cơ sở dữ liệu có thể giao tiếp được với nhau, các lập trình viên back-end sử dụng các công cụ như sau:\n      </p>\n      <ul>\n        <li>\n            Ngôn ngữ server-side để viết BackEnd: C#, Java, Python, Ruby,... Dĩ nhiên là phải bao gồm kiến thức về \n            những web framework đi kèm các ngôn ngữ này: ASP.NET MVC, Spring, Django, Rails,...\n        </li>\n        <li>\n            Kiến thức về database SQL: MS SQL Server, MySQL,... \n            Gần đây một số database NoSQL đang khá thịnh hành: Neo4j, MongoDB,...\n        </li>\n        <li>\n            Kiến thức về web nói chung, cách viết Web Service, cách đăng nhập và phân quyền người sử dụng.\n        </li>\n        <li>\n            Kiến thức về 1 số CMS: WordPress, Joomla, Umbraco,...\n        </li>\n      </ul>\n    </span>\n    <h3>Nguồn tham khảo:</h3>\n    <ul>\n      <li>\n        <a href=\"https://viblo.asia/p/phan-biet-giua-front-end-back-end-va-full-stack-WAyK8RGnlxX\" target=\"_blank\" title=\"Phân biệt giữ Fron End, Back End và Full Stack - Viblo\">Phân biệt giữ Fron End, Back End và Full Stack - Viblo</a>\n      </li>\n      <li>\n        <a href=\"https://techmaster.vn/posts/33487/lap-trinh-web-front-end-vs-back-end-vs-full-stack\" target=\"_blank\" title=\"Lập trình viên frontend, backend fullstack là gì?\">Lập trình viên frontend, backend fullstack là gì?</a>\n      </li>\n    </ul>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/webapp/webapp.component.ts":
/*!********************************************!*\
  !*** ./src/app/webapp/webapp.component.ts ***!
  \********************************************/
/*! exports provided: WebappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebappComponent", function() { return WebappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebappComponent = /** @class */ (function () {
    function WebappComponent() {
        this.imgLeft = {
            'width': '200px',
            'height': '170px',
            'float': 'left',
            'margin-right': '20px'
        };
        this.imgRight = {
            'width': '200px',
            'height': '170px',
            'float': 'right',
            'margin-left': '20px'
        };
        this.img = {
            'width': '800px',
            'height': '500px',
            'display': 'block',
            'margin-left': 'auto',
            'margin-right': 'auto'
        };
    }
    WebappComponent.prototype.ngOnInit = function () {
    };
    WebappComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webapp',
            template: __webpack_require__(/*! ./webapp.component.html */ "./src/app/webapp/webapp.component.html"),
            styles: [__webpack_require__(/*! ../home/home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebappComponent);
    return WebappComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Minh Thach\Desktop\GTO-Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map