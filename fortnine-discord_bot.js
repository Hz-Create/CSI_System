// const { validateRequiredParameters } = require('@discordjs/builders/dist/interactions/slashCommands/Assertions')
// const { Client, Intents, MessageEmbed, TextChannel } = require('discord.js');

// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

// module
const Collection = require("@discordjs/collection");







// module end


const Discord = require('discord.js')
const client = new Discord.Client()


// const channels = message.guild.channel
client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('message', async message => {
  if (message.content === '!ping') {
    message.channel.send('Pong!')
  }

  if(message.content.startsWith('/help_CSI')){
    const helpEmbed = {
	color: '#0099ff',
	title:'自己紹介確認システム CSI help',
    author: {
        name: 'CSI SYSTEM HELP',
    },
	description:'CSI Help',
	fields: [
        {
            name: "ヘルプの表示",
            value: "`/help_CSI` と入力します。",
        },
        {
            name: "自己紹介確認機能 全ユーザ検索",
            value: "`/CSI` と入力します。",
        },
        {
            name: "自己紹介確認機能 ユーザー指定",
            value: "`/CSI 指定したいユーザー名` と入力します。(例) `/CSI test_kun`",
        },
    ],
	timestamp: new Date(),
    };
    // message.channel.send({ embeds: [helpEmbed] });

    // Help
    await message.channel.send(
        {embed: {
        title: '自己紹介確認システム CSI help',
        color: 7506394,
        timestamp: new Date(),
            
        fields: [
            {
                name: "ヘルプの表示",
                value: "`/help_CSI` と入力します。"
            },
            {
                name: "自己紹介確認機能 全ユーザ検索",
                value: "`/CSI` と入力します。"
            },
            {
                name: "自己紹介確認機能 ユーザー指定",
                value: "`/CSI 指定したいユーザー名` と入力します。(例) `/CSI test_kun` \nニックネームは使えません。"
            }
        ]
}}
);
      
}

  if (message.content.startsWith('/CSI')){

    //   module
        // function array2Collection(messages) {
        //     return new Collection(messages.sort((a, b) => BigInt(a.id) < BigInt(b.id) ? 1 : -1).map(e => [e.id, e]));
        // }
        // async function fetchMany(channel, options = { limit: 50 }) {
        //  if ((options.limit ?? 50) <= 100) {
        //    return channel.messages.fetch(options);
        //  }
          
        //  if (typeof options.around === "string") {
        //    const messages = await channel.messages.fetch({ ...options, limit: 100 });
        //    const limit = Math.floor((options.limit - 100) / 2);
        //    if (messages.size < 100) {
        //      return messages;
        //    }
        //    const backward = fetchMany(channel, { limit, before: messages.last().id });
        //    const forward = fetchMany(channel, { limit, after: messages.first().id });
        //    return array2Collection([messages, ...await Promise.all([backward, forward])].flatMap(
        //      e => [...e.values()]
        //    ));
        //  }
        //  let temp;
        //  function buildParameter() {
        //    const req_cnt = Math.min(options.limit - messages.length, 100);
        //    if (typeof options.after === "string") {
        //      const after = temp
        //        ? temp.first().id : options.after
        //      return { ...options, limit: req_cnt, after };
        //    }
        //    const before = temp
        //      ? temp.last().id : options.before;
        //    return { ...options, limit: req_cnt, before };
        //  }
        //  const messages = [];
        //  while (messages.length < options.limit) {
        //    const param = buildParameter();
        //    temp = await channel.messages.fetch(param);
        //    messages.push(...temp.values());
        //    if (param.limit > temp.size) {
        //      break;
        //    }
        //  }
        //  return array2Collection(messages);
        // }

        // ユーザー指定調査
        if (message.content.split(' ')[1]){
        
        let target_user = message.content.split(' ')[1]
        await message.channel.send('指定されたユーザーの自己紹介の有無を確認します。')
        await message.channel.send(`指定されたユーザー: ${target_user}`)
        // let channel = message.channel
        let channel = client.channels.cache.get(SET_CHANNEL)
        console.log(channel)
        console.log("space")
        let get_messages = await channel.messages.fetch({limit: 100})
        let get_message_show = await channel.messages.fetch({limit: 100})


    //     let get_messages_user = []
    //     let get_message_show = []
    //     const fetchedMessages = await fetchMany(channel, {
    //      limit: 400,
         
    //     });
    
    // fetchedMessages.forEach(msg =>
    //   get_messages_user.push(`${msg.author.username}`)
    //   | ${msg.content}
    // )

    // fetchedMessages.forEach(msg =>
    //     get_message_show.push(`${msg.author.username} | ${msg.content}`)
    //   )
    
    // console.log(get_messages.join('\n'))
        
        console.log(get_messages.map(message => message.author))
        console.log("space")
        console.log(get_messages.filter(message => message.author == target_user))

        // let get_messages = csi_channnel.messages.fetch( {limit: 1000})
        // let messages = await client.channels.cache.get('891207834723840041').fetch({ limit: 1000})
        // client.get_messages.cache.forEach(i => console.log(i.author))
        let target_message = get_messages.filter(messages => messages.author.username == target_user)
        // target_message = target_message.content

        console.log(target_message.map(message => message.content))

        let target_message_show = get_message_show.find(messages => messages.author.username == target_user)
        // target_message_show = target_message_show.fetch({limit:1})
        // target_message_show = target_message_show.map(message => message.content)

        // 検出結果
        console.log("space")
        console.log(target_message_show)
        if(target_message.size == 0){
            message.channel.send( 
                {embed: {
                title: '指定されたユーザーは自己紹介をしていません。',
                color: 7506394,
                timestamp: new Date(),
                description: `対象ユーザー: ${target_user}`,

              }}
              );
            
        }else{

            const target_Embed = {
                color: '#0099ff',
                title:'指定されたユーザーは自己紹介をしています。',
                author: {
                    name: 'CSI SYSTEM',
                },
                description:`対象ユーザー: ${target_user}`,
                fields: [
                    {
                    name: "検出されたメッセージ",
                    value: `${target_message}`,
                    },
                ],
                timestamp: new Date(),
                };
                // message.channel.send({ embeds: [helpEmbed] });
            message.channel.send(

                
                {embed: {
                title: '指定されたユーザーは自己紹介をしています。',
                color: 7506394,
                timestamp: new Date(),
                description: `対象ユーザー: ${target_user}`,

                fields:{
                    name: "検出されたメッセージ",
                    value: `${target_message_show.content}`
                }
              }}
              );
            
        }
    }else{
        // 全ユーザー処理
        await message.channel.send('全ユーザーの自己紹介の有無を確認します。')
        let server_members = message.guild.members.fetch()
        console.log(server_members)
        // let server_members = list.members.forEach(member => console.log(member.user.username));
        // let messages = await client.channels.cache.get('891207834723840041').fetch({ limit: 1000})
        // let intro_found = []
        // let intro_found_user = []
        // let intro_notfound_user = guild.members.fetch()

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
        message.guild.members.cache.forEach(member => {
            console.log(member.user.username)
            
                // intro_found[member] = messages.filter(messages.author == member)
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
                // intro_found.push(messages.filter(messages => messages.author === element))
                // intro_found_user.push(messages.filter(messages => messages.author === element).author)
            

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
    
    // 出力
        if(intro_found == null){
            await message.channel.send('すべてのユーザーは自己紹介をしていません。')
            
        }else{
            await message.channel.send(
                {embed: {
                title: '実行結果',
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
        }}
              );
            
        }
    }


        }

})

client.login(DISCORD_TOKEN)
