import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from './custom-pipe.pipe';

@NgModule({
  declarations: [CustomPipePipe],
  imports: [CommonModule],
  exports: [CustomPipePipe],
})
export class SharedModule {}
