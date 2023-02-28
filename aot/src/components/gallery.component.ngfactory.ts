/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './gallery.scss.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/common';
import * as import3 from '../../../src/components/gallery.component';
const styles_Gallery:any[] = [import0.styles];
export const RenderType_Gallery:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_Gallery,
  data: {}
}
);
function View_Gallery_3(l:any):import1.ɵViewDefinition {
      return import1.ɵvid(0,[(l()(),import1.ɵeld(0,(null as any),(null as any),0,'img',[[
        'class',
        'ng-thumb'
      ]
    ],[
      [
        8,
        'src',
        4
      ]
      ,
      [
        8,
        'alt',
        0
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.showModalGallery((<any>v.parent).context.index)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
  },(null as any),(null as any)))],(null as any),(ck,v) => {
    const currVal_0:any = import1.ɵinlineInterpolate(1,'',(<any>v.parent).context.$implicit.thumb,'');
    const currVal_1:any = import1.ɵinlineInterpolate(1,'',(<any>v.parent).context.$implicit.description,'');
    ck(v,0,0,currVal_0,currVal_1);
  });
}
function View_Gallery_4(l:any):import1.ɵViewDefinition {
      return import1.ɵvid(0,[(l()(),import1.ɵeld(0,(null as any),(null as any),0,'img',[[
        'class',
        'ng-thumb'
      ]
    ],[
      [
        8,
        'src',
        4
      ]
      ,
      [
        8,
        'alt',
        0
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.showModalGallery((<any>v.parent).context.index)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
  },(null as any),(null as any)))],(null as any),(ck,v) => {
    const currVal_0:any = import1.ɵinlineInterpolate(1,'',(<any>v.parent).context.$implicit.img,'');
    const currVal_1:any = import1.ɵinlineInterpolate(1,'',(<any>v.parent).context.$implicit.description,'');
    ck(v,0,0,currVal_0,currVal_1);
  });
}
function View_Gallery_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Gallery_3)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Gallery_4)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n      ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit.thumb;
    ck(v,3,0,currVal_0);
    const currVal_1:boolean = !v.context.$implicit.thumb;
    ck(v,6,0,currVal_1);
  },(null as any));
}
function View_Gallery_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'ng-gallery'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Gallery_2)),
    import1.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.images;
    ck(v,3,0,currVal_0);
  },(null as any));
}
export function View_Gallery_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Gallery_1)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:import3.Gallery = v.component;
    const currVal_0:any = co.showGallery;
    ck(v,2,0,currVal_0);
  },(null as any));
}
function View_Gallery_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'gallery',([] as any[]),(null as any),(null as any),(null as any),View_Gallery_0,RenderType_Gallery)),
    import1.ɵdid(24576,(null as any),0,import3.Gallery,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const GalleryNgFactory:import1.ComponentFactory<import3.Gallery> = import1.ɵccf('gallery',import3.Gallery,View_Gallery_Host_0,{
  images: 'images',
  showGallery: 'showGallery'
}
,{show: 'show'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2tzODkvZ2l0L2FuZ3VsYXItbW9kYWwtZ2FsbGVyeS9zcmMvY29tcG9uZW50cy9nYWxsZXJ5LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9rczg5L2dpdC9hbmd1bGFyLW1vZGFsLWdhbGxlcnkvc3JjL2NvbXBvbmVudHMvZ2FsbGVyeS5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9rczg5L2dpdC9hbmd1bGFyLW1vZGFsLWdhbGxlcnkvc3JjL2NvbXBvbmVudHMvZ2FsbGVyeS5jb21wb25lbnQudHMuR2FsbGVyeS5odG1sIiwibmc6Ly8vVXNlcnMva3M4OS9naXQvYW5ndWxhci1tb2RhbC1nYWxsZXJ5L3NyYy9jb21wb25lbnRzL2dhbGxlcnkuY29tcG9uZW50LnRzLkdhbGxlcnlfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICA8ZGl2IGNsYXNzPVwibmctZ2FsbGVyeVwiICpuZ0lmPVwic2hvd0dhbGxlcnlcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGkgb2YgaW1hZ2VzOyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICA8aW1nICpuZ0lmPVwiaS50aHVtYlwiIHNyYz1cInt7IGkudGh1bWIgfX1cIiBjbGFzcz1cIm5nLXRodW1iXCIgKGNsaWNrKT1cInNob3dNb2RhbEdhbGxlcnkoaW5kZXgpXCJcbiAgICAgICAgICAgICBhbHQ9XCJ7eyBpLmRlc2NyaXB0aW9uIH19XCIvPlxuICAgICAgICA8aW1nICpuZ0lmPVwiIWkudGh1bWJcIiBzcmM9XCJ7eyBpLmltZyB9fVwiIGNsYXNzPVwibmctdGh1bWJcIiAoY2xpY2spPVwic2hvd01vZGFsR2FsbGVyeShpbmRleClcIlxuICAgICAgICAgICAgIGFsdD1cInt7IGkuZGVzY3JpcHRpb24gfX1cIi8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgIiwiPGdhbGxlcnk+PC9nYWxsZXJ5PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQ0dRO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUEwRDtRQUFBO1FBQUE7TUFBQTtNQUExRDtFQUFBO0lBQXFCO0lBQ2hCO0lBREwsU0FBcUIsVUFDaEIsU0FETDs7Ozs2QkFFQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBeUQ7UUFBQTtRQUFBO01BQUE7TUFBekQ7RUFBQTtJQUFzQjtJQUNqQjtJQURMLFNBQXNCLFVBQ2pCLFNBREw7Ozs7O0lBSEY7SUFBaUQ7SUFDL0M7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUNnQztJQUNoQztnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQ2dDOzs7SUFIM0I7SUFBTCxTQUFLLFNBQUw7SUFFSztJQUFMLFNBQUssU0FBTDs7Ozs7TUFKSjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTRDO0lBQzFDO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBS007Ozs7SUFMRDtJQUFMLFNBQUssU0FBTDs7Ozs7SUFGTjtJQUNJO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFPTTs7OztJQVBrQjtJQUF4QixTQUF3QixTQUF4Qjs7Ozs7SUNESjtnQkFBQTs7Ozs7Ozs7In0=