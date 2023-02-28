import { EventEmitter } from '@angular/core';
import { Image } from "./modal-gallery";
export declare class Gallery {
    images: Image[];
    showGallery: boolean;
    show: EventEmitter<number>;
    showModalGallery(index: number): void;
}
