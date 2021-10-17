// const { validateRequiredParameters } = require('@discordjs/builders/dist/interactions/slashCommands/Assertions')
const { Client, Intents, MessageEmbed, TextChannel } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

// module
const Collection = require("@discordjs/collection");







// module end


// const Discord = require('discord.js')
// const client = new Discord.Client()


// const channels = message.guild.channel
client.on('ready', () => {

    const data = [{
        name: "csi",
        description: "Check self‐introduction System command",
        options: [
            {
                type: "SUB_COMMAND",
                name: "user",
                description: "set a target user",
                options: [{
                    type: "USER",
                    name: "target",
                    description: "The user",
                }],
        },
        {
            type: "SUB_COMMAND",
                name: "-help",
                description: "show CSI System help",
        },
        {
            type: "SUB_COMMAND",
                name: "all",
                description: "search all members",
        },
        ],
    }];


    client.application.commands.set(data, SET_CHANNEL);

  console.log(`${client.user.tag} でログインしています。`)
})


client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    // if (interaction.commandName === 'ping') {
    //     await interaction.reply('Pong！');
    // }

    // if (interaction.content === '!ping') {
    //     interaction.channel.send('Pong!')
    //   }
    
    
    
      if (interaction.commandName === 'csi'){
    
        //   module
            // function array2Collection(interactions) {
            //     return new Collection(interactions.sort((a, b) => BigInt(a.id) < BigInt(b.id) ? 1 : -1).map(e => [e.id, e]));
            // }
            // async function fetchMany(channel, options = { limit: 50 }) {
            //  if ((options.limit ?? 50) <= 100) {
            //    return channel.interactions.fetch(options);
            //  }
              
            //  if (typeof options.around === "string") {
            //    const interactions = await channel.interactions.fetch({ ...options, limit: 100 });
            //    const limit = Math.floor((options.limit - 100) / 2);
            //    if (interactions.size < 100) {
            //      return interactions;
            //    }
            //    const backward = fetchMany(channel, { limit, before: interactions.last().id });
            //    const forward = fetchMany(channel, { limit, after: interactions.first().id });
            //    return array2Collection([interactions, ...await Promise.all([backward, forward])].flatMap(
            //      e => [...e.values()]
            //    ));
            //  }
            //  let temp;
            //  function buildParameter() {
            //    const req_cnt = Math.min(options.limit - interactions.length, 100);
            //    if (typeof options.after === "string") {
            //      const after = temp
            //        ? temp.first().id : options.after
            //      return { ...options, limit: req_cnt, after };
            //    }
            //    const before = temp
            //      ? temp.last().id : options.before;
            //    return { ...options, limit: req_cnt, before };
            //  }
            //  const interactions = [];
            //  while (interactions.length < options.limit) {
            //    const param = buildParameter();
            //    temp = await channel.interactions.fetch(param);
            //    interactions.push(...temp.values());
            //    if (param.limit > temp.size) {
            //      break;
            //    }
            //  }
            //  return array2Collection(interactions);
            // }
    
    
            if(interaction.options.getSubcommand() === '-help'){
    
                const helpEmbed = {
                    color: '#0099ff',
                    title:'自己紹介確認システム CSI help',
                    author: {
                        name: 'CSI SYSTEM HELP',
                        url: "https://github.com/Hz-Create/CSI_System",
                    },
                    title: '自己紹介確認システム CSI help',
                    color: 7506394,
                    timestamp: new Date(),
                        
                    fields: [
                        {
                            name: "ヘルプの表示",
                            value: "`/csi -help` と入力します。"
                        },
                        {
                            name: "自己紹介確認機能 全ユーザ検索",
                            value: "`/csi all` と入力します。"
                        },
                        {
                            name: "自己紹介確認機能 ユーザー指定",
                            value: "`/csi user 指定したいユーザー名` と入力します。(例) `/CSI user target: test_kun` \nニックネームは使えません。"
                        }
                    ]
            };
    
                await interaction.reply(
                    {embeds: [helpEmbed]}
    
    
    
            );
        
        
            }
    
            // ユーザー指定調査
            else if (interaction.options.getSubcommand() === 'user'){
        
            let target_user = interaction.options.getUser('target');
            target_user = target_user.username
            // await interaction.reply('指定されたユーザーの自己紹介の有無を確認します。')
            // await interaction.reply(`指定されたユーザー: ${target_user}`)
            // let channel = interaction.channel
            let channel = client.channels.cache.get(SET_CHANNEL)
            console.log(channel)
            console.log("space")
            let get_messages = await channel.messages.fetch({limit: 100})
            let get_message_show = await channel.messages.fetch({limit: 100})
    
    
        //     let get_interactions_user = []
        //     let get_interaction_show = []
        //     const fetchedinteractions = await fetchMany(channel, {
        //      limit: 400,
             
        //     });
        
        // fetchedinteractions.forEach(msg =>
        //   get_interactions_user.push(`${msg.author.username}`)
        //   | ${msg.content}
        // )
    
        // fetchedinteractions.forEach(msg =>
        //     get_interaction_show.push(`${msg.author.username} | ${msg.content}`)
        //   )
        
        // console.log(get_interactions.join('\n'))
            
            console.log(get_messages.map(message => message.author))
            console.log("space")
            console.log(get_messages.filter(message => message.author == target_user))
    
            // let get_messages = csi_channnel.messages.fetch( {limit: 1000})
            // let messages = await client.channels.cache.get('891207834723840041').fetch({ limit: 1000})
            // client.get_messages.cache.forEach(i => console.log(i.author))
            let target_message = get_messages.filter(messages => messages.author.username == target_user)
            // target_message = target_message.content
    
            console.log(target_message.map(messages => messages.content.content))
    
            let target_message_show = get_message_show.find(messages => messages.author.username == target_user)
            // target_interaction_show = target_interaction_show.fetch({limit:1})
            // target_interaction_show = target_interaction_show.map(interaction => interaction.content)
    
            // 検出結果
            console.log("space")
            console.log(target_message_show)
    
            let targetnoEmbed = {
                author: {
                    name: 'CSI SYSTEM',
                    url: "https://github.com/Hz-Create/CSI_System",
                },
                title: '指定されたユーザーは自己紹介をしていません。',
                color: 7506394,
                timestamp: new Date(),
                description: `対象ユーザー: ${target_user}`,
    
              };
    
        let targetEmbed = {
            author: {
                name: 'CSI SYSTEM',
                url: "https://github.com/Hz-Create/CSI_System",
            },
            title: '指定されたユーザーは自己紹介をしています。',
            color: 7506394,
            timestamp: new Date(),
            description: `対象ユーザー: ${target_user}`,
    
            fields:{
                name: "検出されたメッセージ",
                value: `${target_message_show.content}`
            }
          };
    
    
    
            if(target_message_show.size == 0){
                interaction.reply( 
    
    
                {embeds: [targetnoEmbed]}
                  );
                
            }else{
    
      
                interaction.reply(
    
                    {embeds: [targetEmbed]}
    
                  );
                
            }
        }else{
            // 全ユーザー処理
            // await interaction.reply('全ユーザーの自己紹介の有無を確認します。')
            // let guild = client.guilds.cache.get(SET_CHANNEL)
            let server_members = interaction.guild.members.fetch()
            console.log(server_members)
    
    
            let channel = client.channels.cache.get(SET_CHANNEL)
            console.log(channel)
            console.log("space")
            let get_messages = await channel.messages.fetch({limit: 100})
            let get_message_show = await channel.messages.fetch({limit: 100})
    
            console.log(get_messages.map(message => message.author))
            console.log("space")
    
    
            let intro_found = []
            let intro_found_user = []
    
            let intro_notfound_user = []
    
            console.log(server_members)
            interaction.guild.members.cache.forEach(member => {
                console.log(member.user.username)
                
                    // intro_found[member] = interactions.filter(interactions.author == member)
                    let for_check = get_messages.filter(messages => messages.author.username == member.user.username)
    
                    if(for_check.size !== 0){
                        // 無駄な機構あり
                        // 検出ユーザー記録
                        let insert_check = get_messages.filter(messages => messages.author.username == member.user.username)
                        console.log(`${member.user.username}　ttttttttttt`)
                        intro_found_user.push(member.user.username)
                        intro_found_user.push("\n")
                        console.log(get_messages.filter(messages => messages.author.username == member.user.username))
                        let target_message_show = get_message_show.find(messages => messages.author.username == member.user.username)
                        console.log(target_message_show)
                        intro_found.push(target_message_show.content)
                        intro_found.push(" ")
                        
                    }else{
                        // 非検出ユーザー記録
                        intro_notfound_user.push(member.user.username)
                        intro_notfound_user.push("\n")
                    }
    
                    // console.log(`${intro_found_user} found`)
                    // console.log(`${intro_notfound_user} notfound`)
                    // intro_found.push(interactions.filter(interactions => interactions.author === element))
                    // intro_found_user.push(interactions.filter(interactions => interactions.author === element).author)
                
    
            });
            console.log(`${intro_found_user} found`)
            console.log("\n")
            console.log(`${intro_notfound_user} notfound`)
            
            // intro_notfound_user = intro_notfound_user.filter(function(v){
            //     intro_found_user.includes(v);
            // });
    
    
            // let keys = Object.keys(intro_found)
        //     function get_intro(){
        //         Object.keys(intro_found).forEach(element => {
        //             dields:{
        //                 name: `${element}`,
        //                 value: `${this[element]}`
        //             }
        //         });
        // }
        
    
        let noEmbed = {
            author: {
                name: 'CSI SYSTEM',
                url: "https://github.com/Hz-Create/CSI_System",
            },
            title: 'すべてのユーザーは自己紹介をしていません。',
            color: 7506394,
            timestamp: new Date(),
    
          };
    
    
        // 出力
            if(intro_found == null){
                await interaction.reply({embeds: 
    
                    [noEmbed]
    
            }
                  );
                
            }else{
    
    
                let foundEmbed = {
                    author: {
                        name: 'CSI SYSTEM',
                        url: "https://github.com/Hz-Create/CSI_System",
                    },
                    title: 'すべてのユーザーは自己紹介をしていません。',
                    color: 7506394,
                    timestamp: new Date(),
                    title: '全ユーザーの確認結果',
                    color: 7506394,
                    timestamp: new Date(),
                        
                    fields: [
                        {
                        name: "以下のユーザーは自己紹介をしています。",
                        value: `${intro_found_user}`
                    },
                    {
                        name: "以下のユーザーは自己紹介をしていません。",
                        value: `${intro_notfound_user}`
                    }
    
                    ],
                    description: "自己紹介済みのユーザに関してはユーザー指定確認で詳細を閲覧できます。"
            
                  };
                await interaction.reply(
                    {embeds: [foundEmbed]}
    
                  );
                
            }
        }
    
    
            }
});

client.login(DISCORD_TOKEN)
