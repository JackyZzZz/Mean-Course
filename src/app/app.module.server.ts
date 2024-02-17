import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { FormsModule } from '@angular/forms';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
