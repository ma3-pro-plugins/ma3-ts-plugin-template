import { Logger, LogLevel } from "@ma3-pro-plugins/lib/dist/Logger"
import { ImageLibraryInstaller } from "./ImageLibraryInstaller"

function main(this: void, displayHandle: Display, argument: string) {

    const log = Logger({ prefix: ["PluginTemplate"], logLevel: LogLevel.TRACE })
    log.trace("main(): Plugin started")

    switch (argument) {
        case "install": {
            ImageLibraryInstaller(log).onInstall()
            break
        }
        case "uninstall": {
            ImageLibraryInstaller(log).onUninstall()
            break
        }
    }

}

export default [main]