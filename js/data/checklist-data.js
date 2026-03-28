export const CHECK_DATA = {
  "0m": {
    titulo: "Ao nascer (0 mês)",
    vacinas: [
      "BCG (dose única) - ideal ainda na maternidade.",
      "Hepatite B (dose ao nascer) - se mãe HBsAg+, associar HBIG o mais precocemente (até 7 dias)."
    ],
    privado: [
      "Hep B pode estar embutida em vacinas combinadas depois (penta/hexa), então o total pode ser 3 ou 4 doses conforme o produto."
    ],
    dnpm: null,
    alertas: []
  },

  "1m": {
    titulo: "1 mês",
    vacinas: [
      "Checagem de oportunidade/atrasos: Hep B ao nascer / BCG."
    ],
    privado: [
      "Nirsevimabe (VSR) pode ser aplicado a partir do nascimento, dose única, recomendado para < 8 meses (8 a 23 meses apenas para maior risco)."
    ],
    dnpm: {
      social: [
        "Acalma-se ao ouvir voz dos pais",
        "Olha brevemente para o rosto"
      ],
      linguagem: [
        "Emite sons guturais",
        "Chora de forma diferenciada"
      ],
      cognitivo: [
        "Fixa brevemente objetos",
        "Segue objetos em linha média"
      ],
      motor: [
        "Movimentos simétricos",
        "Levanta discretamente a cabeça em prono"
      ]
    },
    alertas: []
  },

  "2m": {
    titulo: "2 meses",
    vacinas: [
      "Pentavalente (DTPw + Hib + Hep B) - 1ª dose",
      "VIP (Polio inativada) - 1ª dose",
      "Pneumocócica conjugada (PNI: VPC10) - 1ª dose",
      "Rotavírus (monovalente no SUS) - 1ª dose (janela ampliada: D1 pode até 11 meses 29 dias)."
    ],
    privado: [
      "Hexa acelular (DTaP + VIP + Hib + HepB) pode substituir penta + VIP (menos injeções, melhor tolerabilidade).",
      "Pneumocócica VPC15 ou VPC20 (em vez de VPC10) - seguir bula/idade de início; são intercambiáveis dentro de esquemas conforme orientação SBIm.",
      "Rotavírus pentavalente (VRH5): 3 doses (2, 4 e 6 meses) (em vez da monovalente 2 doses)."
    ],
    dnpm: {
      social: [
        "Sorriso social",
        "Observa atentamente o cuidador"
      ],
      linguagem: [
        "Vocaliza (vogais)",
        "Sons tipo agu"
      ],
      cognitivo: [
        "Segue objetos até 180°",
        "Demonstra interesse por estímulos"
      ],
      motor: [
        "Sustenta melhor a cabeça",
        "Apoia-se nos antebraços em prono"
      ]
    },
    alertas: []
  }
};
