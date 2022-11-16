# NodeJS
## Introduction
- ![](../../../-/1.png) Installation
    - Windows
        - Download LTS version of NodeJs from [here](https://nodejs.org/en/).
    - Ubuntu
        - Open a terminal and Enter
            - `apt install nodejs`
            - `apt install npm`
                > You may have to use `sudo`
- ![](../../../-/1.png) Setup project
    - First Step
        - `npm init`
            > You mau want to use `npm init -y`  
            > To skip questions and name your project as current working folder
    - Second Step
        - `npm install`
- ![](../../../-/1.png) Run project
    - Redirect to your project directory
    - Open a terminal and Enter
        - `nodejs <your-script-name>.js`
- Notice:
    - Fix new version of nodejs path in ubuntu
        export PATH=/home/ns/<node folder>/bin/:$PATH
