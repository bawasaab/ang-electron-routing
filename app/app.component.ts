import { OnInit, Component, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-electron-routing';
  private remote;
  private menu;
  private shell;

  constructor(
    private ngZone: NgZone,
    public router: Router,
    private _electronService: ElectronService
  ) {

    this.shell = this._electronService.shell;
    this.remote = this._electronService.remote;

    
  }

  ngOnInit() {

    let template = [
      { 
        label: 'File', 
        submenu: [
          { role: 'quit' }
        ] 
      },
      { 
        label: 'View', 
        submenu:  [
          // { role: 'reload' }, // reloads the app
          // { role: 'forcereload' },
          { role: 'toggledevtools' },
          { role: 'resetzoom' },
          { role: 'zoomin' },
          { role: 'zoomout' },
          { role: 'togglefullscreen' }
        ]
      },
      {
        label: 'one',
        click: () => {
          this.ngZone.run(() => this.router.navigate(['/one']));
        }
      },
      {
        label: 'two',
        click: () => {
          this.ngZone.run(() => this.router.navigate(['/two']));
        }
      }
    ];

    this.menu = this.remote.Menu.buildFromTemplate( template );
    this.remote.Menu.setApplicationMenu( this.menu );
  }
}
