import { EventEmitter } from '@angular/core';
import { Image } from "./modal-gallery";
export declare class UpperButtonsComponent {
    image: Image;
    showDownload: boolean;
    showExtUrl: boolean;
    close: EventEmitter<boolean>;
    download: EventEmitter<boolean>;
    downloadImage(): void;
    closeGallery(): void;
}
