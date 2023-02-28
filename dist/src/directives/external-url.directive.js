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
__decorate([
    Input('externalUrlButton'),
    __metadata("design:type", Boolean)
], ExternalUrlButtonDirective.prototype, "showExtUrlButton", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ExternalUrlButtonDirective.prototype, "imgExtUrl", void 0);
ExternalUrlButtonDirective = __decorate([
    Directive({
        selector: '[externalUrlButton]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], ExternalUrlButtonDirective);
export { ExternalUrlButtonDirective };
//# sourceMappingURL=external-url.directive.js.map