"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var modals_component_1 = require("../modals/modals.component");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.navbarOpen = false;
    }
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
        var buttonDiv = document.getElementById("registerButtons");
        if (buttonDiv.style.display === "none") {
            buttonDiv.style.display = "block";
        }
        else {
            buttonDiv.style.display = "none";
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.openLogin = function () {
        var _this = this;
        var dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minHeight = '300px';
        dialogConfig.minWidth = '400px';
        var dialogRef = this.dialog.open(modals_component_1.ModalsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined && result != null && result != "") {
                _this.username = result.username;
                _this.password = result.password;
                if (_this.username === "student" && _this.password === "student") {
                    _this.router.navigate(['studentLogin/studentDashboard']);
                }
                else if (_this.username === "teacher" && _this.password === "teacher") {
                    _this.router.navigate(['teacherLogin']);
                }
            }
        });
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
