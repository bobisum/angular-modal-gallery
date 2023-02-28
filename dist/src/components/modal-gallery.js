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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Output, EventEmitter, HostListener, Component } from '@angular/core';
import { Observable } from "rxjs";
import { KeyboardService } from './keyboard.service';
export var Action;
(function (Action) {
    Action[Action["NORMAL"] = 0] = "NORMAL";
    Action[Action["CLICK"] = 1] = "CLICK";
    Action[Action["KEYBOARD"] = 2] = "KEYBOARD";
    Action[Action["SWIPE"] = 3] = "SWIPE";
    Action[Action["LOAD"] = 4] = "LOAD";
})(Action || (Action = {}));
var ImageModalEvent = (function () {
    function ImageModalEvent(action, result) {
        this.action = action;
        this.result = result;
    }
    return ImageModalEvent;
}());
export { ImageModalEvent };
var Image = (function () {
    function Image(img, thumb, description, extUrl) {
        this.img = img;
        this.thumb = thumb;
        this.description = description;
        this.extUrl = extUrl;
    }
    return Image;
}());
export { Image };
export var Keyboard;
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
        this.clickAction = Action.CLICK;
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
        this.close = new EventEmitter();
        this.show = new EventEmitter();
        this.firstImage = new EventEmitter();
        this.lastImage = new EventEmitter();
        this.hasData = new EventEmitter();
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
                this.closeGallery(Action.KEYBOARD);
                break;
            case Keyboard.RIGHT_ARROW:
                this.nextImage(Action.KEYBOARD);
                break;
            case Keyboard.LEFT_ARROW:
                this.prevImage(Action.KEYBOARD);
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
            if (this.modalImages instanceof Observable) {
                this.subscription = this.modalImages.subscribe(function (val) {
                    _this.images = val;
                    _this.completeInitialization();
                });
            }
        }
    };
    AngularModalGallery.prototype.completeInitialization = function () {
        this.hasData.emit(new ImageModalEvent(Action.LOAD, true));
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
                this.nextImage(Action.SWIPE);
                break;
            case this.SWIPE_ACTION.LEFT:
                this.prevImage(Action.SWIPE);
                break;
        }
    };
    AngularModalGallery.prototype.closeGallery = function (action) {
        if (action === void 0) { action = Action.NORMAL; }
        this.close.emit(new ImageModalEvent(action, true));
        this.opened = false;
        this.keyboardService.reset();
    };
    AngularModalGallery.prototype.prevImage = function (action) {
        if (action === void 0) { action = Action.NORMAL; }
        this.loading = true;
        this.currentImageIndex = this.getPrevIndex(action, this.currentImageIndex);
        this.showModalGallery(this.currentImageIndex);
    };
    AngularModalGallery.prototype.nextImage = function (action) {
        if (action === void 0) { action = Action.NORMAL; }
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
        this.show.emit(new ImageModalEvent(Action.LOAD, this.currentImageIndex + 1));
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], AngularModalGallery.prototype, "modalImages", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AngularModalGallery.prototype, "imagePointer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AngularModalGallery.prototype, "downloadable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AngularModalGallery.prototype, "description", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AngularModalGallery.prototype, "showDownloadButton", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AngularModalGallery.prototype, "showExtUrlButton", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AngularModalGallery.prototype, "close", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AngularModalGallery.prototype, "show", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AngularModalGallery.prototype, "firstImage", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AngularModalGallery.prototype, "lastImage", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AngularModalGallery.prototype, "hasData", void 0);
__decorate([
    HostListener('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AngularModalGallery.prototype, "onKeyDown", null);
AngularModalGallery = __decorate([
    Component({
        selector: 'modal-gallery',
        exportAs: 'modalGallery',
        styleUrls: ['modal-gallery.scss'],
        templateUrl: 'modal-gallery.html'
    }),
    __metadata("design:paramtypes", [KeyboardService])
], AngularModalGallery);
export { AngularModalGallery };
//# sourceMappingURL=modal-gallery.js.map