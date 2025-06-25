import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import routeconfig from './app/routes';

bootstrapApplication(App, 
  {
    providers: [
      provideRouter(routeconfig)
    ]
  })
  .catch((err) => console.error(err));
