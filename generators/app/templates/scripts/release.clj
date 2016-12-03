(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:output-to "dist/cljs/main.js"
   :optimizations :advanced})

(System/exit 0)
