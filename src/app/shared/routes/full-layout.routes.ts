import {Routes} from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('../../customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'account',
    loadChildren: () => import('../../account/account.module').then(m => m.AccountModule)
  }

];
