import { byId } from '../../utils/dom.js';
import { CHECK_DATA } from '../../data/checklist-data.js';

export function renderChecklist() {
  const root = byId('tab-check');
  if (!root) return;

  root.innerHTML = `
    <div class="card">
      <div class="card-header" style="border-color:var(--check)">
        <h2>Checklist de Puericultura, Vacinação e DNPM</h2>
      </div>

      <label>Faixa etária / idade da consulta</label>
      <select id="ck-idade">
        <option value="">Selecione...</option>
        <option value="0m">Ao nascer (0 mês)</option>
        <option value="1m">1 mês</option>
        <option value="2m">2 meses</option>
        <option value="3m">3 meses</option>
        <option value="4m">4 meses</option>
        <option value="5m">5 meses</option>
        <option value="6m">6 meses</option>
        <option value="7m">7 meses</option>
        <option value="8m">8 meses</option>
        <option value="9m">9 meses</option>
        <option value="10m">10 meses</option>
        <option value="11m">11 meses</option>
        <option value="12m">12 meses</option>
        <option value="13_14m">13 a 14 meses</option>
        <option value="15m">15 meses</option>
        <option value="16_17m">16 a 17 meses</option>
        <option value="18m">18 meses</option>
        <option value="19_20m">19 a 20 meses</option>
        <option value="21_22m">21 a 22 meses</option>
        <option value="23_24m">23 a 24 meses</option>
        <option value="2_3a">2 a 3 anos</option>
        <option value="3a">3 anos</option>
        <option value="4a">4 anos</option>
        <option value="5a">5 anos</option>
        <option value="6a">6 anos</option>
        <option value="7_8a">7 a 8 anos</option>
        <option value="9a">9 anos</option>
        <option value="10a">10 anos</option>
        <option value="11a">11 anos</option>
        <option value="12_14a">12 a 14 anos</option>
        <option value="15_19a">15 a 19 anos</option>
      </select>

      <div id="check-area" style="margin-top:15px"></div>
    </div>
  `;

  byId('ck-idade')?.addEventListener('change', renderCheckArea);
}

function renderCheckArea() {
  const idade = byId('ck-idade')?.value;
  const area = byId('check-area');

  if (!area) return;
  if (!idade || !CHECK_DATA[idade]) {
    area.innerHTML = '';
    return;
  }

  const d = CHECK_DATA[idade];

  area.innerHTML = `
    <div class="result-box" style="display:block">
      <span class="destaque">${d.titulo}</span>
      <div class="muted">Checklist ampliado de vacinação, rede privada/SBIm, desenvolvimento e alertas.</div>
    </div>

    <div class="check-wrap">
      ${renderList('Vacinas / condutas principais', d.vacinas, 'PNI')}
      ${renderList('Privado / SBIm / observações', d.privado, 'Privado / SBIm')}
      ${renderDNPM(d.dnpm)}
      ${renderAlertas(d.alertas)}
    </div>
  `;
}

function renderList(title, items, tag = '') {
  if (!items || !items.length) return '';

  return `
    <div class="check-block">
      ${tag ? `<div class="check-tag">${tag}</div>` : ''}
      <h3>${title}</h3>
      <ul class="check-list">
        ${items.map(item => `<li>☐ ${item}</li>`).join('')}
      </ul>
    </div>
  `;
}

function renderDNPM(dnpm) {
  if (!dnpm) return '';

  let html = `
    <div class="check-block">
      <h3>DNPM</h3>
      <div class="check-subtitle">Marcos esperados para a faixa etária</div>
  `;

  if (dnpm.social?.length) {
    html += `<div class="check-muted-box"><b>Social / Emocional</b><br>${dnpm.social.map(i => `☐ ${i}`).join('<br>')}</div><br>`;
  }

  if (dnpm.linguagem?.length) {
    html += `<div class="check-muted-box"><b>Linguagem / Comunicação</b><br>${dnpm.linguagem.map(i => `☐ ${i}`).join('<br>')}</div><br>`;
  }

  if (dnpm.cognitivo?.length) {
    html += `<div class="check-muted-box"><b>Cognitivo</b><br>${dnpm.cognitivo.map(i => `☐ ${i}`).join('<br>')}</div><br>`;
  }

  if (dnpm.motor?.length) {
    html += `<div class="check-muted-box"><b>Movimento / Desenvolvimento físico</b><br>${dnpm.motor.map(i => `☐ ${i}`).join('<br>')}</div><br>`;
  }

  if (dnpm.puberdade?.length) {
    html += `<div class="check-muted-box"><b>Puberdade</b><br>${dnpm.puberdade.map(i => `☐ ${i}`).join('<br>')}</div>`;
  }

  html += `</div>`;
  return html;
}

function renderAlertas(alertas) {
  if (!alertas || !alertas.length) return '';

  return `
    <div class="check-alert">
      <b>🚩 Alertas importantes</b><br>
      ${alertas.map(item => `• ${item}`).join('<br>')}
    </div>
  `;
}
