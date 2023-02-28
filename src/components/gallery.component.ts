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

import {Input, Output, EventEmitter, Component} from '@angular/core';
import {Image} from "./modal-gallery";

@Component({
  selector: 'gallery',
  styleUrls: ['gallery.scss'],
  template: `
    <div class="ng-gallery" *ngIf="showGallery">
      <div *ngFor="let i of images; let index = index">
        <img *ngIf="i.thumb" src="{{ i.thumb }}" class="ng-thumb" (click)="showModalGallery(index)"
             alt="{{ i.description }}"/>
        <img *ngIf="!i.thumb" src="{{ i.img }}" class="ng-thumb" (click)="showModalGallery(index)"
             alt="{{ i.description }}"/>
      </div>
    </div>
  `
})
export class Gallery {

  @Input() images: Image[];
  @Input() showGallery: boolean;

  @Output() show: EventEmitter<number> = new EventEmitter<number>();

  showModalGallery(index: number) {
    this.show.emit(index);
  }
}