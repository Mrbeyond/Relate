(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Rooms/room/room.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Rooms/room/room.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center start\" style=\"box-sizing: border-box; margin: 0px;\">\r\n  <div style=\"height:95vh;\" fxLayout=\"column\" fxFlex=\"100%\" fxFlex.gt-sm=\"60%\" fxFlex.sm=\"70%\">\r\n    <div class=\"w3-bar w3-teal w3-small\" style=\"height: 5%; margin-top: 3px;\" fxLayoutAlign=\"space-evenly center\">\r\n      <!-- <mat-icon style=\"vertical-align: middle;\" class=\"w3-teal w3-bar-item w3-hover-shadow\">photo</mat-icon> -->\r\n      <img style=\"width: 20px; height: 20px;\" *ngIf=\"roomData\" class=\"w3-circle\" src=\"http://localhost:2050/image/{{roomData.logo}}\" alt=\"LOGO\">\r\n      <span  class=\"w3-bar-item\" *ngIf=\"roomData\">{{roomData.name}}</span>\r\n      <div class=\"w3-dropdown-hover\">\r\n        <mat-icon class=\"\">more_horiz</mat-icon>\r\n        <div class=\"w3-dropdown-content w3-bar-block w3-card-4 w3-round-xlarge\">\r\n          <a class=\"w3-bar-item w3-button\" >Info</a>\r\n          <a class=\"w3-bar-item w3-button\" *ngIf=\"!checkMember(User._id)\" (click)=\"joinRoom()\">Join</a>\r\n          <a class=\"w3-bar-item w3-button\" (click)=\"members.style.display='block'\">Members</a>\r\n          <a class=\"w3-bar-item w3-button\">Add Member</a>\r\n          <a class=\"w3-bar-item w3-button\" *ngIf=\"checkMember(User._id)\" (click)=\"leaveRoom()\">Leave</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" style=\"height: 95%;\">\r\n      <mat-card  style=\"margin-top: 0; height: 95%;\">\r\n        <mat-card-content  fxLayout=\"column\" style=\" height: 88%; overflow-y: auto;\">\r\n            <div *ngIf=\"allMessages\">\r\n              <div   *ngFor=\"let item of allMessages\">\r\n                <div *ngIf=\"item.senderId !== User._id && item.type !== 4\" style=\"background-color: #ECF0F1;\" class=\"w3-card w3-round-large w3-margin-bottom\" fxLayout=\"column\" fxFlex=\"70%\" fxFlex.sm=\"55%\" fxFlex.gt-sm=\"55%\">\r\n                  <header class=\"w3-small\" fxLayout=\"row\"  fxLayoutAlign=\"space-evenly center\"  class=\"\">\r\n                    <img width=\"30\" height=\"30\" class=\"w3-circle\" *ngIf=\"User\" src=\"http://localhost:2050/image/{{senderDp(item.senderId)}}\" alt=\"\">\r\n                    <span>{{senderName(item.senderId)}}</span>\r\n                    <span>{{item.date | date: 'h:mm a'}}</span>\r\n                  </header>\r\n                  <div class=\"w3-container\" style=\"padding-top: 7px;\">\r\n                    {{item.message}}\r\n                  </div>\r\n                </div>\r\n                <!-- <div>for alignment and color </div> -->\r\n                <div *ngIf=\"item.senderId === User._id && item.type !== 4 \" class=\"w3-card w3-round-large w3-indigo w3-margin-bottom\" fxLayout=\"column\" fxLayoutAlign=\"end none\" fxFlexOffset=\"30%\" fxFlex=\"70%\"\r\n                 fxFlexOffset.sm=\"45%\" fxFlex.sm=\"55%\" fxFlexOffset.gt-sm=\"45%\" fxFlex.gt-sm=\"55%\">\r\n                  <header class=\"w3-small\" fxLayout=\"row\"  fxLayoutAlign=\"space-evenly center\"  class=\"\">\r\n                    <img width=\"30\" height=\"30\" class=\"w3-circle\" *ngIf=\"User\" src=\"http://localhost:2050/image/{{senderDp(item.senderId)}}\" alt=\"\">\r\n                    <span>{{senderName(item.senderId)}}</span>\r\n                    <span>{{item.date | date: 'h:mm a'}}</span>\r\n                  </header>\r\n                  <div class=\"w3-container\" style=\"padding-top: 7px;\">\r\n                      {{item.message}}\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"item.type === 4 && item.senderId !== User._id\" fxLayout=\"column\" class=\"w3-light-gray\" fxLayoutAlign=\"center center\"  fxFlex=\"70%\"\r\n                 fxFlex.sm=\"55%\" fxFlex.gt-sm=\"55%\" >\r\n                 {{senderName(item.senderId)}} {{item.message}}\r\n                </div>\r\n\r\n              </div>\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-footer  style=\"margin-left: auto; height: 8%;\">\r\n              <div fxLayout=\"row\">\r\n                <mat-form-field fxFlex=\"85%\">\r\n                  <input matInput type=\"text\" placeholder=\"message\"  [(ngModel)]=\"input\" >\r\n                </mat-form-field>\r\n                <button mat-button (click)=\"sender()\" class=\"w3-button w3-text-indigo\" fxFlex=\"12px%\"><mat-icon>send</mat-icon></button>\r\n              </div>\r\n            </mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <!-- <div> Members Modal</div> -->\r\n    <div class=\"w3-container\">\r\n      <div #members class=\"w3-modal\">\r\n        <div class=\"w3-modal-content\">\r\n          <header class=\"w3-container w3-indigo\">\r\n            <span (click)=\"members.style.display='none'\"\r\n            class=\"w3-button w3-display-topright\">&times;</span>\r\n            <h2>Room Members</h2>\r\n          </header>\r\n          <div class=\"w3-container\">\r\n            <ul *ngIf=\"roomMembers\" class=\"w3-ul\">\r\n              <li *ngFor=\"let member of roomMembers\">\r\n                <img width=\"50\" height=\"50\" class=\"w3-circle\" src=\"http://localhost:2050/image/{{member.userId.profilePicture}}\" alt=\"\">\r\n                <span>{{member.userId.username}}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Rooms/room2/room2.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Rooms/room2/room2.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center start\" style=\"box-sizing: border-box; margin: 0px;\">\r\n  <div style=\"height:95vh;\" fxLayout=\"column\" fxFlex=\"100%\" fxFlex.gt-sm=\"60%\" fxFlex.sm=\"70%\">\r\n    <div class=\"w3-bar w3-teal w3-small\" style=\"height: 5%; margin-top: 3px;\" fxLayoutAlign=\"space-evenly center\">\r\n      <!-- <mat-icon style=\"vertical-align: middle;\" class=\"w3-teal w3-bar-item w3-hover-shadow\">photo</mat-icon> -->\r\n      <img style=\"width: 20px; height: 20px;\" *ngIf=\"patData\" class=\"w3-circle\" src=\"http://localhost:2050/image/{{patData.dp}}\" alt=\"LOGO\">\r\n      <span  class=\"w3-bar-item\" *ngIf=\"patData\">{{patData.username}}</span>\r\n      <div class=\"w3-dropdown-hover\">\r\n        <mat-icon class=\"\">more_horiz</mat-icon>\r\n        <div class=\"w3-dropdown-content w3-bar-block w3-card-4 w3-round-xlarge\">\r\n          <a class=\"w3-bar-item w3-button\" >Info</a>\r\n          <a class=\"w3-bar-item w3-button\" >Block</a>\r\n          <a class=\"w3-bar-item w3-button\">Report</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" style=\"height: 95%;\">\r\n      <mat-card  style=\"margin-top: 0; height: 95%;\">\r\n        <mat-card-content  fxLayout=\"column\" style=\" height: 88%; overflow-y: auto;\">\r\n            <div *ngIf=\"allMessages\">\r\n              <div   *ngFor=\"let item of allMessages\">\r\n                <div *ngIf=\"item.fromId !== User._id\" style=\"background-color: #ECF0F1;\" class=\"w3-card w3-round-large w3-margin-bottom\" fxLayout=\"column\" fxFlex=\"70%\" fxFlex.sm=\"55%\" fxFlex.gt-sm=\"55%\">\r\n                  <header class=\"w3-small\" fxLayout=\"row\"  fxLayoutAlign=\"space-evenly center\"  class=\"\">\r\n                    <img width=\"30\" height=\"30\" class=\"w3-circle\" *ngIf=\"User\" src=\"http://localhost:2050/image/{{patData.dp}}\" alt=\"\">\r\n                    <span>{{patData.username}}</span>\r\n                    <span>{{item.date | date: 'h:mm a'}}</span>\r\n                  </header>\r\n                  <div class=\"w3-container\" style=\"padding-top: 7px;\">\r\n                    {{item.message}}\r\n                  </div>\r\n                </div>\r\n                <!-- <div>for alignment and color </div> -->\r\n                <div *ngIf=\"item.fromId === User._id\" class=\"w3-card w3-round-large w3-indigo w3-margin-bottom\" fxLayout=\"column\" fxLayoutAlign=\"end none\" fxFlexOffset=\"30%\" fxFlex=\"70%\"\r\n                 fxFlexOffset.sm=\"45%\" fxFlex.sm=\"55%\" fxFlexOffset.gt-sm=\"45%\" fxFlex.gt-sm=\"55%\">\r\n                  <header class=\"w3-small\" fxLayout=\"row\"  fxLayoutAlign=\"space-evenly center\"  class=\"\">\r\n                    <img width=\"30\" height=\"30\" class=\"w3-circle\" *ngIf=\"User\" src=\"http://localhost:2050/image/{{User.dp}}\" alt=\"\">\r\n                    <span>{{User.username}}</span>\r\n                    <span>{{item.date | date: 'h:mm a'}}</span>\r\n                  </header>\r\n                  <div class=\"w3-container\" style=\"padding-top: 7px;\">\r\n                      {{item.message}}\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- <div *ngIf=\"item.type === 4 && item.senderId !== User._id\" fxLayout=\"column\" class=\"w3-light-gray\" fxLayoutAlign=\"center center\"  fxFlex=\"70%\"\r\n                 fxFlex.sm=\"55%\" fxFlex.gt-sm=\"55%\" >\r\n                 {{senderName(item.senderId)}} {{item.message}}\r\n                </div> -->\r\n\r\n              </div>\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-footer  style=\"margin-left: auto; height: 8%;\">\r\n              <div fxLayout=\"row\">\r\n                <mat-form-field fxFlex=\"85%\">\r\n                  <input matInput type=\"text\" placeholder=\"message\"  [(ngModel)]=\"input\" >\r\n                </mat-form-field>\r\n                <button mat-button (click)=\"sendMessage()\" class=\"w3-button w3-text-indigo\" fxFlex=\"12px%\"><mat-icon>send</mat-icon></button>\r\n              </div>\r\n            </mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <!-- <div> Members Modal</div> -->\r\n\r\n  </div>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/dashboard/dashboard.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/dashboard/dashboard.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxlayout=\"row\" fxLayoutWrap fxLayoutGap=\"10px\">\r\n  <div fxHide.lt-sm fxFlex='100%' fxFlex.gt-xs='calc(25%-10px)'>\r\n      <mat-card >\r\n        <mat-card-content fxLayout=\"column\">\r\n          <ul class=\"w3-ul\">\r\n            <li class=\"w3-hover-indigo w3-round\">\r\n                <mat-icon class=\"vlign\" *ngIf=\"notification\">notifications_active</mat-icon>\r\n                <mat-icon class=\"vlign\" *ngIf=\"!notification\">notifications_none</mat-icon>\r\n              Notications</li>\r\n            <li class=\"w3-hover-indigo w3-round\">Groups</li>\r\n            <li class=\"w3-hover-indigo w3-round\">Create group</li>\r\n            <li class=\"w3-hover-indigo w3-round\">Friend</li>\r\n            <li class=\"w3-hover-indigo w3-round\">Item 3</li>\r\n          </ul>\r\n        </mat-card-content>\r\n        <mat-card-footer>\r\n\r\n        </mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n  <div fxFlex='100%' fxFlex.gt-xs='calc(50%-10px)'>\r\n    <mat-card >\r\n      <mat-card-content>\r\n        <div class=\"w3-card-4 w3-round-large\" fxLayout=\"column\">\r\n          <header *ngIf=\"User\" class=\"w3-container w3-indigo w3-center\">\r\n            <div class=\"w3-xlarge\">Welcome {{User.username}}!</div>\r\n          </header>\r\n          <div class=\"w3-container\">\r\n            <div class=\"w3-display-container w3-hover-opacity w3-center\" fxLayout=\"row\"\r\n             fxFlex=\"60%\"fxFlex.gt-xs=\"40%\" fxFlexOffset.gt-xs=\"30%\" fxFlexOffset=\"20%\" style=\" padding-top: 5px;\">\r\n                <img class=\" w3-circle w3-hover-shadow w3-border w3-image\" src=\"http://localhost:2050/image/{{User.dp}}\">\r\n              <div class=\"w3-display-middle w3-display-hover w3-black w3-circle\" style=\"width: 60px; height: 60px;\">\r\n                <form  class=\" w3-animate-opacity\" style=\"padding: 0px; margin: 0px;\">\r\n                  <label>\r\n                    <mat-icon >add_a_photo</mat-icon>\r\n                    <input type=\"file\" (change)=\"fileProgress($event)\" name=\"image\" style=\"display: none;\">\r\n                  </label> <br>\r\n                  <mat-icon class=\"w3-round w3-hover-teal\"  (click)=\"Submit()\">arrow_forward_ios</mat-icon>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr style=\" margin: 5px;\">\r\n          <footer fxLayout='row'  class=\"w3-container w3-center\">\r\n              <div fxFlex=\"33.3%\" class=\"w3-large\">About</div>\r\n              <div fxFlex=\"33.3%\" class=\"w3-large\">Status</div>\r\n              <div fxFlex=\"33.3%\" class=\"w3-large\">Mood</div>\r\n          </footer>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxHide.lt-sm fxFlex='100%' fxFlex.gt-xs='calc(25%-10px)'>\r\n    <mat-card >\r\n      <mat-card-content fxLayout=\"column\">\r\n        <ul class=\"w3-ul\">\r\n          <li class=\"w3-hover-indigo w3-round\" > <mat-icon class=\"vlign\">chat</mat-icon> Chat</li>\r\n          <li class=\"w3-hover-indigo w3-round\" (click)=\"modal.style.display='block'\"> <mat-icon class=\"vlign\">group</mat-icon> Groups</li>\r\n          <li class=\"w3-hover-indigo w3-round\" (click)=\"createGroup.style.display='block'\"> <mat-icon class=\"vlign\">group_add</mat-icon> Create group</li>\r\n          <li class=\"w3-hover-indigo w3-round\"> <mat-icon class=\"vlign\">people</mat-icon>Followers</li>\r\n          <li class=\"w3-hover-indigo w3-round\"> <mat-icon class=\"vlign\">person_add</mat-icon>Following</li>\r\n        </ul>\r\n      </mat-card-content>\r\n      <mat-card-footer>\r\n\r\n      </mat-card-footer>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div> Members Modal</div> -->\r\n  <div class=\"w3-container\" style=\"max-width: 400px;\">\r\n    <div #modal class=\"w3-modal\">\r\n      <div class=\"w3-modal-content w3-center\">\r\n        <header class=\"w3-container w3-indigo\">\r\n          <span (click)=\"modal.style.display='none'\"\r\n          class=\"w3-button w3-display-topright\">&times;</span>\r\n          <h2>List of all Public Groups</h2>\r\n        </header>\r\n        <div class=\"w3-container\">\r\n          <ul *ngIf=\"allRooms\" class=\"w3-ul\">\r\n            <li *ngFor=\"let item of allRooms\" (click)=\"roomvice.roomData(item)\"> {{item.name}}</li>\r\n\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div> Create group Modal</div> -->\r\n  <div class=\"w3-container\" >\r\n      <div #createGroup class=\"w3-modal\">\r\n        <div class=\"w3-modal-content w3-center\"   fxLayout='column'>\r\n          <header class=\"w3-container w3-indigo\" fxLayout='column'>\r\n            <span (click)=\"createGroup.style.display='none'\"\r\n            class=\"w3-button w3-display-topright\">&times;</span>\r\n            <h2 fxLayout='column'>Create a chat group</h2>\r\n          </header>\r\n          <div class=\"w3-container\">\r\n              <form [formGroup]=\"newGroup\" class=\"w3-padding-large\">\r\n                  <mat-form-field fxLayout=\"column\">\r\n                    <input matInput placeholder=\"Group name\" class=\"w3-block\" formControlName=\"groupname\" required >\r\n                    <mat-error *ngIf=\"GroupName.touched && GroupName.invalid\">\r\n                      <div *ngIf=\"GroupName.hasError('required')\"> Group name is required </div>\r\n                      <div *ngIf=\"GroupName.hasError('pattern')\">\r\n                      Must be minimum of 3 and cannot beging with a number or contain special characters except underscore\r\n                      </div>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                  <div fxLayout=\"column\">\r\n                    <mat-radio-group aria-label=\"Select Group type\" formControlName=\"type\"  required>\r\n                        <mat-radio-button class=\"w3-margin\" value=\"0\">Private</mat-radio-button>\r\n                        <mat-radio-button class=\"w3-margin\" value=\"1\">Public</mat-radio-button>\r\n                    </mat-radio-group>\r\n                    <mat-error *ngIf=\"GroupName.touched && Type.invalid\">\r\n                      Please select an option\r\n                    </mat-error>\r\n                  </div>\r\n                  <div fxLayout=\"column\">\r\n                    <button mat-button class=\"w3-indigo w3-hover-pink\" (click)=\"Group(createGroup)\" >Create Room</button>\r\n                    <div  fxLayout=\"column\" fxALayoutlign=\"center center\">\r\n                      <div fxLayout=\"row\" fxALayoutlign=\"center center\" style=\"margin-top: 10px;\">\r\n                        <div fxFlexOffset=\"46%\" *ngIf=\"startCreateRoom\" class=\"w3-spin spinner w3-circle\"></div>\r\n                      </div>\r\n                      <mat-error style=\"margin-top: 10px;\" *ngIf=\"createGroupErrorMessage\">{{createGroupErrorMessage}}</mat-error>\r\n                      <div style=\"margin-top: 10px;\" *ngIf=\"createGroupSuccessMessage\">{{createGroupSuccessMessage}}</div>\r\n                    </div>\r\n                  </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n<!-- <nav class=\"w3-sidebar w3-bar-block w3-card\" #sidebar>\r\n  <div class=\"w3-container w3-theme-d2\">\r\n    <span (click)=\"sidebar.style.display='none'\" class=\"w3-button w3-display-topright w3-large\">X</span>\r\n    <br>\r\n    <div class=\"w3-padding w3-center\">\r\n      <img class=\"w3-circle\" src=\"img_avatar.jpg\" alt=\"avatar\" style=\"width:75%\">\r\n    </div>\r\n  </div>\r\n  <a class=\"w3-bar-item w3-button\" href=\"#\">Movies</a>\r\n  <a class=\"w3-bar-item w3-button\" href=\"#\">Friends</a>\r\n  <a class=\"w3-bar-item w3-button\" href=\"#\">Messages</a>\r\n  </nav>\r\n\r\n  <header class=\"w3-bar w3-card w3-theme\">\r\n    <button class=\"w3-bar-item w3-button w3-xxxlarge w3-hover-theme\" (click)=\"sidebar.style.display='block'\" >&#9776;</button>\r\n    <h1 class=\"w3-bar-item\">Movies</h1>\r\n  </header> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/foget-password/foget-password.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/foget-password/foget-password.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>foget-password works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"w3-container w3-padding-large  w3-margin-top \" fxLayoutAlign=\"center center\" fxFlex=\"100%\">\r\n  <div class=\" w3-card w3-padding-32 w3-round-large\" >\r\n    <div class=\"w3-container\" fxLayoutAlign=\"center center\">\r\n      <h4 class=\"w3-indigo w3-padding-large\">Please Login Here</h4>\r\n    </div>\r\n    <form class=\"w3-container\" [formGroup]='login'>\r\n\r\n      <mat-form-field fxLayout=\"column\">\r\n        <input matInput placeholder=\"Email\" class=\"w3-block\" formControlName=\"email\" required >\r\n        <!-- <mat-icon>home</mat-icon> -->\r\n        <mat-error *ngIf=\"Email.touched && Email.invalid \">\r\n        <div *ngIf=\"Email.hasError('email')\"> Invalid email </div>\r\n        <div *ngIf=\"Email.hasError('required')\"> Email is required</div>\r\n          </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxLayout=\"column\">\r\n        <input matInput placeholder=\"Password\" formControlName=\"password\"  type=\"password\" required>\r\n        <mat-error *ngIf=\"Password.touched && Password.invalid\"> Password is required </mat-error>\r\n      </mat-form-field>\r\n\r\n      <div fxLayout=\"column\" class=\"w3-margin-top\">\r\n        <button (click)=\"submitForm()\" class=\"w3-indigo w3-hover-pink\" mat-button>Login</button>\r\n        <div *ngIf=\"processing\" fxALayoutlign=\" center center\">\r\n          <div class=\"w3-spin spinner w3-circle\" ></div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"w3-container w3-margin\">\r\n      <div fxLayoutAlign=\"center center\"><a mat-button routerLink=\"/resetpassword\"class=\"w3-text-red\" >Foget Password?</a></div>\r\n      <div fxLayoutAlign=\"center center\"><a mat-button routerLink=\"/signup\" class=\"w3-text-indigo\">Sign up here</a></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/signup/signup.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/signup/signup.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"w3-container w3-padding-large w3-margin-top\" fxLayoutAlign=\"center center\" fxFlex=\"100%\" >\r\n  <div class=\"w3-card-2 w3-padding-16 w3-round-large\" >\r\n    <div class=\"w3-container\" fxLayoutAlign=\"center center\">\r\n      <h4 class=\"w3-indigo w3-padding-large\">Please Sign Up Here</h4>\r\n    </div>\r\n    <form class=\"w3-container\" [formGroup]='signup' class=\" w3-padding-large\">\r\n      <mat-form-field fxLayout=\"column\">\r\n        <input matInput placeholder=\"Username\" class=\"w3-block\" formControlName=\"username\" required >\r\n        <mat-error *ngIf=\"Username.touched && Username.invalid\">\r\n          <div *ngIf=\"Username.hasError('required')\"> Username is required </div>\r\n          <div *ngIf=\"Username.hasError('pattern')\">\r\n          Must be minimum of 3 and cannot beging with a number or contain special characters except underscore\r\n          </div>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxLayout=\"column\">\r\n        <input matInput placeholder=\"Email\" class=\"w3-block\" formControlName=\"email\" required >\r\n        <!-- <mat-icon>home</mat-icon> -->\r\n        <mat-error *ngIf=\"Email.touched && Email.invalid \">\r\n        <div *ngIf=\"Email.hasError('email')\"> Invalid email </div>\r\n        <div *ngIf=\"Email.hasError('required')\"> Email is required</div>\r\n          </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxLayout=\"column\">\r\n        <input matInput placeholder=\"Password\" formControlName=\"password\"  type=\"password\" required>\r\n        <mat-error *ngIf=\"Password.touched && Password.invalid\"> Password is required with minimum length of 7 </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxLayout=\"column\">\r\n        <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\"  type=\"password\" required>\r\n          <mat-error *ngIf=\"ConfirmPassword.touched && ConfirmPassword.invalid && Password.valid\">\r\n            <div *ngIf=\"ConfirmPassword.hasError('required')\">This field is required</div>\r\n            <div *ngIf=\" !ConfirmPassword.hasError('required') && ConfirmPassword.dirty && ConfirmPassword.value !== Password.value\">\r\n              Unmatched password\r\n            </div>\r\n          </mat-error>\r\n      </mat-form-field>\r\n      <div fxLayout=\"column\">\r\n        <mat-radio-group aria-label=\"Select an option\" formControlName=\"sex\"  required>\r\n            <mat-radio-button class=\"w3-margin\" value=\"male\">Male</mat-radio-button>\r\n            <mat-radio-button class=\"w3-margin\" value=\"female\">Female</mat-radio-button>\r\n        </mat-radio-group>\r\n        <mat-error *ngIf=\"submitted && Sex.invalid\">\r\n          Please select an option\r\n        </mat-error>\r\n      </div>\r\n      <div fxLayout=\"column\"s>\r\n        <button type=\"submit\" [class.disabled]=\"signup.invalid\" class=\"w3-indigo w3-hover-pink\" mat-button\r\n        (click)=\"submitForm()\">Sign Up</button>\r\n        <div *ngIf=\"processing\" class=\"w3-spin spinner w3-circle\" fxALayoutlign=\" center center\"></div>\r\n          <mat-error *ngIf=\"errorMessage\">{{errorMessage}}</mat-error>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"w3-container w3-margin\">\r\n        <div fxLayoutAlign=\"center center\"><a mat-button routerLink=\"/login\" class=\"w3-text-indigo\">Have an account?</a></div>\r\n      </div>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w3-bar w3-small w3-indigo\">\r\n  <span class=\"w3-bar-item w3-button\" (click)=\"sidenav.toggle()\">&#9776;</span>\r\n    <a href=\"#\" class=\"w3-bar-item w3-button w3-small\">Home</a>\r\n    <a href=\"#\" class=\"w3-bar-item w3-button\">Link 1</a>\r\n    <a href=\"#\" class=\"w3-bar-item w3-button\">Link 2</a>\r\n    <a href=\"#\" class=\"w3-bar-item w3-button\">Link 3</a>\r\n  </div>\r\n<!-- <mat-toolbar   color=\"primary\">\r\n  <mat-toolbar-row style=\"height: 15px !important;\">\r\n    <span class=\"menu-spacer\"></span>\r\n    <div>\r\n      <a mat-button> menu</a>\r\n      <a mat-button> menu</a>\r\n      <a mat-button> menu</a>\r\n      <a mat-button> menu</a>\r\n      <a mat-button> menu</a>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar> -->\r\n\r\n<mat-sidenav-container>\r\n    <!-- mode=\"side\" opened=\"false\" -->\r\n  <mat-sidenav  fxLayout=\"column\" #sidenav>\r\n    <mat-nav-list fxFlex=\"150px\"  (click)=\"sidenav.toggle()\">\r\n      <a mat-list-item routerLink=\"/signup\">signup</a>\r\n      <a mat-list-item routerLink=\"/login\">Login</a>\r\n      <a mat-list-item routerLink= \"/room\">room</a>\r\n      <a mat-list-item routerLink= \"/dashboard\">Dashboard</a>\r\n      <a mat-list-item>side nav</a>\r\n      <a mat-list-item>side nav</a>\r\n      <a mat-list-item>side nav</a>\r\n      <a mat-list-item>side nav</a>\r\n      <a mat-list-item>side nav</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <div style=\"height: 100vh; overflow-y: hidden; margin: 0%; padding: 0px;\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/Rooms/room.service.ts": 
        /*!***************************************!*\
          !*** ./src/app/Rooms/room.service.ts ***!
          \***************************************/
        /*! exports provided: RoomService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function () { return RoomService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var RoomService = /** @class */ (function () {
                function RoomService(router, http) {
                    this.router = router;
                    this.http = http;
                    this.data = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ name: null, creator: null, _id: null, logo: null, type: null, date: null });
                    this.data$ = this.data.asObservable();
                    this.PC = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ username: null, code: null, token: null, _id: null, sex: null, email: null, dp: null });
                    this.PC$ = this.PC.asObservable();
                    this.httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                            'Content-type': 'application/json',
                            token: localStorage.token ? JSON.parse(localStorage.token) : '',
                        })
                    };
                    // this.url = 'http://192.168.43.41:2050';
                }
                RoomService.prototype.roomData = function (room) {
                    if (room) {
                        room.logo = room.logo ? room.logo : 'group.jpg';
                        localStorage.roomData = JSON.stringify(room);
                        this.data.next(room);
                        this.router.navigate(['/room']);
                    }
                };
                RoomService.prototype.pcData = function (pc) {
                    if (pc) {
                        pc.token = null;
                        pc.dp = pc.dp ? pc.dp : pc.sex + '.jpg';
                        localStorage.pcData = JSON.stringify(pc);
                        this.PC.next(pc);
                        this.router.navigate(['/privatechat']);
                    }
                };
                RoomService.prototype.allPcMessages = function (pcId) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.http.get("/api/getRoomMessages/" + pcId, _this.httpOption)
                            .subscribe(function (data) {
                            // console.log(` all messages fetched are ${JSON.stringify(data)}`);
                            observer.next(data);
                        });
                    });
                };
                RoomService.prototype.joinRoom = function (roomId) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.http.get("/api/joinRoom/" + roomId, _this.httpOption)
                            .subscribe(function (data) {
                            console.log(" new room member is fetched are " + JSON.stringify(data));
                            observer.next(data);
                        });
                    });
                };
                RoomService.prototype.leaveRoom = function (roomId, userId) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.http.get("/api/leaveRoom/" + roomId + "/" + userId, _this.httpOption)
                            .subscribe(function (data) {
                            console.log(" leave response is " + JSON.stringify(data));
                            observer.next(data);
                        });
                    });
                };
                RoomService.prototype.allMessages = function (roomId) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.http.get("/api/getRoomMessages/" + roomId, _this.httpOption)
                            .subscribe(function (data) {
                            // console.log(` all messages fetched are ${JSON.stringify(data)}`);
                            observer.next(data);
                        });
                    });
                };
                RoomService.prototype.allMembers = function (roomId) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.http.get("/api/getMembers/" + roomId, _this.httpOption)
                            .subscribe(function (members) {
                            console.log(JSON.stringify(members));
                            observer.next(members);
                        });
                    });
                };
                RoomService.prototype.allRooms = function () {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.http.get("/api/getRooms", _this.httpOption)
                            .subscribe(function (rooms) {
                            console.log(JSON.stringify(rooms));
                            observer.next(rooms);
                        });
                    });
                };
                return RoomService;
            }());
            RoomService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RoomService);
            /***/ 
        }),
        /***/ "./src/app/Rooms/room/room.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/Rooms/room/room.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Jvb21zL3Jvb20vcm9vbS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/Rooms/room/room.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/Rooms/room/room.component.ts ***!
          \**********************************************/
        /*! exports provided: RoomComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function () { return RoomComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
            /* harmony import */ var _User_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../User/user.service */ "./src/app/User/user.service.ts");
            /* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../room.service */ "./src/app/Rooms/room.service.ts");
            var RoomComponent = /** @class */ (function () {
                function RoomComponent(vice, uservice, roomvice) {
                    this.vice = vice;
                    this.uservice = uservice;
                    this.roomvice = roomvice;
                    this.allMessages = [];
                    this.roomMembers = [];
                }
                RoomComponent.prototype.joinRoom = function () {
                    var _this = this;
                    var messageFace = { senderId: this.User._id, roomId: this.roomData._id, message: 'joined', type: 4, date: new Date() };
                    var senser = this.roomMembers.filter(function (data) { return data.userId._id === _this.User._id; });
                    if (senser.length < 1) {
                        this.roomvice.joinRoom(this.roomData._id).subscribe(function (data) {
                            if (data.length > 0) {
                                _this.roomMembers = data;
                                _this.vice.join(messageFace);
                            }
                        });
                    }
                    else {
                        alert('already a member');
                    }
                };
                RoomComponent.prototype.leaveRoom = function () {
                    var _this = this;
                    var messageFace = { senderId: this.User._id, roomId: this.roomData._id, message: 'left', type: 4, date: new Date() };
                    var senser = this.roomMembers.filter(function (data) { return data.userId._id === _this.User._id; });
                    if (senser.length > 0) {
                        this.roomvice.leaveRoom(this.roomData._id, this.User._id).subscribe(function (data) {
                            _this.roomMembers = data;
                            _this.vice.leave(messageFace);
                        });
                    }
                    else {
                        alert('Yet to be a memeber');
                    }
                };
                RoomComponent.prototype.getLeaveMessage = function () {
                    var _this = this;
                    this.vice.leaveNotification().subscribe(function (data) {
                        _this.allMessages.push(data);
                    });
                };
                RoomComponent.prototype.senderName = function (id) {
                    if (id && this.roomMembers) {
                        var senser = this.roomMembers.filter(function (data) { return data.userId._id === id; });
                        if (senser.length > 0) {
                            return senser[0].userId.username;
                        }
                    }
                };
                RoomComponent.prototype.checkMember = function (id) {
                    if (id && this.roomMembers) {
                        var senser = this.roomMembers.filter(function (data) { return data.userId._id === id; });
                        if (senser.length > 0) {
                            return true;
                        }
                        return false;
                    }
                };
                RoomComponent.prototype.senderDp = function (id) {
                    if (id && this.roomMembers) {
                        var senser = this.roomMembers.filter(function (data) { return data.userId._id === id; });
                        if (senser.length > 0) {
                            return senser[0].userId.dp ? senser[0].userId.dp : senser[0].userId.sex + '.jpg';
                        }
                    }
                };
                RoomComponent.prototype.sender = function () {
                    var _this = this;
                    if (this.input) {
                        var senser = this.roomMembers.filter(function (data) { return data.userId._id === _this.User._id; });
                        console.log(JSON.stringify(senser));
                        if (senser.length < 1) {
                            return alert('Yet to be a member please join the group to send a message');
                        }
                        var messageFace = { senderId: this.User._id, roomId: this.roomData._id, message: this.input, type: 2, date: new Date() };
                        this.vice.sendMessage(messageFace);
                    }
                    this.input = '';
                };
                RoomComponent.prototype.getMembers = function () {
                    var _this = this;
                    this.roomvice.allMembers(this.roomData._id).subscribe(function (members) { return _this.roomMembers = members; });
                };
                RoomComponent.prototype.getRoomData = function () {
                    var _this = this;
                    if (localStorage.roomData) {
                        return this.roomData = JSON.parse(localStorage.roomData);
                    }
                    this.roomvice.data$.subscribe(function (data) { return _this.roomData = data; });
                };
                RoomComponent.prototype.getUserDetails = function () {
                    var _this = this;
                    this.uservice.USER$.subscribe(function (data) { return _this.User = data; });
                };
                RoomComponent.prototype.sentMessages = function () {
                    var _this = this;
                    this.vice.getMessage().subscribe(function (data) {
                        return _this.allMessages.push(data);
                    });
                };
                RoomComponent.prototype.getJoinMessages = function () {
                    var _this = this;
                    this.vice.joinNotification().subscribe(function (data) {
                        _this.allMessages.push(data.message);
                        _this.roomMembers.push(data.member);
                        console.log(JSON.stringify(_this.roomMembers));
                    });
                };
                RoomComponent.prototype.getAllMessages = function () {
                    var _this = this;
                    this.roomvice.allMessages(this.roomData._id).subscribe(function (data) {
                        if (data.length > 0) {
                            _this.allMessages = data;
                        }
                    });
                };
                RoomComponent.prototype.ngOnInit = function () {
                    this.uservice.returnUser().subscribe();
                    this.getRoomData();
                    this.getUserDetails();
                    this.getAllMessages();
                    this.sentMessages();
                    this.getJoinMessages();
                    this.getMembers();
                    // this.conceal();
                };
                RoomComponent.prototype.ngOnDestroy = function () {
                    this.vice.room = false;
                };
                return RoomComponent;
            }());
            RoomComponent.ctorParameters = function () { return [
                { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] },
                { type: _User_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"] }
            ]; };
            RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-room',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./room.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Rooms/room/room.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./room.component.css */ "./src/app/Rooms/room/room.component.css")).default]
                })
            ], RoomComponent);
            /***/ 
        }),
        /***/ "./src/app/Rooms/room2/room2.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/Rooms/room2/room2.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Jvb21zL3Jvb20yL3Jvb20yLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/Rooms/room2/room2.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/Rooms/room2/room2.component.ts ***!
          \************************************************/
        /*! exports provided: Room2Component */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room2Component", function () { return Room2Component; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
            /* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../room.service */ "./src/app/Rooms/room.service.ts");
            /* harmony import */ var _User_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../User/user.service */ "./src/app/User/user.service.ts");
            var Room2Component = /** @class */ (function () {
                function Room2Component(vice, roomvice, uservice) {
                    this.vice = vice;
                    this.roomvice = roomvice;
                    this.uservice = uservice;
                    this.allMessages = [];
                }
                Room2Component.prototype.getPatData = function () {
                    var _this = this;
                    if (localStorage.pcData) {
                        return this.patData = JSON.parse(localStorage.pcData);
                    }
                    this.roomvice.PC$.subscribe(function (data) { return _this.patData = data; });
                };
                Room2Component.prototype.getPcId = function () {
                    if (this.User.username.toLowerCase() > this.patData.username.toLowerCase()) {
                        return this.User._id + '_' + this.patData._id;
                    }
                    else {
                        return this.patData._id + '_' + this.User._id;
                    }
                };
                Room2Component.prototype.getAllMessages = function () {
                    var _this = this;
                    var pcId = this.getPcId();
                    this.roomvice.allPcMessages(pcId).subscribe(function (data) {
                        if (data.length > 0) {
                            _this.allMessages = data;
                        }
                    });
                };
                Room2Component.prototype.getUserData = function () {
                    var _this = this;
                    this.uservice.USER$.subscribe(function (data) { return _this.User = data; });
                };
                Room2Component.prototype.sendMessage = function () {
                    if (this.input) {
                        var mess = {
                            message: this.input, pcId: this.getPcId(), type: 2, fromId: this.User._id, toId: this.patData._id, date: new Date()
                        };
                        this.vice.sendPcMessage(mess);
                    }
                    this.input = '';
                };
                Room2Component.prototype.sentMessages = function () {
                    var _this = this;
                    this.vice.getPcMessage().subscribe(function (data) {
                        return _this.allMessages.push(data);
                    });
                };
                Room2Component.prototype.ngOnInit = function () {
                    this.getPatData();
                    this.getAllMessages();
                    this.getUserData();
                };
                return Room2Component;
            }());
            Room2Component.ctorParameters = function () { return [
                { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] },
                { type: _room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"] },
                { type: _User_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            Room2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-room2',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./room2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Rooms/room2/room2.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./room2.component.css */ "./src/app/Rooms/room2/room2.component.css")).default]
                })
            ], Room2Component);
            /***/ 
        }),
        /***/ "./src/app/User/dashboard/dashboard.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/User/dashboard/dashboard.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".vlign {\r\n  vertical-align: middle !important;\r\n}\r\n\r\n.spinner{\r\n  width: 25px;\r\n  height: 25px;\r\n  border-bottom: 3px dotted #3F51B5;\r\n  border-left: 2px dotted #3F51B5;\r\n  border-right: 1px solid #3F51B5;\r\n  border-top: 3px dotted #3F51B5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL1VzZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZsaWduIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGlubmVye1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAzcHggZG90dGVkICMzRjUxQjU7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgIzNGNTFCNTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjM0Y1MUI1O1xyXG4gIGJvcmRlci10b3A6IDNweCBkb3R0ZWQgIzNGNTFCNTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/User/dashboard/dashboard.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/User/dashboard/dashboard.component.ts ***!
          \*******************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../user.service */ "./src/app/User/user.service.ts");
            /* harmony import */ var src_app_Rooms_room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Rooms/room.service */ "./src/app/Rooms/room.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(http, fb, uservice, roomvice) {
                    this.http = http;
                    this.fb = fb;
                    this.uservice = uservice;
                    this.roomvice = roomvice;
                    this.photo = null;
                    this.httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-type': 'application/json',
                            token: localStorage.token ? JSON.parse(localStorage.token) : '',
                        })
                    };
                    this.newGroup = this.fb.group({
                        groupname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(^[a-zA-Z])([a-zA-Z0-9_]{2,})$')]],
                        type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(1),]]
                    });
                }
                Object.defineProperty(DashboardComponent.prototype, "GroupName", {
                    get: function () { return this.newGroup.get('groupname'); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DashboardComponent.prototype, "Type", {
                    get: function () { return this.newGroup.get('type'); },
                    enumerable: true,
                    configurable: true
                });
                DashboardComponent.prototype.Submit = function () {
                    var _this = this;
                    console.log('here');
                    if (this.photo) {
                        var httpOption = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                // 'Content-type': 'application/json',
                                token: localStorage.token ? JSON.parse(localStorage.token) : '',
                            })
                        };
                        try {
                            var formMedia = new FormData();
                            formMedia.append('image', this.photo);
                            this.http.post('/api/upload', formMedia, httpOption)
                                .subscribe(function (data) { return _this.User.dp = data.dp; });
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                    else {
                        return;
                    }
                };
                DashboardComponent.prototype.Group = function (modal) {
                    var _this = this;
                    this.startCreateRoom = true;
                    this.createGroupErrorMessage = '';
                    this.createGroupSuccessMessage = '';
                    if (this.newGroup.valid) {
                        var formData = { name: this.GroupName.value, type: Number(this.Type.value) };
                        this.http.post('/api/createRoom', formData, this.httpOption)
                            .subscribe(function (data) {
                            if (data._id) {
                                _this.allRooms.push(data);
                                _this.createGroupSuccessMessage = data.name + " has been successfuly created";
                                setTimeout((function () { return modal.style.display = 'none'; }), 3000);
                            }
                            else {
                                _this.createGroupErrorMessage = 'Group already exists, please use another name or join the group';
                            }
                            // return setTimeout((() => this.createGroupErrorMessage = '' ), 3000);
                        });
                    }
                    else {
                        setTimeout((function () { return _this.startCreateRoom = false; }), 3000);
                        this.createGroupErrorMessage = 'All fields are required';
                    }
                    this.startCreateRoom = false;
                    return setTimeout((function () { _this.createGroupErrorMessage = ''; _this.createGroupSuccessMessage = ''; }), 3000);
                };
                DashboardComponent.prototype.fileProgress = function (file) {
                    console.log('parsed');
                    this.photo = file.target.files[0];
                    console.log(this.photo.name + " and " + this.photo.size + " and " + this.photo.type);
                };
                DashboardComponent.prototype.getUserDetails = function () {
                    var _this = this;
                    this.uservice.USER$.subscribe(function (data) {
                        data.dp = data.dp ? data.dp : data.sex + '.jpg';
                        _this.User = data;
                        console.log(_this.User);
                    });
                };
                DashboardComponent.prototype.getAllRooms = function () {
                    var _this = this;
                    this.roomvice.allRooms().subscribe(function (data) {
                        _this.allRooms = data;
                        // console.log(`all room is ${JSON.stringify(this.allRooms)}`);
                    });
                };
                DashboardComponent.prototype.getFollowers = function () {
                };
                DashboardComponent.prototype.getFollowing = function () {
                };
                DashboardComponent.prototype.ngOnInit = function () {
                    this.getUserDetails();
                    this.getAllRooms();
                    this.uservice.returnUser().subscribe();
                };
                DashboardComponent.prototype.ngOnDestroy = function () {
                    // this.uservice.returnUser().unsuscribe()
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: src_app_Rooms_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/User/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/User/foget-password/foget-password.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/User/foget-password/foget-password.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvZm9nZXQtcGFzc3dvcmQvZm9nZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/User/foget-password/foget-password.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/User/foget-password/foget-password.component.ts ***!
          \*****************************************************************/
        /*! exports provided: FogetPasswordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FogetPasswordComponent", function () { return FogetPasswordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FogetPasswordComponent = /** @class */ (function () {
                function FogetPasswordComponent() {
                }
                FogetPasswordComponent.prototype.ngOnInit = function () {
                };
                return FogetPasswordComponent;
            }());
            FogetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-foget-password',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./foget-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/foget-password/foget-password.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./foget-password.component.css */ "./src/app/User/foget-password/foget-password.component.css")).default]
                })
            ], FogetPasswordComponent);
            /***/ 
        }),
        /***/ "./src/app/User/login/login.component.css": 
        /*!************************************************!*\
          !*** ./src/app/User/login/login.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/User/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/User/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../user.service */ "./src/app/User/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_guard_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guard/guard.service */ "./src/app/guard/guard.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(fb, uservice, route, guard) {
                    this.fb = fb;
                    this.uservice = uservice;
                    this.route = route;
                    this.guard = guard;
                    this.processing = false;
                    this.login = this.fb.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                }
                Object.defineProperty(LoginComponent.prototype, "Email", {
                    get: function () { return this.login.get('email'); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LoginComponent.prototype, "Password", {
                    get: function () { return this.login.get('password'); },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.submitForm = function () {
                    var _this = this;
                    if (this.login.valid) {
                        this.processing = true;
                        console.log('processing');
                        var form = { email: this.Email.value, password: this.Password.value };
                        this.uservice.userLogin(form)
                            .subscribe(function (collector) {
                            if (collector._id) {
                                console.log(collector);
                                _this.uservice.userData.next(collector);
                                var url = _this.guard.directedToUrl ? _this.route.parseUrl(_this.guard.directedToUrl) : '/dashboard';
                                _this.route.navigateByUrl(url);
                            }
                            else {
                                console.log('cannot fetch user');
                            }
                        }, function (error) {
                            console.log('error data is' + error.code);
                        });
                        this.processing = false;
                    }
                    else {
                        return this.errorMessage = 'All the fields are required';
                    }
                };
                LoginComponent.prototype.ngOnInit = function () {
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_guard_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuardService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/User/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/User/signup/signup.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/User/signup/signup.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".spinner{\r\n  width: 25px;\r\n  height: 25px;\r\n  border-bottom: 3px dotted #3F51B5;\r\n  border-left: 2px dotted #3F51B5;\r\n  border-right: 1px solid #3F51B5;\r\n  border-top: 3px dotted #3F51B5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL1VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXJ7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBkb3R0ZWQgIzNGNTFCNTtcclxuICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjM0Y1MUI1O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzRjUxQjU7XHJcbiAgYm9yZGVyLXRvcDogM3B4IGRvdHRlZCAjM0Y1MUI1O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/User/signup/signup.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/User/signup/signup.component.ts ***!
          \*************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../user.service */ "./src/app/User/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(fb, uservice, route) {
                    this.fb = fb;
                    this.uservice = uservice;
                    this.route = route;
                    this.processing = false;
                    this.submitted = false;
                    this.signup = this.fb.group({
                        username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(^[a-zA-Z])([a-zA-Z0-9_]{2,})$')]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(^[a-zA-Z0-9_-]{7,})$')]],
                        confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        sex: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                }
                Object.defineProperty(SignupComponent.prototype, "Email", {
                    get: function () { return this.signup.get('email'); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "Username", {
                    get: function () { return this.signup.get('username'); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "Password", {
                    get: function () { return this.signup.get('password'); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "ConfirmPassword", {
                    get: function () { return this.signup.get('confirmPassword'); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "Sex", {
                    get: function () { return this.signup.get('sex'); },
                    enumerable: true,
                    configurable: true
                });
                SignupComponent.prototype.submitForm = function () {
                    var _this = this;
                    this.processing = true;
                    this.submitted = true;
                    if (this.signup.valid) {
                        console.log('processing');
                        var form = { username: this.Username.value, email: this.Email.value, password: this.Password.value, sex: this.Sex.value };
                        this.uservice.userSignup(form)
                            .subscribe(function (collector) {
                            if (collector) {
                                _this.uservice.userData.next(collector);
                                console.log(JSON.stringify(collector));
                                _this.route.navigate(['/dashboard']);
                            }
                            else {
                                console.log(JSON.stringify(collector));
                                console.log('from error scope');
                                console.log(collector);
                                // this.errorMessage = collector;
                            }
                        });
                    }
                    else {
                        return this.errorMessage = 'Incomplete, all the fields are required';
                    }
                    setTimeout((function () { _this.processing = false; }), 3000);
                };
                SignupComponent.prototype.ngOnInit = function () {
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/User/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/User/user.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/User/user.service.ts ***!
          \**************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _guard_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guard/guard.service */ "./src/app/guard/guard.service.ts");
            var UserService = /** @class */ (function () {
                function UserService(Http, guard) {
                    this.Http = Http;
                    this.guard = guard;
                    this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({ code: null, username: null, email: null, dp: null, _id: null, sex: null, token: null });
                    this.USER$ = this.userData.asObservable();
                    this.httpOption = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-type': 'application/json',
                            token: localStorage.token ? JSON.parse(localStorage.token) : '',
                        })
                    };
                    // this.url = 'http://192.168.43.41:2050';
                }
                UserService.prototype.returnUser = function () {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                        _this.Http.get("/api/returnUser", _this.httpOption)
                            .subscribe(function (data) {
                            if (data._id) {
                                console.log(JSON.stringify(data));
                                data.dp = data.dp ? data.dp : data.sex + '.jpg';
                                _this.userData.next(data);
                            }
                            observer.next(data);
                        });
                    });
                };
                UserService.prototype.userSignup = function (form) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                        _this.Http.post("/api/signup", form, _this.httpOption)
                            .subscribe(function (data) {
                            if (data.token) {
                                localStorage.token = JSON.stringify(data.token);
                                _this.guard.loggedIn.next(true);
                            }
                            _this.userData.next(data);
                            observer.next(data);
                        });
                    });
                };
                UserService.prototype.userLogin = function (form) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                        _this.Http.post("/api/login", form, _this.httpOption)
                            .subscribe(function (data) {
                            if (data.token) {
                                localStorage.token = JSON.stringify(data.token);
                                _this.guard.loggedIn.next(true);
                            }
                            _this.userData.next(data);
                            observer.next(data);
                        });
                    });
                };
                UserService.prototype.getFollowers = function (acceptorId) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                        _this.Http.get("/api/followers/" + acceptorId, _this.httpOption)
                            .subscribe(function (data) {
                            if (data.length > 0) {
                                console.log(JSON.stringify(data));
                                observer.next(data);
                            }
                        });
                    });
                };
                UserService.prototype.getFollowing = function (initiatorId) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                        _this.Http.get("/api/following/" + initiatorId, _this.httpOption)
                            .subscribe(function (data) {
                            if (data.length > 0) {
                                console.log(JSON.stringify(data));
                                observer.next(data);
                            }
                        });
                    });
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _guard_guard_service__WEBPACK_IMPORTED_MODULE_4__["GuardService"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/angular-material.module.ts": 
        /*!********************************************!*\
          !*** ./src/app/angular-material.module.ts ***!
          \********************************************/
        /*! exports provided: AngularMaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () { return AngularMaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var AngularMaterialModule = /** @class */ (function () {
                function AngularMaterialModule() {
                }
                return AngularMaterialModule;
            }());
            AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
                    ],
                    exports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
                    ],
                    providers: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                    ]
                })
            ], AngularMaterialModule);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule, routingComponents */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function () { return routingComponents; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _Rooms_room_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rooms/room/room.component */ "./src/app/Rooms/room/room.component.ts");
            /* harmony import */ var _User_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User/login/login.component */ "./src/app/User/login/login.component.ts");
            /* harmony import */ var _User_foget_password_foget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User/foget-password/foget-password.component */ "./src/app/User/foget-password/foget-password.component.ts");
            /* harmony import */ var _User_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User/dashboard/dashboard.component */ "./src/app/User/dashboard/dashboard.component.ts");
            /* harmony import */ var _Rooms_room2_room2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Rooms/room2/room2.component */ "./src/app/Rooms/room2/room2.component.ts");
            /* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
            /* harmony import */ var _guard_exit_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/exit.guard */ "./src/app/guard/exit.guard.ts");
            /* harmony import */ var _User_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User/signup/signup.component */ "./src/app/User/signup/signup.component.ts");
            var routes = [
                { path: 'login', component: _User_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'signup', component: _User_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], canDeactivate: [_guard_exit_guard__WEBPACK_IMPORTED_MODULE_9__["ExitGuard"]] },
                { path: 'resetpassword', component: _User_foget_password_foget_password_component__WEBPACK_IMPORTED_MODULE_5__["FogetPasswordComponent"] },
                { path: 'privatechat', component: _Rooms_room2_room2_component__WEBPACK_IMPORTED_MODULE_7__["Room2Component"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
                { path: 'room', component: _Rooms_room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
                { path: 'dashboard', component: _User_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
                { path: '', redirectTo: '/login', pathMatch: 'full' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], AppRoutingModule);
            var routingComponents = [_Rooms_room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"], _User_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _Rooms_room2_room2_component__WEBPACK_IMPORTED_MODULE_7__["Room2Component"],
                _User_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _User_foget_password_foget_password_component__WEBPACK_IMPORTED_MODULE_5__["FogetPasswordComponent"], _User_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]];
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
            /* harmony import */ var _User_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User/user.service */ "./src/app/User/user.service.ts");
            /* harmony import */ var _Rooms_room_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Rooms/room.service */ "./src/app/Rooms/room.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["routingComponents"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]
                    ],
                    providers: [
                        _socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"],
                        _User_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                        _Rooms_room_service__WEBPACK_IMPORTED_MODULE_12__["RoomService"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/guard/auth.guard.ts": 
        /*!*************************************!*\
          !*** ./src/app/guard/auth.guard.ts ***!
          \*************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard/guard.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(guard, router) {
                    this.guard = guard;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    var url = state.url;
                    console.log('next url is' + next.url);
                    console.log('state url is' + state.url);
                    if (this.guard.loggedIn$ || localStorage.token) {
                        return true;
                    }
                    this.guard.directedToUrl = url;
                    this.router.navigate(['/login']);
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _guard_service__WEBPACK_IMPORTED_MODULE_3__["GuardService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/guard/exit.guard.ts": 
        /*!*************************************!*\
          !*** ./src/app/guard/exit.guard.ts ***!
          \*************************************/
        /*! exports provided: ExitGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitGuard", function () { return ExitGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard/guard.service.ts");
            var ExitGuard = /** @class */ (function () {
                function ExitGuard(serve) {
                    this.serve = serve;
                }
                ExitGuard.prototype.canDeactivate = function (component, next, state) {
                    console.log(state.url);
                    if (component.signup.dirty && !component.processing) {
                        return this.serve.leaving();
                        // const action = confirm('Discard changes?');
                        // return action;
                    }
                    return true;
                };
                return ExitGuard;
            }());
            ExitGuard.ctorParameters = function () { return [
                { type: _guard_service__WEBPACK_IMPORTED_MODULE_2__["GuardService"] }
            ]; };
            ExitGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ExitGuard);
            /***/ 
        }),
        /***/ "./src/app/guard/guard.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/guard/guard.service.ts ***!
          \****************************************/
        /*! exports provided: GuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function () { return GuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            // import { tap, delay } from 'rxjs/operators';
            var GuardService = /** @class */ (function () {
                function GuardService() {
                    this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
                    this.loggedIn$ = this.loggedIn.asObservable();
                }
                GuardService.prototype.checkloggin = function () {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
                        _this.loggedIn.next(true);
                        obs.next(true);
                    });
                };
                GuardService.prototype.leaving = function (message) {
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
                        var action = confirm(message || 'Do you want to laeve?');
                        obs.next(action);
                    });
                };
                return GuardService;
            }());
            GuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], GuardService);
            /***/ 
        }),
        /***/ "./src/app/socket.service.ts": 
        /*!***********************************!*\
          !*** ./src/app/socket.service.ts ***!
          \***********************************/
        /*! exports provided: SocketService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function () { return SocketService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
            /* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var SocketService = /** @class */ (function () {
                function SocketService(http) {
                    this.http = http;
                    this.room = false;
                    this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('default value');
                    this.Message$ = this.message.asObservable();
                    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__('http://192.168.43.41:2050');
                    console.log(this.socket.io);
                }
                SocketService.prototype.typing = function (user) {
                    if (user) {
                        this.socket.emit('typing', user);
                    }
                };
                SocketService.prototype.getTyper = function () {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.socket.on('message', function (data) {
                            observer.next(data);
                        });
                    });
                };
                SocketService.prototype.sendMessage = function (value) {
                    if (value) {
                        this.socket.emit('message', value);
                    }
                };
                SocketService.prototype.sendPcMessage = function (value) {
                    if (value) {
                        this.socket.emit('pc', value);
                    }
                };
                SocketService.prototype.getPcMessage = function () {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.socket.on('pc', function (data) {
                            console.log(data);
                            observer.next(data);
                        });
                    });
                };
                SocketService.prototype.getMessage = function () {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.socket.on('message', function (data) {
                            console.log(data);
                            observer.next(data);
                        });
                    });
                };
                SocketService.prototype.leave = function (member) {
                    if (member) {
                        this.socket.emit('leave', member);
                    }
                };
                SocketService.prototype.leaveNotification = function () {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.socket.on('leave', function (data) {
                            observer.next(data);
                        });
                    });
                };
                SocketService.prototype.join = function (message) {
                    if (message) {
                        this.socket.emit('join', message);
                    }
                };
                SocketService.prototype.joinNotification = function () {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.socket.on('join', function (data) {
                            console.log(JSON.stringify(data));
                            observer.next(data);
                        });
                    });
                };
                SocketService.prototype.memberAdded = function (member) {
                    if (member) {
                        this.socket.emit('memberAdded', member);
                    }
                };
                SocketService.prototype.addedNotification = function () {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this.socket.on('memberadded', function (data) {
                            observer.next(data);
                        });
                    });
                };
                return SocketService;
            }());
            SocketService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SocketService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\BEYOND\Desktop\angular\livechat\relate\src\main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!********************!*\
          !*** ws (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map