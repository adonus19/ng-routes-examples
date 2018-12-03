import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'myApp';
  @Input() inputName;
  @Input() inputPass;

  constructor(private route: Router, private http: HttpClient) { }

  doLogin() {
    // Get data
    const data = {
      login: this.inputName,
      pass: this.inputPass,
    };
    // Send to server
    this.http.post('https://aws.com/auth', data).
      subscribe((resp) => {
        if (resp['approaved']) {
          this.route.navigate(['/dashboard']);
        }
      });
  }
}
