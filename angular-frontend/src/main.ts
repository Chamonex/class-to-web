import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Bootstraps an instance of an Angular application and renders a standalone component
 * as the application's root component
 * 
 * LEARNING:
 * Components, directives, and pipes can now be marked as standalone: true. 
 * Angular classes marked as standalone do not need to be declared in an 
 * NgModule (the Angular compiler will report an error if you try).
 * 
 * Standalone components specify their dependencies directly instead of getting
 * them through NgModules. For example, if PhotoGalleryComponent is a standalone 
 * component, it can directly import another standalone component ImageGridComponent:
 * 
 * Se o componente não for standalone, deve ser criado seu NgModule, que é
 * um módulo que agrupa componentes, diretivas e pipes relacionados.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
