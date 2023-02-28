import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class ExternalUrlButtonDirective implements OnChanges {
    private el;
    showExtUrlButton: boolean;
    imgExtUrl: string | null | undefined;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
