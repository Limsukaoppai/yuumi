const fetch = require("node-fetch");

const handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
  if (!text) throw 'Contoh: .ai-img highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed';
  m.reply('Tunggu sebentar...');
  const anu = `https://aemt.me/ai/text2img?text=${encodeURIComponent(text)}`;
  const result = await Promise.all([anu, anu, anu].map(async (url, index) => {
    const res = await fetch(url);
    if (!res.ok) throw `${res.status} ${res.statusText}`;
    return conn.sendFile(m.chat, await res.buffer(), 'result_' + (index + 1) + '.jpg', `Hasil ke-${index + 1}: ${text}`, m);
  }));
};

handler.help = ['ai-img'];
handler.tags = ['ai'];
handler.command = /^(txt2img|ai-img)$/i;
handler.premium = true;
module.exports = handler;
