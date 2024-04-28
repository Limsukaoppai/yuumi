const util = require("util");
const path = require("path");

const handler = async (m, { conn }) => {
    const randomIndex = Math.floor(Math.random() * audio.length);
    conn.sendFile(m.chat, audio[randomIndex], "oy.mp3", null, m, true, {
        type: "audioMessage",
        ptt: true,
    });
};
handler.customPrefix = /^(bot|yuna|yun)$/i; // Mengubah prefix menjadi hanya "bot"
handler.command = new RegExp();

module.exports = handler;

const audio = [
    "https://bucin-livid.vercel.app/audio/adaapa.mp3",
];