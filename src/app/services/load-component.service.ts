import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadComponentService {
  async loadComponent(viewContainerRef:ViewContainerRef,componentType:any){
      viewContainerRef.clear();
    return viewContainerRef.createComponent(componentType)
  }
}
