---
layout: default
title: Drawer
---

# Drawer
various things you might find useful

## Software
Cool software that doesn't make you sign up for more fucking websites

### Cross-platform
* [JSPaint](https://jspaint.app/) - Web-based MSPaint clone. Add it to your homescreen and draw with a stylus, even.
* [KeePassXC](https://keepassxc.org/) - Offline password manager. If you want something in the cloud, use [Bitwarden](https://bitwarden.com/).
* [LocalSend](https://localsend.org/) - Quickly send files over local network, including iOS and Linux. Like AirDrop but not shit.
* [Nicotine+](https://nicotine-plus.org/) - Alternative [Soulseek](https://www.slsknet.org/news/) client.
* [Obsidian](https://obsidian.md/) - Note-taking but with wiki-like links between notes. All markdown files, no signup.
* [Photopea](https://www.photopea.com/) - Web-based Photoshop clone, can even open/save PSDs.
* [Prism Launcher](https://prismlauncher.org/) - Best Minecraft launcher. It's a fork of MultiMC but can download content straight from Curse and Modrinth, as well as Java versions.
* [Syncthing](https://syncthing.net/) - Sync directories between devices, good for stuff like your pictures folder, password database, or Obsidian notes.

### Windows
* [File Converter](https://github.com/Tichau/FileConverter/releases) - Right click file converter, fast and no-bullshit. ([example gif](https://github.com/Tichau/FileConverter/tree/03aeec001e0ceef17a546ac5769122f06a8ac601?tab=readme-ov-file#description)).
* [paint.net](https://getpaint.net/) - Classic Paint-like editor with layers, many useful tools, and even more with [plugins](https://www.boltbait.com/pdn/). Great for making quick edits when you don't want to wait 20 seconds for Photoshop to open. Cross-platform alternative is [Pinta](https://www.pinta-project.com/), though it's less reliable.
* [qBittorrent](https://www.qbittorrent.org/) - This should be obvious but some people still use uTorrent for some reason so I'm putting this here for the welfare of the public
* [ShareX](https://getsharex.com/) - Screenshot tool. It's nice
* [StartAllBack](https://www.startallback.com/) - Windows 11 UI upgrade, the sequel to [StartIsBack](https://www.startisback.com/). It's $5, but absolutely worth it since it's both visually tasteful and doesn't fuck up your install like other Windows customization tools.
* [WizTree](https://diskanalyzer.com/) - Shows exactly what folders take up your disk space from top-down. Like WinDirStat but much faster.

### Firefox extensions
* [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) - Stop using multiple adblockers and weird shady privacy plugins/browsers that break sites and often just send your info elsewhere. Just use uBlock Origin and add custom filters when needed.
* [Speed-Pitch changer](https://addons.mozilla.org/en-US/firefox/addon/speed-pitch-changer/) - Nightcore any video/audio. (tip: only do semitones; do +5 or +7 for music)

### Linux
* [Distrobox](https://github.com/89luca89/distrobox) - Install packages in containers and save your host from dependency hell and dated packages. Surprisingly seamless and a must-have for immutable distros.
* [tldr](https://github.com/tldr-pages/tlrc) - Command that shows brief cheatsheets for many commands.
* [tmux](https://github.com/tmux/tmux) - Like i3 but for people who actually get work done lol

## Digital tips
### General computer usage
#### Clean your downloads folder
The Downloads folder is likely what's taking up your whole disk. It's probably full of installers for programs you've already installed, go ahead and delete those. You can also use a tool like [WizTree](https://diskanalyzer.com/) to see which folders and files take up the most space.

#### Your Desktop/Documents folder is likely syncing to OneDrive/iCloud by default
Apple and Microsoft want to upsell you on cloud storage subscriptions, so upon setting up your device these folders are automatically set up to sync to OneDrive/iCloud. These folders grow far too quickly and have no place in the cloud, especially Documents.

I recommend looking up how to disable this, as you may not even realize it's enabled. You can still use iCloud and OneDrive without syncing these folders, and instead copy things you want to backup into those drives manually.

### Privacy/security blurbs
Some notes on digital privacy and securitry that might be useful.

#### Be reasonable
A lot of internet privacy advice is completely ridiculous. Sometimes I wonder if it's a psyop to isolate paranoid people. Rather than scrambling to go off-the-grid, you'd be better off learning what [threat modeling](https://www.privacyguides.org/en/basics/threat-modeling/) is. What are you protecting, and from who?

Otherwise, you might find yourself much like the paranoid American suburbanite who adorns their home in security cameras, despite living in a crime-free neighborhood, populated only by other paranoid suburbanites who have too much money to understand why crime exists.

#### Delete addresses from message history
Your friend is mailing you something so you send them your home address over Discord. Later, their Discord gets hacked and now your address is in the hands of the attacker. Fuck. Next time, you should consider deleting messages containing sensitive info once it's no longer needed.

#### DuckDuckGo is just Bing
It's true, you can read about it. Considering DDG doesn't have all the AI overviews like Bing and Google, I wouldn't consider it a dealbreaker. Rather it's better to understand that search engines aren't foolproof (as no online services are).

#### Signal isn't completely foolproof
Signal is good if you want some encryption because you're embarrased or exchanging sensitive info. But you shouldn't use it if your threat model is the US federal government, as it is entirely centralized within the US. You and your recipient are identified by phone number, regardless of encryption. You probably didn't compile the operating system you're using, either.

This isn't to say you shouldn't use Signal entirely, but rather to not consider it foolproof if you're up to something that warrants federal investigation. Again, [threat modeling](https://www.privacyguides.org/en/basics/threat-modeling/) is the first step you should always take.

#### Never allow apps to access your contacts or phone number
Imagine if you were getting a haircut and gave the barber a list of all your loved one's phone numbers, faces, and home addresses. That would be fucking insane. Sadly, in the digital age, this is completely normalized.

Any company you give data to may suffer a data breach. Even if you aren't cynical about capitalism or paranoid about privacy, this is an undeniable fact of the digital age. And with executives who care little for quality engineering (let alone ethics), we have reached a stage where no company can be trusted to keep their customers' data secure.

Because of this, many use password managers to store generated passwords, so that when one password is leaked, it doesn't compromise the rest of one's accounts. But when you allow an app to access to your contacts, you are sacrificing the personal information of everyone you know.

You also shouldn't give companies your phone number unless absolutely necessary. Not only is it a complete dox but it is directly linked with other customers' synced contacts. That's why newly installed apps recommend you follow your most horrible family members, no? I'd go as far as to not give your phone number to anyone for this reason, besides civic or healthcare entities.
