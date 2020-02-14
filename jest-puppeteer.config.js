module.exports = {
    launch: {
        //$env:HEADLESS = "false" #Run from VSCode terminal, to enable browser without modifying this file.
        headless: process.env.HEADLESS !== 'false',
        //headless: false, //Uncomment for seeing Chrome
        //slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        devtools: true
    },
    server: {
        command: "npm run serve",
        port:8080
    }
}
