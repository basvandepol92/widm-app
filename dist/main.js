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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_members_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/members/members.component */ "./src/app/components/members/members.component.ts");
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _components_questions_questions_create_questions_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/questions/questions-create/questions-create.component */ "./src/app/components/questions/questions-create/questions-create.component.ts");
/* harmony import */ var _components_days_days_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/days/days.component */ "./src/app/components/days/days.component.ts");
/* harmony import */ var _components_questions_questions_overview_questions_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/questions/questions-overview/questions-overview.component */ "./src/app/components/questions/questions-overview/questions-overview.component.ts");
/* harmony import */ var _components_questions_questions_answer_questions_answer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/questions/questions-answer/questions-answer.component */ "./src/app/components/questions/questions-answer/questions-answer.component.ts");
/* harmony import */ var _components_days_day_create_day_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/days/day-create/day-create.component */ "./src/app/components/days/day-create/day-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'admin',
        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]
    }, {
        path: 'members',
        component: _components_members_members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"]
    }, {
        path: 'start',
        component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"]
    }, {
        path: 'days/create',
        component: _components_days_day_create_day_create_component__WEBPACK_IMPORTED_MODULE_9__["DayCreateComponent"]
    }, {
        path: 'days/:memberId',
        component: _components_days_days_component__WEBPACK_IMPORTED_MODULE_6__["DaysComponent"]
    }, {
        path: 'questions',
        component: _components_questions_questions_overview_questions_overview_component__WEBPACK_IMPORTED_MODULE_7__["QuestionsOverviewComponent"]
    }, {
        path: 'questions/:dayId',
        component: _components_questions_questions_create_questions_create_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsCreateComponent"]
    }, {
        path: 'questions/:memberId/:dayId',
        component: _components_questions_questions_answer_questions_answer_component__WEBPACK_IMPORTED_MODULE_8__["QuestionsAnswerComponent"]
    },
    {
        path: '',
        redirectTo: '/nav',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'WIDM app';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_members_members_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/members/members.component */ "./src/app/components/members/members.component.ts");
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _components_questions_questions_create_questions_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/questions/questions-create/questions-create.component */ "./src/app/components/questions/questions-create/questions-create.component.ts");
/* harmony import */ var _components_questions_controls_answers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/questions/controls/answers.component */ "./src/app/components/questions/controls/answers.component.ts");
/* harmony import */ var _components_days_days_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/days/days.component */ "./src/app/components/days/days.component.ts");
/* harmony import */ var _components_questions_questions_overview_questions_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/questions/questions-overview/questions-overview.component */ "./src/app/components/questions/questions-overview/questions-overview.component.ts");
/* harmony import */ var _components_questions_questions_answer_questions_answer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/questions/questions-answer/questions-answer.component */ "./src/app/components/questions/questions-answer/questions-answer.component.ts");
/* harmony import */ var _components_days_day_create_day_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/days/day-create/day-create.component */ "./src/app/components/days/day-create/day-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _components_members_members_component__WEBPACK_IMPORTED_MODULE_7__["MembersComponent"],
                _components_start_start_component__WEBPACK_IMPORTED_MODULE_8__["StartComponent"],
                _components_questions_questions_create_questions_create_component__WEBPACK_IMPORTED_MODULE_9__["QuestionsCreateComponent"],
                _components_days_days_component__WEBPACK_IMPORTED_MODULE_11__["DaysComponent"],
                _components_questions_questions_overview_questions_overview_component__WEBPACK_IMPORTED_MODULE_12__["QuestionsOverviewComponent"],
                _components_questions_questions_answer_questions_answer_component__WEBPACK_IMPORTED_MODULE_13__["QuestionsAnswerComponent"],
                _components_days_day_create_day_create_component__WEBPACK_IMPORTED_MODULE_14__["DayCreateComponent"],
                _components_questions_controls_answers_component__WEBPACK_IMPORTED_MODULE_10__["AnswersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li><a routerLink=\"/start\">Start</a></li>\n    <li><a routerLink=\"/members\">Leden</a></li>\n    <li><a routerLink=\"/days/create\">Dagen</a></li>\n    <li><a routerLink=\"/scores\">Highscores</a></li>\n    <li><a routerLink=\"/questions\">Vragen</a></li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*****************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/days/day-create/day-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/days/day-create/day-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/days/day-create/day-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/days/day-create/day-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Dagen</h2>\n\n<ul *ngIf=\"days\">\n  <li *ngFor=\"let day of days\">{{ day.description }} <button (click)=\"deleteDay(day)\">X</button></li>\n</ul>\n\n<label>name:\n  <input [(ngModel)]=\"newDay.description\" placeholder=\"Weekdag\" type=\"date\">\n</label>\n<button (click)=\"createDay(newDay)\">Opslaan</button>\n\n<app-nav></app-nav>\n"

/***/ }),

