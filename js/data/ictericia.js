export const SBP2021_PRE35 = [
  { minGA: 0, maxGA: 27.999, photo: [5, 6], exch: [11, 14] },
  { minGA: 28.0, maxGA: 29.999, photo: [6, 8], exch: [12, 14] },
  { minGA: 30.0, maxGA: 31.999, photo: [8, 10], exch: [13, 16] },
  { minGA: 32.0, maxGA: 33.999, photo: [10, 12], exch: [15, 18] },
  { minGA: 34.0, maxGA: 34.999, photo: [10, 12], exch: [17, 19] }
];

export const SBP2021_GE35 = {
  groups: [
    { name: '35-37', minGA: 35, maxGA: 37.999, rows: [] },
    { name: '>=38', minGA: 38, maxGA: 99, rows: [] }
  ]
};

export function pickThreshold(range, hasRisk) {
  return hasRisk ? range[0] : range[1];
}

export function findPre35Row(gaFloat) {
  return SBP2021_PRE35.find(
    (row) => gaFloat >= row.minGA && gaFloat <= row.maxGA
  ) || null;
}

export function findGE35Row(gaFloat, hours) {
  const group = SBP2021_GE35.groups.find(
    (g) => gaFloat >= g.minGA && gaFloat <= g.maxGA
  );

  if (!group) return null;

  const row = group.rows.find(
    (r) => hours >= r.minH && hours <= r.maxH
  );

  return row ? { group, row } : null;
}
