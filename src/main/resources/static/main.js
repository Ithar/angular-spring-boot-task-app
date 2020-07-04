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

        webpackEmptyAsyncContext.keys = function () {
            return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

        /***/
    }),

    /***/ "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/
    /*! exports provided: AppRoutingModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
            return AppRoutingModule;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


        const routes = [];

        class AppRoutingModule {
        }

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type: AppRoutingModule});
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
            factory: function AppRoutingModule_Factory(t) {
                return new (t || AppRoutingModule)();
            },
            imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        (function () {
            (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            });
        })();
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
            }], null, null);
        })();


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
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
            return AppComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");


        class AppComponent {
        }

        AppComponent.ɵfac = function AppComponent_Factory(t) {
            return new (t || AppComponent)();
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: AppComponent,
            selectors: [["app-root"]],
            decls: 2,
            vars: 0,
            consts: [[1, "task-container"]],
            template: function AppComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tasks");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
            },
            directives: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__["TasksComponent"]],
            styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                }]
            }], null, null);
        })();


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
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
            return AppModule;
        });
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
        /* harmony import */
        var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
        /* harmony import */
        var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
        /* harmony import */
        var _tasks_tasks_add_tasks_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks-add/tasks-add.component */ "./src/app/tasks/tasks-add/tasks-add.component.ts");
        /* harmony import */
        var _tasks_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks-list/tasks-list.component */ "./src/app/tasks/tasks-list/tasks-list.component.ts");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
        /* harmony import */
        var _tasks_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/task.service */ "./src/app/tasks/task.service.ts");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


// Core Modules

