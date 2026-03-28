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
      </select>

      <div id="check-area" style="margin-top:15px"></div>
    </div>
  `;

  byId('ck-idade')?.addEventListener('change', renderCheck);
}

function renderCheck() {
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
      <strong>${d.titulo}</strong>
    </div>
  `;
}
