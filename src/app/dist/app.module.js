"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var components_module_1 = require("./components/components.module");
var animations_1 = require("@angular/platform-browser/animations");
var dialog_1 = require("@angular/material/dialog");
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/material/core");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var toolbar_1 = require("@angular/material/toolbar");
var http_1 = require("@angular/common/http");
var table_1 = require("@angular/material/table");
var ng2_charts_1 = require("ng2-charts");
var ng_circle_progress_1 = require("ng-circle-progress");
var angular_1 = require("@fullcalendar/angular");
var daygrid_1 = require("@fullcalendar/daygrid");
var timegrid_1 = require("@fullcalendar/timegrid");
var list_2 = require("@fullcalendar/list");
var interaction_1 = require("@fullcalendar/interaction");
var datepicker_1 = require("@angular/material/datepicker");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var datetime_picker_1 = require("@angular-material-components/datetime-picker");
angular_1.FullCalendarModule.registerPlugins([
    daygrid_1["default"],
    timegrid_1["default"],
    list_2["default"],
    interaction_1["default"]
]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                components_module_1.ComponentsModule,
                animations_1.BrowserAnimationsModule,
                dialog_1.MatDialogModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.MatRippleModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                toolbar_1.MatToolbarModule,
                http_1.HttpClientModule,
                table_1.MatTableModule,
                ng2_charts_1.ChartsModule,
                ng_circle_progress_1.NgCircleProgressModule.forRoot(),
                angular_1.FullCalendarModule,
                datetime_picker_1.NgxMatDatetimePickerModule,
                datetime_picker_1.NgxMatTimepickerModule,
                datetime_picker_1.NgxMatNativeDateModule,
                datepicker_1.MatDatepickerModule,
                input_1.MatInputModule,
                select_1.MatSelectModule
            ], exports: [dialog_1.MatDialogModule, forms_1.FormsModule],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
