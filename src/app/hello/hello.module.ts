import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TestingPipe } from './testing.pipe';

@NgModule({
  declarations: [HelloWorldComponent, TestingPipe],
  imports: [CommonModule],
  exports: [HelloWorldComponent],
})
export class HelloModule {}
