import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () =>{
    console.log('The bot is ready!')
    const guildID = '877713264115581009'
    const guild = client.guilds.cache.get(guildID)
    let commands

    if(guild){
        commands = guild.commands
    }else{
        commands = client.application?.commands
    }

    commands?.create({ 
        name: 'ping',
        description: 'Replies with pong',

    })

    commands?.create({ 
        name: 'turtle',
        description: 'Replies with turtle',
    })

    commands?.create({ 
        name: 'somar',
        description: 'Sum two numbers',
        options: [
            {    
                name: 'numero1',
                description: 'First number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'numero2',
                description: 'Second number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })

    commands?.create({ 
        name: 'multiplicar',
        description: 'Multiplies two numbers',
        options: [
            {    
                name: 'numero1',
                description: 'First number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'numero2',
                description: 'Second number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })

    commands?.create({ 
        name: 'subtrair',
        description: 'Subtract two numbers',
        options: [
            {    
                name: 'numero1',
                description: 'First number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'numero2',
                description: 'Second number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })

    commands?.create({ 
        name: 'dividir',
        description: 'Divide two numbers',
        options: [
            {    
                name: 'numero1',
                description: 'First number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'numero2',
                description: 'Second number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })

})


client.on('interactionCreate', async (interaction)=>{
    if(!interaction.isCommand()){
        return 
    }

    const { commandName, options } = interaction 

    if(commandName === 'ping'){
        interaction.reply({
            content: 'pong',
            //ephemeral: true,
        })
    }
    else if(commandName === 'somar'){
        const numero1 = options.getNumber('numero1')!
        const numero2 = options.getNumber('numero2')!

        interaction.reply({
            content: `A soma que o vitinho fez ficou: ${numero1 + numero2}`,
            //ephemeral: true
        })
    }
    else if(commandName === 'multiplicar'){
        const numero1 = options.getNumber('numero1')!
        const numero2 = options.getNumber('numero2')!

        interaction.reply({
            content: `A multiplicação que o vitinho fez ficou: ${numero1 * numero2}`,
            //ephemeral: true
        })
    }

    else if(commandName === 'subtrair'){
        const numero1 = options.getNumber('numero1')!
        const numero2 = options.getNumber('numero2')!

        interaction.reply({
            content: `A subtração que o vitinho fez ficou: ${numero1 - numero2}`,
            //ephemeral: true
        })
    }
    else if(commandName === 'turtle'){
        interaction.reply({
            content: ':turtle:',
            //ephemeral: true,
        })
    }



})
client.login(process.env.TOKEN)

