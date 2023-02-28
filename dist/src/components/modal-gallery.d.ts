import { OnInit, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from "rxjs";
import { KeyboardService } from './keyboard.service';
export declare enum Action {
    NORMAL = 0,
    CLICK = 1,
    KEYBOARD = 2,
    SWIPE = 3,
    LOAD = 4,
}
export declare class ImageModalEvent {
    action: Action;
    result: number | boolean;
    constructor(action: Action, result: number | boolean);
}
export declare class Image {
    img: string;
    thumb?: string;
    description?: string;
    extUrl?: string;
    constructor(img: string, thumb?: string, description?: string, extUrl?: string);
}
export declare enum Keyboard {
    ESC = 27,
    LEFT_ARROW = 37,
    RIGHT_ARROW = 39,
    UP_ARROW = 38,
    DOWN_ARROW = 40,
}
export interface Description {
    customFullDescription?: string;
    imageText?: string;
    numberSeparator?: string;
    beforeTextDescription?: string;
}
export declare class AngularModalGallery implements OnInit, OnDestroy, OnChanges {
    private keyboardService;
    opened: boolean;
    loading: boolean;
    showGallery: boolean;
    images: Image[];
    currentImage: Image;
    currentImageIndex: number;
    clickAction: Action;
    private SWIPE_ACTION;
    private subscription;
    modalImages: Observable<Array<Image>> | Array<Image>;
    imagePointer: number;
    downloadable: boolean;
    description: Description;
    showDownloadButton: boolean;
    showExtUrlButton: boolean;
    close: EventEmitter<ImageModalEvent>;
    show: EventEmitter<ImageModalEvent>;
    firstImage: EventEmitter<ImageModalEvent>;
    lastImage: EventEmitter<ImageModalEvent>;
    hasData: EventEmitter<ImageModalEvent>;
    onKeyDown(e: KeyboardEvent): void;
    constructor(keyboardService: KeyboardService);
    ngOnInit(): void;
    private initImages();
    private completeInitialization();
    ngOnChanges(changes: SimpleChanges): void;
    getDescriptionToDisplay(): string;
    swipe(index: number, action?: string): void;
    closeGallery(action?: Action): void;
    prevImage(action?: Action): void;
    nextImage(action?: Action): void;
    onShowModalGallery(index: number): void;
    showModalGallery(index: number): void;
    downloadImage(): void;
    private getNextIndex(action, currentIndex);
    private getPrevIndex(action, currentIndex);
    private emitBoundaryEvent(action, indexToCheck);
    private getFileName(path);
    ngOnDestroy(): void;
}
