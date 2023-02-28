(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('mousetrap')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs', 'mousetrap'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.angular = global.ng.angular || {}, global.ng.angular.modal = global.ng.angular.modal || {}, global.ng.angular.modal.gallery = global.ng.angular.modal.gallery || {}),global.ng.core,global.ng.common,global.rxjs));
}(this, (function (exports,_angular_core,_angular_common,rxjs) { 'use strict';

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var KeyboardService = (function () {
    function KeyboardService() {
        this.mousetrap = new Mousetrap();
    }
    KeyboardService.prototype.add = function (onBind) {
        this.mousetrap.bind(['ctrl+s', 'meta+s'], function (event, combo) {
            if (event.preventDefault) {
                event.preventDefault();
            }
            else {
                // internet explorer
                event.returnValue = false;
            }
            onBind(event, combo);
        });
    };
    KeyboardService.prototype.reset = function () {
        this.mousetrap.reset();
    };
    return KeyboardService;
}());
KeyboardService = __decorate$3([
    _angular_core.Injectable(),
    __metadata$1("design:paramtypes", [])
], KeyboardService);

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)
 Copyright (c) 2016 vimalavinisha (only for version 1)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

(function (Action) {
    Action[Action["NORMAL"] = 0] = "NORMAL";
    Action[Action["CLICK"] = 1] = "CLICK";
    Action[Action["KEYBOARD"] = 2] = "KEYBOARD";
    Action[Action["SWIPE"] = 3] = "SWIPE";
    Action[Action["LOAD"] = 4] = "LOAD";
})(exports.Action || (exports.Action = {}));
var ImageModalEvent = (function () {
    function ImageModalEvent(action, result) {
        this.action = action;
        this.result = result;
    }
    return ImageModalEvent;
}());
var Image = (function () {
    function Image(img, thumb, description, extUrl) {
        this.img = img;
        this.thumb = thumb;
        this.description = description;
        this.extUrl = extUrl;
    }
    return Image;
}());
var Keyboard;
(function (Keyboard) {
    Keyboard[Keyboard["ESC"] = 27] = "ESC";
    Keyboard[Keyboard["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    Keyboard[Keyboard["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    Keyboard[Keyboard["UP_ARROW"] = 38] = "UP_ARROW";
    Keyboard[Keyboard["DOWN_ARROW"] = 40] = "DOWN_ARROW";
})(Keyboard || (Keyboard = {}));
var AngularModalGallery = (function () {
    function AngularModalGallery(keyboardService) {
        this.keyboardService = keyboardService;
        this.opened = false;
        this.loading = false;
        this.showGallery = false;
        this.currentImageIndex = 0;
        // enum action used to pass a click action
        // when you clicks over the modal image.
        // Declared here  to use it in the template.
        this.clickAction = exports.Action.CLICK;
        this.SWIPE_ACTION = {
            LEFT: 'swipeleft',
            RIGHT: 'swiperight',
            UP: 'swipeup',
            DOWN: 'swipedown'
        };
        this.downloadable = false;
        // used only inside upper-button's component
        this.showDownloadButton = false;
        this.showExtUrlButton = false;
        this.close = new _angular_core.EventEmitter();
        this.show = new _angular_core.EventEmitter();
        this.firstImage = new _angular_core.EventEmitter();
        this.lastImage = new _angular_core.EventEmitter();
        this.hasData = new _angular_core.EventEmitter();
        // if description isn't provided initialize it with a default object
        if (!this.description) {
            this.description = {
                imageText: 'Image ',
                numberSeparator: '/',
                beforeTextDescription: ' - '
            };
        }
        // if one of the Description fields isn't initialized, provide a default value
        this.description.imageText = this.description.imageText || 'Image ';
        this.description.numberSeparator = this.description.numberSeparator || '/';
        this.description.beforeTextDescription = this.description.beforeTextDescription || ' - ';
    }
    AngularModalGallery.prototype.onKeyDown = function (e) {
        if (!this.opened) {
            return;
        }
        switch (e.keyCode) {
            case Keyboard.ESC:
                this.closeGallery(exports.Action.KEYBOARD);
                break;
            case Keyboard.RIGHT_ARROW:
                this.nextImage(exports.Action.KEYBOARD);
                break;
            case Keyboard.LEFT_ARROW:
                this.prevImage(exports.Action.KEYBOARD);
                break;
        }
    };
    AngularModalGallery.prototype.ngOnInit = function () {
        this.initImages();
    };
    AngularModalGallery.prototype.initImages = function () {
        var _this = this;
        if (this.modalImages instanceof Array) {
            this.images = this.modalImages;
            this.completeInitialization();
        }
        else {
            if (this.modalImages instanceof rxjs.Observable) {
                this.subscription = this.modalImages.subscribe(function (val) {
                    _this.images = val;
                    _this.completeInitialization();
                });
            }
        }
    };
    AngularModalGallery.prototype.completeInitialization = function () {
        this.hasData.emit(new ImageModalEvent(exports.Action.LOAD, true));
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showGallery = false;
            this.showModalGallery(this.imagePointer);
        }
        else {
            this.showGallery = true;
        }
    };
    AngularModalGallery.prototype.ngOnChanges = function (changes) {
        // to prevent errors when you pass to this library
        // the array of images inside a subscribe block, in this way: `...subscribe(val => { this.images = arrayOfImages })`
        // As you can see, I'm providing examples in these situations in all official demos
        if (this.modalImages) {
            this.initImages();
        }
    };
    AngularModalGallery.prototype.getDescriptionToDisplay = function () {
        if (this.description && this.description.customFullDescription) {
            return this.description.customFullDescription;
        }
        // If the current image hasn't a description,
        // prevent to write the ' - ' (or this.description.beforeTextDescription)
        if (!this.currentImage.description || this.currentImage.description === '') {
            return "" + this.description.imageText + (this.currentImageIndex + 1) + this.description.numberSeparator + this.images.length;
        }
        return "" + this.description.imageText + (this.currentImageIndex + 1) + this.description.numberSeparator + this.images.length + this.description.beforeTextDescription + this.currentImage.description;
    };
    // hammerjs touch gestures support
    AngularModalGallery.prototype.swipe = function (index, action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        switch (action) {
            case this.SWIPE_ACTION.RIGHT:
                this.nextImage(exports.Action.SWIPE);
                break;
            case this.SWIPE_ACTION.LEFT:
                this.prevImage(exports.Action.SWIPE);
                break;
        }
    };
    AngularModalGallery.prototype.closeGallery = function (action) {
        if (action === void 0) { action = exports.Action.NORMAL; }
        this.close.emit(new ImageModalEvent(action, true));
        this.opened = false;
        this.keyboardService.reset();
    };
    AngularModalGallery.prototype.prevImage = function (action) {
        if (action === void 0) { action = exports.Action.NORMAL; }
        this.loading = true;
        this.currentImageIndex = this.getPrevIndex(action, this.currentImageIndex);
        this.showModalGallery(this.currentImageIndex);
    };
    AngularModalGallery.prototype.nextImage = function (action) {
        if (action === void 0) { action = exports.Action.NORMAL; }
        this.loading = true;
        this.currentImageIndex = this.getNextIndex(action, this.currentImageIndex);
        this.showModalGallery(this.currentImageIndex);
    };
    AngularModalGallery.prototype.onShowModalGallery = function (index) {
        this.showModalGallery(index);
    };
    AngularModalGallery.prototype.showModalGallery = function (index) {
        var _this = this;
        this.keyboardService.add(function (event, combo) {
            if (event.preventDefault) {
                event.preventDefault();
            }
            else {
                // internet explorer
                event.returnValue = false;
            }
            _this.downloadImage();
        });
        this.currentImageIndex = index;
        this.opened = true;
        this.currentImage = this.images[this.currentImageIndex];
        this.loading = false;
        // emit current visible image index
        this.show.emit(new ImageModalEvent(exports.Action.LOAD, this.currentImageIndex + 1));
    };
    AngularModalGallery.prototype.downloadImage = function () {
        if (!this.downloadable) {
            return;
        }
        // for all browsers
        // Attention: with IE is not working, but it will navigate to the image
        var link = document.createElement('a');
        link.href = this.currentImage.img;
        link.setAttribute('download', this.getFileName(this.currentImage.img));
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    AngularModalGallery.prototype.getNextIndex = function (action, currentIndex) {
        var newIndex = 0;
        if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
            newIndex = currentIndex + 1;
        }
        else {
            newIndex = 0; // start from the first index
        }
        // emit first/last event based on newIndex value
        this.emitBoundaryEvent(action, newIndex);
        // emit current visible image index
        this.show.emit(new ImageModalEvent(action, newIndex));
        return newIndex;
    };
    AngularModalGallery.prototype.getPrevIndex = function (action, currentIndex) {
        var newIndex = 0;
        if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
            newIndex = currentIndex - 1;
        }
        else {
            newIndex = this.images.length - 1; // start from the last index
        }
        // emit first/last event based on newIndex value
        this.emitBoundaryEvent(action, newIndex);
        // emit current visible image index
        this.show.emit(new ImageModalEvent(action, newIndex));
        return newIndex;
    };
    AngularModalGallery.prototype.emitBoundaryEvent = function (action, indexToCheck) {
        // to emit first/last event
        switch (indexToCheck) {
            case 0:
                this.firstImage.emit(new ImageModalEvent(action, true));
                break;
            case this.images.length - 1:
                this.lastImage.emit(new ImageModalEvent(action, true));
                break;
        }
    };
    AngularModalGallery.prototype.getFileName = function (path) {
        return path.replace(/^.*[\\\/]/, '');
    };
    AngularModalGallery.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.keyboardService.reset();
    };
    return AngularModalGallery;
}());
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Object)
], AngularModalGallery.prototype, "modalImages", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Number)
], AngularModalGallery.prototype, "imagePointer", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], AngularModalGallery.prototype, "downloadable", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Object)
], AngularModalGallery.prototype, "description", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], AngularModalGallery.prototype, "showDownloadButton", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], AngularModalGallery.prototype, "showExtUrlButton", void 0);
__decorate$2([
    _angular_core.Output(),
    __metadata("design:type", _angular_core.EventEmitter)
], AngularModalGallery.prototype, "close", void 0);
__decorate$2([
    _angular_core.Output(),
    __metadata("design:type", _angular_core.EventEmitter)
], AngularModalGallery.prototype, "show", void 0);
__decorate$2([
    _angular_core.Output(),
    __metadata("design:type", _angular_core.EventEmitter)
], AngularModalGallery.prototype, "firstImage", void 0);
__decorate$2([
    _angular_core.Output(),
    __metadata("design:type", _angular_core.EventEmitter)
], AngularModalGallery.prototype, "lastImage", void 0);
__decorate$2([
    _angular_core.Output(),
    __metadata("design:type", _angular_core.EventEmitter)
], AngularModalGallery.prototype, "hasData", void 0);
__decorate$2([
    _angular_core.HostListener('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AngularModalGallery.prototype, "onKeyDown", null);
AngularModalGallery = __decorate$2([
    _angular_core.Component({
        selector: 'modal-gallery',
        exportAs: 'modalGallery',
        styles: ['.ng-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.8);z-index:9999;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.ng-gallery-content{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;text-align:center}.ng-gallery-content>a.nav-left,.ng-gallery-content>a.nav-right{color:#fff!important;text-decoration:none;font-size:60px;cursor:pointer;outline:0}.ng-gallery-content>a.nav-left{position:fixed;left:15px;top:50%;transform:translateY(-50%)}.ng-gallery-content>a.nav-right{position:fixed;right:15px;top:50%;transform:translateY(-50%)}.ng-gallery-content>img{height:auto;max-height:calc(100% - 150px);max-width:calc(100% - 100px);position:relative;display:block;margin:0 auto 0 auto;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);cursor:pointer;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.ng-gallery-content.effect{animation:fadeIn .5s}.ng-gallery-content>span.info-text{color:#fff;display:inline-block;width:100%;height:20px;font-weight:700;text-align:center;position:fixed;left:0;right:0}@media (max-width:676px){.ng-gallery-content>span.info-text{bottom:100px}}@media (min-width:676px) and (max-width:752px){.ng-gallery-content>span.info-text{padding-top:52px}}@media (min-width:752px) and (max-width:804px){.ng-gallery-content>span.info-text{padding-top:43px}}@media (min-width:804px){.ng-gallery-content>span.info-text{bottom:100px}}.ng-gallery-content>.ng-thumbnails-wrapper{width:400px;height:70px;text-align:center;position:fixed;bottom:20px;left:0;right:0;margin-left:auto;margin-right:auto;overflow-x:hidden}.ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails{width:4000px;height:70px}.ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img{width:auto;height:70px;float:left;margin-right:10px;cursor:pointer;opacity:.6}.ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img.active,.ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img:hover{transition:opacity .25s ease;opacity:1}@keyframes fadeIn{from{opacity:.3}to{opacity:1}}uiload{display:inline-block;position:relative}uiload>div{position:relative}@-webkit-keyframes uil-ring-anim{0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes uil-ring-anim{0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-ms-keyframes uil-ring-anim{0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uil-ring-anim{0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.uil-ring-css{background:0 0;position:relative;top:0;margin:180px auto 0 auto;width:100px;height:100px}.uil-ring-css>div{position:absolute;display:block;width:80px;height:80px;top:20px;left:20px;border-radius:40px;box-shadow:0 6px 0 0 #fff;-ms-animation:uil-ring-anim 1s linear infinite;-moz-animation:uil-ring-anim 1s linear infinite;-webkit-animation:uil-ring-anim 1s linear infinite;-o-animation:uil-ring-anim 1s linear infinite;animation:uil-ring-anim 1s linear infinite}'],
        template: '<gallery [images]="images" [showGallery]="showGallery" (show)="onShowModalGallery($event)"></gallery><div class="ng-overlay" *ngIf="opened"><div class="ng-gallery-content"><div class="uil-ring-css" *ngIf="loading"><div></div></div><upperButtons [image]="currentImage" [showDownload]="showDownloadButton" [showExtUrl]="showExtUrlButton" (close)="closeGallery()" (download)="downloadImage()"></upperButtons><a class="nav-left" *ngIf="(images)?.length > 1" (click)="prevImage()"><i class="fa fa-angle-left"></i></a> <img *ngIf="!loading" src="{{ currentImage.img }}" (click)="nextImage(clickAction)" class="effect" (swipeleft)="swipe(currentImageIndex, $event.type)" (swiperight)="swipe(currentImageIndex, $event.type)"> <a class="nav-right" *ngIf="(images)?.length > 1" (click)="nextImage()"><i class="fa fa-angle-right"></i></a> <span class="info-text">{{getDescriptionToDisplay()}}</span></div></div>'
    }),
    __metadata("design:paramtypes", [KeyboardService])
], AngularModalGallery);

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ExternalUrlButtonDirective = (function () {
    function ExternalUrlButtonDirective(el) {
        this.el = el;
    }
    ExternalUrlButtonDirective.prototype.ngOnChanges = function (changes) {
        // apply [style.right]="" to external url <a></a>
        this.el.nativeElement.style.right = this.showExtUrlButton ? '63px' : '0px';
        // hide externalUrlButton based on this condition
        // showExtUrlButton === false OR imgExtUrl is not valid (for instance is null)
        this.el.nativeElement.hidden = !this.showExtUrlButton || !this.imgExtUrl;
    };
    return ExternalUrlButtonDirective;
}());
__decorate$4([
    _angular_core.Input('externalUrlButton'),
    __metadata$2("design:type", Boolean)
], ExternalUrlButtonDirective.prototype, "showExtUrlButton", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], ExternalUrlButtonDirective.prototype, "imgExtUrl", void 0);
ExternalUrlButtonDirective = __decorate$4([
    _angular_core.Directive({
        selector: '[externalUrlButton]'
    }),
    __metadata$2("design:paramtypes", [_angular_core.ElementRef])
], ExternalUrlButtonDirective);

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DownloadButtonDirective = (function () {
    function DownloadButtonDirective(el) {
        this.el = el;
    }
    DownloadButtonDirective.prototype.ngOnChanges = function (changes) {
        var style;
        // apply [style.right]="" to download url <a></a>
        if (this.downloadButton) {
            if (this.extUrlButton === true && this.imgExtUrl) {
                style = '126px';
            }
            else {
                style = '63px';
            }
        }
        else {
            style = '0px';
        }
        this.el.nativeElement.style.right = style;
        // hide downloadButton if the input property is false
        this.el.nativeElement.hidden = !this.downloadButton;
    };
    return DownloadButtonDirective;
}());
__decorate$5([
    _angular_core.Input('downloadButton'),
    __metadata$3("design:type", Boolean)
], DownloadButtonDirective.prototype, "downloadButton", void 0);
__decorate$5([
    _angular_core.Input(),
    __metadata$3("design:type", Boolean)
], DownloadButtonDirective.prototype, "extUrlButton", void 0);
__decorate$5([
    _angular_core.Input(),
    __metadata$3("design:type", String)
], DownloadButtonDirective.prototype, "imgExtUrl", void 0);
DownloadButtonDirective = __decorate$5([
    _angular_core.Directive({
        selector: '[downloadButton]'
    }),
    __metadata$3("design:paramtypes", [_angular_core.ElementRef])
], DownloadButtonDirective);

var DIRECTIVES = [
    ExternalUrlButtonDirective, DownloadButtonDirective
];

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UpperButtonsComponent = (function () {
    function UpperButtonsComponent() {
        this.showDownload = false;
        this.showExtUrl = false;
        this.close = new _angular_core.EventEmitter();
        this.download = new _angular_core.EventEmitter();
    }
    UpperButtonsComponent.prototype.downloadImage = function () {
        this.download.emit(true);
    };
    UpperButtonsComponent.prototype.closeGallery = function () {
        this.close.emit(true);
    };
    return UpperButtonsComponent;
}());
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Image)
], UpperButtonsComponent.prototype, "image", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean)
], UpperButtonsComponent.prototype, "showDownload", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean)
], UpperButtonsComponent.prototype, "showExtUrl", void 0);
__decorate$6([
    _angular_core.Output(),
    __metadata$4("design:type", _angular_core.EventEmitter)
], UpperButtonsComponent.prototype, "close", void 0);
__decorate$6([
    _angular_core.Output(),
    __metadata$4("design:type", _angular_core.EventEmitter)
], UpperButtonsComponent.prototype, "download", void 0);
UpperButtonsComponent = __decorate$6([
    _angular_core.Component({
        selector: 'upperButtons',
        styles: ['a.close-popup{font-size:42px;float:right;color:#fff!important;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:20px;right:0}a.external-url-image{font-size:33px;float:right;color:#fff!important;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:28px;right:0}a.download-image{font-size:33px;float:right;color:#fff!important;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:28px;right:0}'],
        template: "\n    <a class=\"external-url-image\" [externalUrlButton]=\"showExtUrl\" [imgExtUrl]=\"image.extUrl\"\n       href=\"{{image.extUrl}}\"><i class=\"fa fa-external-link\"></i></a>\n    <a class=\"download-image\" [downloadButton]=\"showDownload\" [extUrlButton]=\"showExtUrl\"\n       [imgExtUrl]=\"image.extUrl\" (click)=\"downloadImage()\"><i class=\"fa fa-download\"></i></a>\n    <a class=\"close-popup\" (click)=\"closeGallery()\"><i class=\"fa fa-close\"></i></a>\n  "
    })
], UpperButtonsComponent);

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)
 Copyright (c) 2016 vimalavinisha (only for version 1)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Gallery = (function () {
    function Gallery() {
        this.show = new _angular_core.EventEmitter();
    }
    Gallery.prototype.showModalGallery = function (index) {
        this.show.emit(index);
    };
    return Gallery;
}());
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Array)
], Gallery.prototype, "images", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Boolean)
], Gallery.prototype, "showGallery", void 0);
__decorate$7([
    _angular_core.Output(),
    __metadata$5("design:type", _angular_core.EventEmitter)
], Gallery.prototype, "show", void 0);
Gallery = __decorate$7([
    _angular_core.Component({
        selector: 'gallery',
        styles: ['.ng-gallery{width:100%;display:inline-block}img.ng-thumb{height:50px;float:left;display:block;cursor:pointer;margin:2px 2px 0 0}'],
        template: "\n    <div class=\"ng-gallery\" *ngIf=\"showGallery\">\n      <div *ngFor=\"let i of images; let index = index\">\n        <img *ngIf=\"i.thumb\" src=\"{{ i.thumb }}\" class=\"ng-thumb\" (click)=\"showModalGallery(index)\"\n             alt=\"{{ i.description }}\"/>\n        <img *ngIf=\"!i.thumb\" src=\"{{ i.img }}\" class=\"ng-thumb\" (click)=\"showModalGallery(index)\"\n             alt=\"{{ i.description }}\"/>\n      </div>\n    </div>\n  "
    })
], Gallery);

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AngularModalGalleryModule = AngularModalGalleryModule_1 = (function () {
    function AngularModalGalleryModule() {
    }
    AngularModalGalleryModule.forRoot = function () {
        return {
            ngModule: AngularModalGalleryModule_1,
            providers: [
                KeyboardService
            ]
        };
    };
    return AngularModalGalleryModule;
}());
AngularModalGalleryModule = AngularModalGalleryModule_1 = __decorate$1([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule],
        declarations: [AngularModalGallery, UpperButtonsComponent, Gallery, DIRECTIVES],
        exports: [AngularModalGallery]
    })
], AngularModalGalleryModule);
var AngularModalGalleryModule_1;

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.AngularRootModalGalleryModule = (function () {
    function AngularRootModalGalleryModule() {
    }
    return AngularRootModalGalleryModule;
}());
exports.AngularRootModalGalleryModule = __decorate([
    _angular_core.NgModule({
        imports: [
            AngularModalGalleryModule.forRoot()
        ],
        exports: [
            AngularModalGalleryModule
        ]
    })
], exports.AngularRootModalGalleryModule);
exports.ModalGalleryModule = (function () {
    function ModalGalleryModule() {
    }
    ModalGalleryModule.forRoot = function () {
        return {
            ngModule: exports.AngularRootModalGalleryModule
        };
    };
    return ModalGalleryModule;
}());
exports.ModalGalleryModule = __decorate([
    _angular_core.NgModule({
        imports: [AngularModalGalleryModule],
        exports: [AngularModalGalleryModule]
    })
], exports.ModalGalleryModule);

exports.Image = Image;
exports.ImageModalEvent = ImageModalEvent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
