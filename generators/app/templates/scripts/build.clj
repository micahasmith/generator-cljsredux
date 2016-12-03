(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main '<%= nameHyphened %>.core
   :output-to "dist/cljs/main.js"})
