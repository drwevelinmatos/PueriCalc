import { initMainTabs } from './router.js';
import { renderNeonato } from './tabs/neonato/index.js';

function bootstrap() {
  initMainTabs();
  renderNeonato();
}

document.addEventListener('DOMContentLoaded', bootstrap);
