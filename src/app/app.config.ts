import {
    provideHttpClient,
    withFetch,
    withInterceptors,
  } from '@angular/common/http';
  import { ApplicationConfig } from '@angular/core';
  import { ErrorResponseInterceptor } from './shared/error-response.interceptor';
  import { provideRouter } from '@angular/router';
  import { Routes } from './app-routing.module';
  
  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes),
      provideHttpClient(
        withFetch(),
        withInterceptors([ErrorResponseInterceptor])
      ),
    ],
  };
  