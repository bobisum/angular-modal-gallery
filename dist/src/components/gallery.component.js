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
import { Input, Output, EventEmitter, Component } from '@angular/core';
var Gallery = (function () {
    function Gallery() {
        this.show = new EventEmitter();
    }
    Gallery.prototype.showModalGallery = function (index) {
        this.show.emit(index);
    };
    return Gallery;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], Gallery.prototype, "images", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Gallery.prototype, "showGallery", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Gallery.prototype, "show", void 0);
Gallery = __decorate([
    Component({
        selector: 'gallery',
        styleUrls: ['gallery.scss'],
        template: "\n    <div class=\"ng-gallery\" *ngIf=\"showGallery\">\n      <div *ngFor=\"let i of images; let index = index\">\n        <img *ngIf=\"i.thumb\" src=\"{{ i.thumb }}\" class=\"ng-thumb\" (click)=\"showModalGallery(index)\"\n             alt=\"{{ i.description }}\"/>\n        <img *ngIf=\"!i.thumb\" src=\"{{ i.img }}\" class=\"ng-thumb\" (click)=\"showModalGallery(index)\"\n             alt=\"{{ i.description }}\"/>\n      </div>\n    </div>\n  "
    })
], Gallery);
export { Gallery };
//# sourceMappingURL=gallery.component.js.map