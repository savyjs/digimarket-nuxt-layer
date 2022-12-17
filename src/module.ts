import {
  defineNuxtModule,
  installModule,
  addPlugin,
  addLayout,
  resolvePath,
  addComponentsDir,
  addImportsDir,
} from "@nuxt/kit";
import _ from "lodash";
import consola from "consola";
import { Layout } from "./schema/types/layout";
import { divisions } from "./schema/types/options";

const logger = consola.withScope("nuxt:ntm");

export interface ModuleOptions extends Layout {
  divisions?: divisions[];
  profileMenuItems?: { title: string; to: string; icon?: string }[];
}

export default defineNuxtModule<ModuleOptions>({
  defaults: {
    logo: "~ntmRoot/img/logo.png",
    title: undefined,
    divisions: [],
    profileMenuItems: [],
  },
  meta: {
    // Usually  npm package name of your module
    name: "ntm",
    // The key in `nuxt.config` that holds your module options
    configKey: "ntm",
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: "^3.0.0",
    },
  },
  async setup(moduleOptions, nuxt) {
    // installing tailwindcss
    await installModule("@nuxtjs/tailwindcss");
    await installModule("vite-plugin-vue-type-imports/nuxt");
    // await

    // load server API files
    nuxt.options.runtimeConfig.public.ntm = moduleOptions;
    nuxt.options.nitro.rootDir = await resolvePath(__dirname + "/");
    nuxt.options.nitro.srcDir = await resolvePath(__dirname + "/");
    nuxt.options.nitro.scanDirs = [await resolvePath(__dirname + "/server")];

    // add NTM alias and load ntm style
    nuxt.hook("ready", async (nuxt) => {
      nuxt.options.alias["@ntmRoot"] = await resolvePath(__dirname);
      nuxt.options.css.push(
        await resolvePath(__dirname + "/assets/styles/ntm.scss")
      );
    });

    // import folders
    await addImportsDir([
      await resolvePath(__dirname + "/public"),
      await resolvePath(__dirname + "/assets"),
      await resolvePath(__dirname + "/composables"),
      await resolvePath(__dirname + "/components"),
    ]);

    // add plugins
    addPlugin({
      src: await resolvePath(__dirname + "/plugins/NtmPlugin.ts"),
    });
    addPlugin({
      src: await resolvePath(__dirname + "/plugins/NtmAssets.client.js"),
      mode: "client",
    });

    // load NTM components
    await addComponentsDir({ path: __dirname + "/components/market" });
    await addComponentsDir({ path: __dirname + "/components/blog" });
    await addComponentsDir({ path: __dirname + "/components" });

    // adding layouts - ntm market default page
    await addLayout(
      {
        filename: "NtmMarket.vue",
        src: await resolvePath(__dirname + "/layouts/NtmMarket.vue"),
      },
      "NtmMarket"
    );

    // user panel layout
    await addLayout(
      {
        filename: "NtmPanel.vue",
        src: await resolvePath(__dirname + "/layouts/NtmPanel.vue"),
      },
      "NtmPanel"
    );

    // add payment page
    await addLayout(
      {
        filename: "NtmMarketPayment.vue",
        src: await resolvePath(__dirname + "/layouts/NtmMarketPayment.vue"),
      },
      "NtmMarketPayment"
    );

    // cart and shipping layouts
    await addLayout(
      {
        filename: "NtmMarketShipping.vue",
        src: await resolvePath(__dirname + "/layouts/NtmMarketShipping.vue"),
      },
      "NtmMarketShipping"
    );
  },
});
