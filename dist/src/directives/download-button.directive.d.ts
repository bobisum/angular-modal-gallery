import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class DownloadButtonDirective implements OnChanges {
    private el;
    downloadButton: boolean;
    extUrlButton: boolean;
    imgExtUrl: string | null | undefined;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
