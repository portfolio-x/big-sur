import { Store } from 'pullstate';
import Apps from 'components/apps';

export const AppStore = new Store({
  active: null,
  apps: Apps,
});
