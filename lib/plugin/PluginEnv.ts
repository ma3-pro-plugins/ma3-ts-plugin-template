export class PluginEnv {
    readonly author: string
    readonly env: 'dev' | 'prod'
    readonly pluginName: string
    readonly pluginId: string
    readonly pluginVersion: string
    constructor(params: {
        author: string
        env: 'dev' | 'prod'
        pluginName: string
        pluginId: string
        pluginVersion: string,
    }) {
        this.author = params.author
        this.env = params.env
        this.pluginName = params.pluginName
        this.pluginId = params.pluginId
        this.pluginVersion = params.pluginVersion
    }
}