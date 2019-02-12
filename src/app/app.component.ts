import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Application de type blog';
    
  posts = [
      {
          title: 'Mon 1er post',
          content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          loveIts: 0,
          like: 0,
          dontLike: 0,
          created_at: new Date()
      },
      {
          title: 'Mon 2ème post',
          content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          loveIts: 0,
          like: 0,
          dontLike: 0,
          created_at: new Date()
      },
      {
          title: 'Mon 3ème post',
          content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
          loveIts: 0,
          like: 0,
          dontLike: 0,
          created_at: new Date()
      }
  ];
}
