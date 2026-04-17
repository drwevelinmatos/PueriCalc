import { initMainTabs } from './router.js';

function bootstrap() {
  initMainTabs();

  document.getElementById('tab-neo').innerHTML = '<h2>Neonato OK</h2><p>Render manual funcionando.</p>';
  document.getElementById('tab-cresc').innerHTML = '<h2>Crescimento OK</h2><p>Render manual funcionando.</p>';
  document.getElementById('tab-cardio').innerHTML = '<h2>Cardio OK</h2><p>Render manual funcionando.</p>';
}

document.addEventListener('DOMContentLoaded', bootstrap);