/***/ "./src/app/components/days/day-create/day-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/days/day-create/day-create.component.ts ***!
  \********************************************************************/
/*! exports provided: DayCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayCreateComponent", function() { return DayCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types/day */ "./src/app/types/day.ts");
/* harmony import */ var _services_days_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/days.service */ "./src/app/services/days.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DayCreateComponent = /** @class */ (function () {
    function DayCreateComponent(daysService) {
        this.daysService = daysService;
        this.newDay = new _types_day__WEBPACK_IMPORTED_MODULE_1__["Day"]();
    }
    DayCreateComponent.prototype.ngOnInit = function () {
        this.setDays = this.setDays.bind(this);
        this.onDayCreated = this.onDayCreated.bind(this);
        this.getDays();
    };
    DayCreateComponent.prototype.getDays = function () {
        this.daysService.getDays()
            .subscribe(this.setDays);
    };
    DayCreateComponent.prototype.setDays = function (days) {
        console.log(days);
        this.days = days;
    };
    DayCreateComponent.prototype.createDay = function (day) {
        this.daysService.create(day)
            .subscribe(this.onDayCreated);
    };
    DayCreateComponent.prototype.onDayCreated = function (day) {
        this.days.push(day);
        this.newDay = new _types_day__WEBPACK_IMPORTED_MODULE_1__["Day"]();
    };
    DayCreateComponent.prototype.deleteDay = function (deleteDay) {
        this.daysService.delete(deleteDay).subscribe();
        this.days = this.days.filter(function (day) { return day._id !== deleteDay._id; });
    };
    DayCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day-create',
            template: __webpack_require__(/*! ./day-create.component.html */ "./src/app/components/days/day-create/day-create.component.html"),
            styles: [__webpack_require__(/*! ./day-create.component.css */ "./src/app/components/days/day-create/day-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_days_service__WEBPACK_IMPORTED_MODULE_2__["DaysService"]])
    ], DayCreateComponent);
    return DayCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/days/days.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/days/days.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/days/days.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/days/days.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Wie is de Mol</h2>\n\n<ul *ngIf=\"days\">\n  <li *ngFor=\"let day of days\">\n    <a routerLink=\"/questions/{{memberId}}/{{day._id}}\">{{ day.description }}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/days/days.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/days/days.component.ts ***!
  \***************************************************/
/*! exports provided: DaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysComponent", function() { return DaysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_days_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/days.service */ "./src/app/services/days.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DaysComponent = /** @class */ (function () {
    function DaysComponent(daysService, route) {
        this.daysService = daysService;
        this.route = route;
    }
    DaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.memberId = params['memberId'];
            _this.getDays();
        });
    };
    DaysComponent.prototype.getDays = function () {
        var _this = this;
        this.daysService.getDays()
            .subscribe(function (days) { return _this.days = days; });
    };
    DaysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-days',
            template: __webpack_require__(/*! ./days.component.html */ "./src/app/components/days/days.component.html"),
            styles: [__webpack_require__(/*! ./days.component.css */ "./src/app/components/days/days.component.css")]
        }),
        __metadata("design:paramtypes", [_services_days_service__WEBPACK_IMPORTED_MODULE_2__["DaysService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DaysComponent);
    return DaysComponent;
}());



/***/ }),

/***/ "./src/app/components/members/members.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/members/members.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/members/members.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/members/members.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Leden</h2>\n\n<ul *ngIf=\"members\">\n  <li *ngFor=\"let member of members\">{{ member.name }} <button (click)=\"deleteMember(member)\">X</button></li>\n</ul>\n\n<label>name:\n  <input [(ngModel)]=\"member.name\" placeholder=\"name\">\n</label>\n<button (click)=\"createMember(member)\">Opslaan</button>\n\n<app-nav></app-nav>\n"