// Project Modules


        class AppModule {
        }

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
            type: AppModule,
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
            factory: function AppModule_Factory(t) {
                return new (t || AppModule)();
            }, providers: [_tasks_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ]]
        });
        (function () {
            (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
                    _tasks_tasks_add_tasks_add_component__WEBPACK_IMPORTED_MODULE_5__["TasksAddComponent"],
                    _tasks_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_6__["TasksListComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]
            });
        })();
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [{
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
                        _tasks_tasks_add_tasks_add_component__WEBPACK_IMPORTED_MODULE_5__["TasksAddComponent"],
                        _tasks_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_6__["TasksListComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
                    ],
                    providers: [_tasks_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                }]
            }], null, null);
        })();


        /***/
    }),

    /***/ "./src/app/tasks/task.model.ts":
    /*!*************************************!*\
      !*** ./src/app/tasks/task.model.ts ***!
      \*************************************/
    /*! exports provided: Task */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Task", function () {
            return Task;
        });

        class Task {
            constructor(name, dueDate, completed) {
                this.name = name;
                this.dueDate = dueDate;
                this.completed = completed;
            }
        }


        /***/
    }),

    /***/ "./src/app/tasks/task.service.ts":
    /*!***************************************!*\
      !*** ./src/app/tasks/task.service.ts ***!
      \***************************************/
    /*! exports provided: TaskService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TaskService", function () {
            return TaskService;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");


// @Injectable()
        class TaskService {
            constructor(http) {
                this.http = http;
                this.taskAddedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            }

            getTasks() {
                console.log('Listing tasks');
                return this.http.get('/api/v1/task');
            }

            saveTask(task, checked) {
                console.log('Saving task [id=' + task.id + ']');
                task.completed = checked;
                return this.http.post('/api/v1/task/save', task);
            }
        }

        TaskService.ɵfac = function TaskService_Factory(t) {
            return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
        };
        TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
            token: TaskService,
            factory: TaskService.ɵfac,
            providedIn: 'root'
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [{
                    providedIn: 'root'
                }]
            }], function () {
                return [{type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/tasks/tasks-add/tasks-add.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/tasks/tasks-add/tasks-add.component.ts ***!
      \********************************************************/
    /*! exports provided: TasksAddComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TasksAddComponent", function () {
            return TasksAddComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.model */ "./src/app/tasks/task.model.ts");
        /* harmony import */
        var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/tasks/task.service.ts");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


        class TasksAddComponent {
            constructor(taskService) {
                this.taskService = taskService;
                // ng model hook
                this.addTaskValue = '';
            }

            ngOnInit() {
            }

            onAddTask(event) {
                const completed = false;
                const task = new _task_model__WEBPACK_IMPORTED_MODULE_1__["Task"](event.target.value, "07/07/2020", completed);
                this.taskService.saveTask(task, completed).subscribe((addedTask) => {
                    this.addTaskValue = '';
                    this.taskService.taskAddedEvent.emit(addedTask);
                });
            }
        }

        TasksAddComponent.ɵfac = function TasksAddComponent_Factory(t) {
            return new (t || TasksAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]));
        };
        TasksAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: TasksAddComponent,
            selectors: [["app-tasks-add"]],
            decls: 4,
            vars: 1,
            consts: [["id", "taskAdd", 1, "task-list-container"], ["type", "text", "placeholder", "Add new task ...", 3, "ngModel", "keyup.enter", "ngModelChange"]],
            template: function TasksAddComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add new task: ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TasksAddComponent_Template_input_keyup_enter_3_listener($event) {
                        return ctx.onAddTask($event);
                    })("ngModelChange", function TasksAddComponent_Template_input_ngModelChange_3_listener($event) {
                        return ctx.addTaskValue = $event;
                    });
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addTaskValue);
                }
            },
            directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
            styles: [".task-list-container[_ngcontent-%COMP%] {\n    text-align: left;\n}\ninput[type=text][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #111111;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MtYWRkL3Rhc2tzLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC90YXNrcy90YXNrcy1hZGQvdGFza3MtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1saXN0LWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTExMTExO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksAddComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-tasks-add',
                    templateUrl: './tasks-add.component.html',
                    styleUrls: ['./tasks-add.component.css']
                }]
            }], function () {
                return [{type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/tasks/tasks-list/tasks-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/tasks/tasks-list/tasks-list.component.ts ***!
      \**********************************************************/
    /*! exports provided: TasksListComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TasksListComponent", function () {
            return TasksListComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ "./src/app/tasks/task.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


        function TasksListComponent_li_2_Template(rf, ctx) {
            if (rf & 1) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TasksListComponent_li_2_Template_input_change_2_listener($event) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
                    const task_r1 = ctx.$implicit;
                    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r2.onTaskChange($event, task_r1);
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const task_r1 = ctx.$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngClass", task_r1.completed ? "task-completed" : "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", task_r1.completed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.dueDate);
            }
        }

        class TasksListComponent {
            constructor(taskService) {
                this.taskService = taskService;
                this.tasks = [];
            }

            ngOnInit() {
                this.taskService.getTasks().subscribe((tasks) => {
                    this.tasks = tasks;
                }, (error) => {
                    console.log(error);
                });
                this.taskService.taskAddedEvent.subscribe((task) => {
                    this.tasks.push(task);
                    console.log('Task pushed');
                });
            }

            onTaskChange(event, task) {
                this.taskService.saveTask(task, event.target.checked).subscribe();
            }
        }

        TasksListComponent.ɵfac = function TasksListComponent_Factory(t) {
            return new (t || TasksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]));
        };
        TasksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: TasksListComponent,
            selectors: [["app-tasks-list"]],
            decls: 3,
            vars: 1,
            consts: [["id", "taskList", 1, "task-list-container"], [4, "ngFor", "ngForOf"], [3, "ngClass"], ["type", "checkbox", 3, "checked", "change"], [1, "task-date"]],
            template: function TasksListComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TasksListComponent_li_2_Template, 7, 4, "li", 1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
                }
            },
            directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
            styles: ["ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n\n.task-list-container[_ngcontent-%COMP%] {\n    text-align: left;\n}\n\n.task-completed[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n    color: #3d0101;\n}\n\n.task-date[_ngcontent-%COMP%] {\n    float: right;\n    padding-right: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MtbGlzdC90YXNrcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC90YXNrcy90YXNrcy1saXN0L3Rhc2tzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGFzay1jb21wbGV0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjM2QwMTAxO1xufVxuXG4udGFzay1kYXRlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNjAlO1xufVxuIl19 */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksListComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-tasks-list',
                    templateUrl: './tasks-list.component.html',
                    styleUrls: ['./tasks-list.component.css']
                }]
            }], function () {
                return [{type: _task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/tasks/tasks.component.ts":
    /*!******************************************!*\
      !*** ./src/app/tasks/tasks.component.ts ***!
      \******************************************/
    /*! exports provided: TasksComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
            return TasksComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _tasks_add_tasks_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-add/tasks-add.component */ "./src/app/tasks/tasks-add/tasks-add.component.ts");
        /* harmony import */
        var _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list/tasks-list.component */ "./src/app/tasks/tasks-list/tasks-list.component.ts");


        class TasksComponent {
            constructor() {
            }

            ngOnInit() {
            }
        }

        TasksComponent.ɵfac = function TasksComponent_Factory(t) {
            return new (t || TasksComponent)();
        };
        TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: TasksComponent,
            selectors: [["app-tasks"]],
            decls: 8,
            vars: 0,
            template: function TasksComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to task manager");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tasks-add");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-tasks-list");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
            },
            directives: [_tasks_add_tasks_add_component__WEBPACK_IMPORTED_MODULE_1__["TasksAddComponent"], _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__["TasksListComponent"]],
            styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MifQ== */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-tasks',
                    templateUrl: './tasks.component.html',
                    styleUrls: ['./tasks.component.css']
                }]
            }], function () {
                return [];
            }, null);
        })();


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
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "environment", function () {
            return environment;
        });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
        const environment = {
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
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
        /* harmony import */
        var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");


        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
            .catch(err => console.error(err));


        /***/
    }),

    /***/ 0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(/*! /Users/ithar.malik/dev/personal/javascript/angular-spring-boot-task-app/src/main/frontend/src/main.ts */"./src/main.ts");


        /***/
    })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map
