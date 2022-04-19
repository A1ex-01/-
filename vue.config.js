const path = require("path")
// module.exports = {
//   // configureWebpack: {
//   //   resolve: {
//   //     alias: {
//   //       views: '@/views'
//   //     }
//   //   }
//   // }
//   // configureWebpack: (config) => {
//   //   config.resolve.alias = {
//   //     '@': path.resolve(__dirname, 'src'),
//   //     views: '@/views'
//   //   }
//   // },
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set("@", path.resolve(__dirname, "src"))
//       .set("views", "@/views")
//   }
// }
const Icons = require("unplugin-icons/webpack")
const IconsResolver = require("unplugin-icons/resolver")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

module.exports = {
  outputDir: "./build",
  publicPath: "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        views: "@/views"
      }
    },
    devServer: {
      historyApiFallback: true // 解决页面刷新找不到
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"]
        }
      ]
    },
    plugins: [
      AutoImport({
        imports: ["vue"],
        resolvers: [ElementPlusResolver({ importStyle: false })],
        dts: "auto-imports.d.ts"
      }),
      require("unplugin-element-plus/webpack")({
        // options
        useSource: true
      }),
      require("unplugin-icons/webpack")({
        /* options */ autoInstall: true
      }),
      Components({
        resolvers: [
          IconsResolver(),
          ElementPlusResolver({ importStyle: "sass" })
        ],
        dts: "components.d.ts"
      }),
      Icons({})
    ]
  }
}
