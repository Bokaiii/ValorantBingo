import { Routes } from '@angular/router';
import { DownloadBoardComponent } from './download-board/download-board.component';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
    {
        path: '',
        component: OverviewComponent,
        pathMatch: 'full'
    },
    {
        path: 'download',
        component: DownloadBoardComponent,
        pathMatch: 'full'
    }
];
