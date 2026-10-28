// Drapeaux intégrés (SVG simplifiés), utilisés dans la rubrique Mobilité. Dans content.js : flag: "fr".
// Codes disponibles : fr es it pl ch no se us ca de be nl ie at dk fi
const FLAGS = {
  fr: ["3 2", '<rect width="1" height="2" fill="#0055A4"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#EF4135"/>'],
  es: ["3 2", '<rect width="3" height="2" fill="#AA151B"/><rect y=".5" width="3" height="1" fill="#F1BF00"/>'],
  it: ["3 2", '<rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE2B37"/>'],
  pl: ["8 5", '<rect width="8" height="2.5" fill="#fff"/><rect y="2.5" width="8" height="2.5" fill="#DC143C"/>'],
  ch: ["32 32", '<rect width="32" height="32" fill="#D52B1E"/><path fill="#fff" d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z"/>'],
  no: ["22 16", '<rect width="22" height="16" fill="#BA0C2F"/><path fill="#fff" d="M6 0h4v16H6zM0 6h22v4H0z"/><path fill="#00205B" d="M7 0h2v16H7zM0 7h22v2H0z"/>'],
  se: ["16 10", '<rect width="16" height="10" fill="#006AA7"/><path fill="#FECC02" d="M5 0h2v10H5zM0 4h16v2H0z"/>'],
  us: ["19 10", '<rect width="19" height="10" fill="#fff"/><path fill="#B22234" d="M0 0h19v.77H0zM0 1.54h19v.77H0zM0 3.08h19v.77H0zM0 4.62h19v.77H0zM0 6.15h19v.77H0zM0 7.69h19v.77H0zM0 9.23h19V10H0z"/><rect width="7.6" height="5.38" fill="#3C3B6E"/>'],
  ca: ["2 1", '<rect width="2" height="1" fill="#fff"/><rect width=".5" height="1" fill="#D80621"/><rect x="1.5" width=".5" height="1" fill="#D80621"/><path fill="#D80621" d="M1 .2l.06.16.1-.06-.03.2.09-.05-.03.11.08.04-.24.12.01.1H.96l.01-.1-.24-.12.08-.04-.03-.11.09.05-.03-.2.1.06z"/>'],
  de: ["5 3", '<rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#D00"/><rect y="2" width="5" height="1" fill="#FFCE00"/>'],
  be: ["3 2", '<rect width="1" height="2" fill="#000"/><rect x="1" width="1" height="2" fill="#FAE042"/><rect x="2" width="1" height="2" fill="#ED2939"/>'],
  nl: ["3 2", '<rect width="3" height=".67" fill="#AE1C28"/><rect y=".67" width="3" height=".67" fill="#fff"/><rect y="1.33" width="3" height=".67" fill="#21468B"/>'],
  ie: ["3 2", '<rect width="1" height="2" fill="#169B62"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#FF883E"/>'],
  at: ["3 2", '<rect width="3" height="2" fill="#ED2939"/><rect y=".67" width="3" height=".67" fill="#fff"/>'],
  dk: ["37 28", '<rect width="37" height="28" fill="#C8102E"/><path fill="#fff" d="M12 0h4v28h-4zM0 12h37v4H0z"/>'],
  fi: ["18 11", '<rect width="18" height="11" fill="#fff"/><path fill="#003580" d="M5 0h3v11H5zM0 4h18v3H0z"/>']
};
function flag(k) {
  const f = FLAGS[k];
  if (!f) return "";
  const [w, h] = f[0].split(" ");
  return `<svg class="flag" viewBox="0 0 ${w} ${h}" width="${(15 * w / h).toFixed(1)}" height="15" aria-hidden="true">${f[1]}</svg>`;
}