/***/ }),

/***/ "./src/app/components/members/members.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/members/members.component.ts ***!
  \*********************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/member */ "./src/app/types/member.ts");
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/members.service */ "./src/app/services/members.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MembersComponent = /** @class */ (function () {
    function MembersComponent(membersService) {
        this.membersService = membersService;
        this.member = new _types_member__WEBPACK_IMPORTED_MODULE_1__["Member"]();
    }
    MembersComponent.prototype.ngOnInit = function () {
        this.getMembers();
        this.onMemberCreated = this.onMemberCreated.bind(this);
    };
    MembersComponent.prototype.getMembers = function () {
        var _this = this;
        this.membersService.getMembers()
            .subscribe(function (members) { return _this.members = members; });
    };
    MembersComponent.prototype.createMember = function (member) {
        this.membersService.create(member)
            .subscribe(this.onMemberCreated);
    };
    MembersComponent.prototype.onMemberCreated = function (member) {
        this.members.push(member);
        this.member = new _types_member__WEBPACK_IMPORTED_MODULE_1__["Member"]();
    };
    MembersComponent.prototype.deleteMember = function (deleteMember) {
        this.membersService.delete(deleteMember).subscribe();
        this.members = this.members.filter(function (member) { return member._id !== deleteMember._id; });
    };
    MembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/components/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/components/members/members.component.css")]
        }),
        __metadata("design:paramtypes", [_services_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "./src/app/components/questions/controls/answers.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/questions/controls/answers.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"questionForm\">\n  <div class=\"form-group col-xs-6\">\n    <label>Vraag</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"question\">\n  </div>\n  <div class=\"form-group col-xs-6\">\n    <label>Antwoord A</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"answer_a\">\n  </div>\n  <div class=\"form-group col-xs-6\">\n    <label>Antwoord B</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"answer_b\">\n  </div>\n  <div class=\"form-group col-xs-6\">\n    <label>Antwoord C</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"answer_c\">\n  </div>\n  <div class=\"form-group col-xs-6\">\n    <label>Antwoord D</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"answer_d\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/questions/controls/answers.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/questions/controls/answers.component.ts ***!
  \********************************************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// address.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswersComponent = /** @class */ (function () {
    function AnswersComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('group'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], AnswersComponent.prototype, "questionForm", void 0);
    AnswersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answers',
            template: __webpack_require__(/*! ./answers.component.html */ "./src/app/components/questions/controls/answers.component.html")
        })
    ], AnswersComponent);
    return AnswersComponent;
}());



/***/ }),

/***/ "./src/app/components/questions/questions-answer/questions-answer.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/questions/questions-answer/questions-answer.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/questions/questions-answer/questions-answer.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/questions/questions-answer/questions-answer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  questions-answer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/questions/questions-answer/questions-answer.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/questions/questions-answer/questions-answer.component.ts ***!
  \*************************************************************************************/
/*! exports provided: QuestionsAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsAnswerComponent", function() { return QuestionsAnswerComponent; });
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

var QuestionsAnswerComponent = /** @class */ (function () {
    function QuestionsAnswerComponent() {
    }
    QuestionsAnswerComponent.prototype.ngOnInit = function () {
    };
    QuestionsAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions-answer',
            template: __webpack_require__(/*! ./questions-answer.component.html */ "./src/app/components/questions/questions-answer/questions-answer.component.html"),
            styles: [__webpack_require__(/*! ./questions-answer.component.css */ "./src/app/components/questions/questions-answer/questions-answer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionsAnswerComponent);
    return QuestionsAnswerComponent;
}());



/***/ }),

