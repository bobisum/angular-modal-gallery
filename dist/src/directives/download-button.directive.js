var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input } from '@angular/core';
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
__decorate([
    Input('downloadButton'),
    __metadata("design:type", Boolean)
], DownloadButtonDirective.prototype, "downloadButton", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DownloadButtonDirective.prototype, "extUrlButton", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DownloadButtonDirective.prototype, "imgExtUrl", void 0);
DownloadButtonDirective = __decorate([
    Directive({
        selector: '[downloadButton]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], DownloadButtonDirective);
export { DownloadButtonDirective };
//# sourceMappingURL=download-button.directive.js.map