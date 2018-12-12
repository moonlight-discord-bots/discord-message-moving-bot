#!/bin/bash

if [ -f config.js ]; then
    echo -e "\033[1;33mWARNING: the config file has already been created\033[0m"
    exit 0
fi

echo -e "\033[1;34m========="
echo -e "BOT SETUP"
echo -e "\033[1;34m========="

echo -e "\033[0m"

echo "This process will guide you in the basic setup of the bot. Please follow the instructions on screen carefully."
echo
echo -e "\033[0;31mIMPORTANT: Do not share your token to anyone. If someone is asking you for the token, they're likely trying to scam you!\033[0m"
echo -n "Please input your bot token: "

read -s token

echo
echo

echo "Ok, now you need to input the bot owner ID"
echo "This will give the owner permission to use every command. You can add more owners later."
echo -e "An ID should look like this: \033[1;34m178261738364338177\033[0m"
echo -n "Please input the ID: "
read owner

echo "What do you want the bot's prefix to be?"
echo -n "Please input a prefix: "
read prefix

touch config.js
echo "Config file created, adding data in there"

echo "module.exports = {
  prefix: '${prefix}', // Bot's prefix
  token: '${token}', // Must be kept private AT ALL TIME
  owners: ['${owner}'], // Bot owner's ID. You can get this with discord developer mode
  allowMentionPrefix: true,

}" >> otherconfig.js

echo -e "\033[1;32mSUCCESS: the bot has been configured and is ready to be used\033[0m"
