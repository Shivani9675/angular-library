import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTransferService } from 'show_log_message';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-lib';

  constructor(private messageTransferServices:DataTransferService){
    this.messageTransferServices.logMessage("Hello Everyone!")
  }
}
