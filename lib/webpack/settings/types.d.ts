import { Configuration, Rule, Options as WebpackOptions } from 'webpack';
import { Configuration as FaviconsConfiguration, VariantName } from 'favicons-webpack-plugin';
import { Options as HtmlOptions } from 'html-webpack-plugin';
import { Options as PrerenderOptions } from 'prerender-spa-plugin';
export declare type ProjectEnvironment = 'local' | 'dev' | 'prod';
export declare type NodeEnvironment = 'local' | 'development' | 'production' | 'test';
export interface ExternalFile {
    from: string;
    to?: string;
    toType?: 'file' | 'dir' | 'template';
    context?: string;
    flatten?: boolean;
    ignore?: string[];
    transform?: (content: string, path: string) => string;
    cache?: boolean | {
        key: string;
    };
    force?: boolean;
}
export declare type OverrideFunction = (configuration: Configuration) => Configuration;
export interface EntryPointOption {
    file: string;
    template?: string;
}
export declare type EntryPointOptionAll = IndexObject<EntryPointOption | string>;
export interface EntryPoint extends EntryPointOption {
    filename: string;
}
export interface Options {
    app?: {
        author?: string;
        description?: string;
        keywords?: string[];
        title?: string;
    };
    compilation?: {
        alias?: IndexObject<string>;
        chunks?: WebpackOptions.CacheGroupsOptions[];
        cleanExclusions?: string[];
        compileExclusions?: string[];
        disablePlugins?: string[];
        entryPoints?: EntryPointOptionAll;
        extensions?: string[];
        externalFiles?: (string | ExternalFile)[];
        favicons?: {
            additionalVariants?: VariantName[];
            cache?: boolean;
            output?: string;
        };
        globalStyles?: boolean;
        output?: {
            script?: string;
            style?: string;
        };
        renderRoutes?: string[];
        rules?: Rule[];
    };
    environment?: NodeEnvironment;
    minify?: boolean;
    overrides?: OverrideFunction;
    paths?: {
        app?: string;
        pagesRelative?: string;
        assetsRelative?: string;
        dist?: string;
        buildRelative?: string;
        serverPrefixRuntimeKey?: string;
    };
    plugins?: string[];
    runtime?: IndexObjectAny;
}
export interface FaviconsSettings {
    additionalVariants: VariantName[];
    cache: boolean;
    file: string;
    output: string;
    icons: FaviconsConfiguration['icons'];
}
export interface Settings {
    app: {
        author: string;
        description: string;
        keywords: string;
        title: string;
        minify?: HtmlOptions['minify'];
    };
    compilation: {
        alias: IndexObject<string>;
        chunks: WebpackOptions.CacheGroupsOptions[];
        cleanExclusions: string[];
        disablePlugins: string[];
        entryPoints: IndexObject<EntryPoint>;
        extensions: string[];
        externalFiles: (string | ExternalFile)[];
        favicons: FaviconsSettings;
        output: {
            script: string;
            style: string;
        };
        rendering: PrerenderOptions;
        rules: Rule[];
    };
    environment: NodeEnvironment;
    minify: boolean;
    overrides: OverrideFunction;
    paths: {
        app: string;
        assetsRelative: string;
        pagesRelative: string;
        dist: string;
        buildRelative: string;
        server: string;
        baseAbsolute: string;
        appAbsolute: string;
        pagesAbsolute: string;
        assetsAbsolute: string;
        buildAbsolute: string;
        distAbsolute: string;
    };
    runtime: IndexObjectAny;
}
export declare type WebpackConfig = (options: Options) => Configuration;
export declare type BiotopeBuildPlugin = (settings: Settings) => Settings;