/***/ "./src/app/components/questions/questions-create/questions-create.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/questions/questions-create/questions-create.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/questions/questions-create/questions-create.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/questions/questions-create/questions-create.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>Vragen toevoegen</h4>\n  <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"save(myForm)\">\n    <!-- list of questions -->\n    <div formArrayName=\"questions\">\n      <div *ngFor=\"let question of myForm.controls.questions.controls; let i=index\">\n        <div>\n          <span>Vraag {{i + 1}}</span>\n          <div (click)=\"removeQuestion(i)\" *ngIf=\"myForm.controls.questions.controls.length > 1\"\n            style=\"text-decoration: underline; cursor: pointer\">Verwijderen</div>\n        </div>\n\n        <div [formGroupName]=\"i\">\n          <app-answers [group]=\"myForm.controls.questions.controls[i]\"></app-answers>\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" [disabled]=\"!myForm.valid\">Opslaan</button>\n  </form>\n</div>\n<button (click)=\"addQuestion()\">Vraag toevoegen</button>\n\n<app-nav></app-nav>\n"

/***/ }),

/***/ "./src/app/components/questions/questions-create/questions-create.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/questions/questions-create/questions-create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: QuestionsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsCreateComponent", function() { return QuestionsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsCreateComponent = /** @class */ (function () {
    function QuestionsCreateComponent(_fb, questionsService, route) {
        this._fb = _fb;
        this.questionsService = questionsService;
        this.route = route;
        this.setPreviousQuestions = this.setPreviousQuestions.bind(this);
    }
    QuestionsCreateComponent_1 = QuestionsCreateComponent;
    QuestionsCreateComponent.setQuestion = function (questionArray) {
        var question = questionArray ? questionArray.question : "";
        var answer_a = questionArray ? questionArray.answer_a : "";
        var answer_b = questionArray ? questionArray.answer_b : "";
        var answer_c = questionArray ? questionArray.answer_c : "";
        var answer_d = questionArray ? questionArray.answer_d : "";
        return {
            question: [question, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            answer_a: [answer_a, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            answer_b: [answer_b, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            answer_c: [answer_c, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            answer_d: [answer_d, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        };
    };
    QuestionsCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var question = QuestionsCreateComponent_1.setQuestion();
        this.myForm = this._fb.group({
            questions: this._fb.array([
                this.initQuestions(question),
            ])
        });
        this.route.params.subscribe(function (params) {
            _this.dayId = params['dayId'];
            _this.getPreviousQuestions();
        });
    };
    QuestionsCreateComponent.prototype.initQuestions = function (question) {
        return this._fb.group(question);
    };
    QuestionsCreateComponent.prototype.addQuestion = function () {
        var question = QuestionsCreateComponent_1.setQuestion();
        var control = this.myForm.get("questions");
        control.push(this.initQuestions(question));
    };
    QuestionsCreateComponent.prototype.removeQuestion = function (i) {
        var control = this.myForm.get("questions");
        control.removeAt(i);
    };
    QuestionsCreateComponent.prototype.save = function (model) {
        this.questionsService.create(model.value, this.dayId)
            .subscribe(this.questionsSaved);
    };
    QuestionsCreateComponent.prototype.questionsSaved = function () {
        console.log('saved');
    };
    QuestionsCreateComponent.prototype.getPreviousQuestions = function () {
        this.questionsService.get(this.dayId)
            .subscribe(this.setPreviousQuestions);
    };
    QuestionsCreateComponent.prototype.setPreviousQuestions = function (questions) {
        var _this = this;
        if (questions && questions.length > 0) {
            this.myForm = this._fb.group({
                questions: this._fb.array([])
            });
            var control_1 = this.myForm.get("questions");
            questions.forEach(function (question) {
                var prevQuestion = QuestionsCreateComponent_1.setQuestion(question);
                control_1.push(_this.initQuestions(prevQuestion));
            });
        }
    };
    QuestionsCreateComponent = QuestionsCreateComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions-create',
            template: __webpack_require__(/*! ./questions-create.component.html */ "./src/app/components/questions/questions-create/questions-create.component.html"),
            styles: [__webpack_require__(/*! ./questions-create.component.css */ "./src/app/components/questions/questions-create/questions-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], QuestionsCreateComponent);
    return QuestionsCreateComponent;
    var QuestionsCreateComponent_1;
}());



/***/ }),

/***/ "./src/app/components/questions/questions-overview/questions-overview.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/questions/questions-overview/questions-overview.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/questions/questions-overview/questions-overview.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/questions/questions-overview/questions-overview.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Selecteer een dag</h2>\n<ul *ngIf=\"days\">\n  <li *ngFor=\"let day of days\">\n    <a routerLink=\"/questions/{{day._id}}\">{{ day.description }}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/questions/questions-overview/questions-overview.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/questions/questions-overview/questions-overview.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: QuestionsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsOverviewComponent", function() { return QuestionsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_days_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/days.service */ "./src/app/services/days.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsOverviewComponent = /** @class */ (function () {
    function QuestionsOverviewComponent(daysService, route) {
        this.daysService = daysService;
        this.route = route;
    }
    QuestionsOverviewComponent.prototype.ngOnInit = function () {
        this.getDays();
    };
    QuestionsOverviewComponent.prototype.getDays = function () {
        var _this = this;
        this.daysService.getDays()
            .subscribe(function (days) { return _this.days = days; });
    };
    QuestionsOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions-overview',
            template: __webpack_require__(/*! ./questions-overview.component.html */ "./src/app/components/questions/questions-overview/questions-overview.component.html"),
            styles: [__webpack_require__(/*! ./questions-overview.component.css */ "./src/app/components/questions/questions-overview/questions-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_days_service__WEBPACK_IMPORTED_MODULE_1__["DaysService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], QuestionsOverviewComponent);
    return QuestionsOverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/start/start.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/start/start.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/start/start.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/start/start.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"members\">\n  <li *ngFor=\"let member of members\">\n    <a routerLink=\"/days/{{member._id}}\">{{ member.name }}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/start/start.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/members.service */ "./src/app/services/members.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartComponent = /** @class */ (function () {
    function StartComponent(membersService) {
        this.membersService = membersService;
    }
    StartComponent.prototype.ngOnInit = function () {
        this.getMembers();
    };
    StartComponent.prototype.getMembers = function () {
        var _this = this;
        this.membersService.getMembers()
            .subscribe(function (members) { return _this.members = members; });
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/components/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/components/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [_services_members_service__WEBPACK_IMPORTED_MODULE_1__["MembersService"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/services/days.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/days.service.ts ***!
  \******************************************/
/*! exports provided: DaysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysService", function() { return DaysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DaysService = /** @class */ (function () {
    function DaysService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.daysUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/api/days";
    }
    DaysService.prototype.getDays = function () {
        return this.http.get(this.daysUrl, this.httpOptions);
    };
    DaysService.prototype.create = function (day) {
        console.log(day);
        return this.http.post(this.daysUrl, day, this.httpOptions);
    };
    DaysService.prototype.delete = function (day) {
        return this.http.delete(this.daysUrl + "/" + day._id, this.httpOptions);
    };
    DaysService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DaysService);
    return DaysService;
}());



/***/ }),

/***/ "./src/app/services/members.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/members.service.ts ***!
  \*********************************************/
/*! exports provided: MembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersService", function() { return MembersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MembersService = /** @class */ (function () {
    function MembersService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.membersUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/api/members";
    }
    MembersService.prototype.create = function (member) {
        return this.http.post(this.membersUrl, member, this.httpOptions);
    };
    MembersService.prototype.getMembers = function () {
        return this.http.get(this.membersUrl, this.httpOptions);
    };
    MembersService.prototype.delete = function (member) {
        return this.http.delete(this.membersUrl + "/" + member._id, this.httpOptions);
    };
    MembersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MembersService);
    return MembersService;
}());



/***/ }),

/***/ "./src/app/services/questions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/questions.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsService = /** @class */ (function () {
    function QuestionsService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.questionsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/api/questions";
    }
    QuestionsService.prototype.create = function (questions, dayId) {
        return this.http.put(this.questionsUrl + "/" + dayId, questions, this.httpOptions);
    };
    QuestionsService.prototype.get = function (dayId) {
        return this.http.get(this.questionsUrl + "/" + dayId, this.httpOptions);
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/types/day.ts":
/*!******************************!*\
  !*** ./src/app/types/day.ts ***!
  \******************************/
/*! exports provided: Day */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return Day; });
var Day = /** @class */ (function () {
    function Day() {
    }
    return Day;
}());



/***/ }),

/***/ "./src/app/types/member.ts":
/*!*********************************!*\
  !*** ./src/app/types/member.ts ***!
  \*********************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
var Member = /** @class */ (function () {
    function Member() {
    }
    return Member;
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
    production: false,
    url: 'http://localhost:5000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Users/basvandepol/Private/Projects/WIDM/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map