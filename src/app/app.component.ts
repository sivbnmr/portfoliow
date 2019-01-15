import { Component } from '@angular/core';
import{Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  styles: []
})
export class AppComponent {
  title = 'portfoliow';
  private apiUrl = 'http://www.behance.net/v2/users/{user_id}/projects?api_key={rhGX1o90dJl8M19KsFpiQB7mJxvD5CCs}';


  getUserProjects(){

    return this.http.get(this.apiUrl)
  }

}
