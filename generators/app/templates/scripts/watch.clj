(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main '<%= nameHyphened %>.core
   :output-to "dist/cljs/main.js"})
