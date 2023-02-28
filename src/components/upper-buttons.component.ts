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

import {Input, Output, EventEmitter, Component} from '@angular/core';
import {Image} from "./modal-gallery";

@Component({
  selector: 'upperButtons',
  styleUrls: ['upper-buttons.scss'],
  template: `
    <a class="close-popup" (click)="closeGallery()">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" fill="white"/>
      </svg>
    </a>
  `
})
export class UpperButtonsComponent {

  @Input() image: Image;
  @Input() showDownload: boolean = false;
  @Input() showExtUrl: boolean = false;

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() download: EventEmitter<boolean> = new EventEmitter<boolean>();

  downloadImage() {
    this.download.emit(true);
  }

  closeGallery() {
    this.close.emit(true);
  }
}
