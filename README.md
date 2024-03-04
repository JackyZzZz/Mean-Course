<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#pulsepost-documentation)

# ➤ PulsePost Documentation

PulsePost is an web application facilitating user interactions through registration, login, and the
ability to create, share, and view posts with multimedia content.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#1-install-packages)

## ➤ 1. Install packages:
1. Install `Git`.
* On Windows, install the software from https://gitforwindows.org/. `Git Bash` is available after installing `Git`.
* On Mac and Linux, see https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
2. Install `Node.js` and `npm` (Install an LTS version instead of the latest. Currently, we require LTS version > 18.x)  
* On Windows, install from [https://nodejs.org/en/](https://nodejs.org/en/).
* On Mac and Linux, [use NVM to install NodeJS](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/) because it avoids permission issues when using node.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#2-clone-the-pulsepost-project)

## ➤ 2. Clone the PulsePost project:
1. Open a command line (`Git Bash` on Windows) and navigate to a directory where you want to install the PulsePost project.
2. Clone the project from GitHub by executing 
```console
git clone https://github.com/JackyZzZz/PulsePost.git
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#3-start-pulsepost)

## ➤ 3. Start PulsePost:
1. Open a command line and navigate to the cloned repository. If you are on Windows, you need to use [Git Bash](https://gitforwindows.org/) as a Linux bash shell in order to run shell scripts.

2. Then install the dependencies. 
```console
npm install
```

3. Start the PulsePost Frontend. In the cloned repository:
```console
ng serve
```
Wait until you see some message like `Application bundle generation complete.`

4. Start the PulsePost Backend. Open a new terminal window. In the cloned repository:
```console
npm run start:server
```
Wait until you see the message:

 `[nodemon] starting node server.js`

`Connected to database!`

5. Open a browser and access `http://localhost:4200`.