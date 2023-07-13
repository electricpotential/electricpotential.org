# electricpotential.org
The main website https://electricpotential.org (to be migrated to)

# Dev intial setup

## System requirements

First, make sure you have the following installed

 - Node
 - npm (Node package manager)
 - pnpm (can be installed with npm)
 - git (for version control through the terminal)

## Github authentication

If you've cloned Github repositories before, you can probably skip this step. Otherwise, enter the following commands in the terminal and set up an SSH key with your Github account.

1. Generate the SSH key on your machine with the following command (where `$1` is replaced with a unique identifier like the email for your Github account, and `$2` is replaced with the name of the file, i.e. `yourname_git_rsa`)
`ssh-keygen -t rsa -C "$1" -f ~/.ssh/$2 -N ""`

2. Print out the **_public_** key to copy and add new key on Account Settings -> SSH keys on github.com
`cat ~/.ssh/$2.pub`

3. Add the SSH keys to your SSH agent
`ssh-add --apple-use-keychain ~/.ssh/$2`

4. Add this into your `~/.ssh/config` so that the system remembers to use SSH keys per reboot
```
Host *
  AddKeysToAgent yes
  UseKeychain yes
```

5. Now you should be able to clone this repo (see command in the next steps below)

## Getting the files & running the dev environment

In your terminal, create a folder to store the project:
(These are BASH commands, which are native on a Mac or Linux system)

1. Make a folder and navigate to it `mkdir ~/dev/electricpotential && cd ~/dev/electricpotential`

2. Clone this repository `git clone git@github.com:electricpotential/electricpotential.org.git`

3. Run the web app `cd web && pnpm i && pnpm dev`

Now you can view your app as you develop on http://localhost:3000

## Recommended environment

Feel free to use whatever, but these are essential tools for my workflow

 - IDE: Visual Studio Code (IMPORTANT: This is DIFFERENT from Visual Studio)
   - Extensions: GitLens, Prettier, ESLint, TailwindCSS Intellisense
 - Terminal: Iterm 2 (rather than using the regular terminal)


