export const PRIZES = [
 {id:'beso', name:'Un beso', short:'Beso', note:'De esos que hacen que todo lo demás desaparezca.', emoji:'💋'},
 {id:'tarde', name:'Una tarde juntos', short:'Tarde juntos', note:'Sin prisas. Sin pendientes. Solo tú y yo.', emoji:'🌅'},
 {id:'abrazo', name:'Un abrazo', short:'Abrazo', note:'Largo, apretadito y en tu lugar favorito: mis brazos.', emoji:'🫂'},
 {id:'cena', name:'Una cena', short:'Cena', note:'Una mesa para dos y mil cosas por contarnos.', emoji:'🕯️'},
 {id:'cocinar', name:'Cocinar juntos', short:'Cocinar juntos', note:'La mejor receta siempre empieza contigo.', emoji:'🍝'},
 {id:'carinos', name:'30 mins de cariñitos', short:'30 min de cariñitos', note:'Media hora para consentirte como te mereces.', emoji:'💕'},
 {id:'masaje', name:'1 masaje', short:'Masaje', note:'Un ratito de calma, cuidado y mucho amor.', emoji:'✨'},
];
export const STORAGE_KEY='t-amo-cupones-v1';
export function readHistory(raw){try{const a=JSON.parse(raw);return Array.isArray(a)?[...new Set(a.filter(id=>PRIZES.some(p=>p.id===id)))]:[]}catch{return []}}
export function choosePrize(items,random=Math.random()){if(!items.length)return null;return items[Math.min(items.length-1,Math.max(0,Math.floor(random*items.length)))];}
export function targetRotation(previous,index,count){const angle=360/count;const target=(360-(index+.5)*angle)%360;return previous+360*6+((target-previous%360+360)%360);}
