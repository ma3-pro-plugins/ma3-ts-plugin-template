import { ImageLibraryUtils, Logger, objectValues } from "@ma3-pro-plugins/ma3-pro-plugins-lib"
import { PLUGIN_ENV } from "./__env"
import { images as builtInImages } from "./__imagesB64"

export function ImageLibraryInstaller(log: Logger) {

    const imageLibUtils = ImageLibraryUtils(PLUGIN_ENV.pluginId, log)
    const imagePoolStartIndex = 100

    return {
        onInstall,
        onUninstall
    }

    function onInstall() {
        log.trace(`Installing images at ${imageLibUtils.imageLibraryPath}`)
        imageLibUtils.writeImageFiles(objectValues(builtInImages))

        log.trace(`Importing images to image pool at start index ${imagePoolStartIndex}`)
        imageLibUtils.importImages(objectValues(builtInImages).map((image, index) => ({
            imageFileName: image.fileName,
            targetIndex: index + imagePoolStartIndex
        })))
    }

    function onUninstall() {
        //TODO: You should also remove the imported images form the images pool

        log.trace(`Deleting Installed images from ${imageLibUtils.imageLibraryPath}`)
        imageLibUtils.deleteAllImages()
    }
}