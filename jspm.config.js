SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "ng-rx-redux-demo": {
      "format": "esm",
      "main": "ng-rx-redux-demo.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-function-bind"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "angular": "github:angular/bower-angular@1.5.2",
    "angular-animate": "github:angular/bower-angular-animate@1.5.2",
    "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.5.2",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "lodash": "npm:lodash@4.6.1",
    "ng-rx-redux": "github:bgoscinski/ng-rx-redux@split",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "redux-thunk": "npm:redux-thunk@2.0.1",
    "rxjs": "npm:rxjs@5.0.0-beta.2"
  },
  packages: {
    "github:bgoscinski/ng-rx-redux@split": {
      "map": {
        "rxjs": "npm:rxjs@5.0.0-beta.2"
      }
    },
    "github:angular/bower-angular-animate@1.5.2": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.2"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.0"
      }
    },
    "npm:babel-plugin-syntax-function-bind@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-function-bind@6.5.2": {
      "map": {
        "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:buffer@4.5.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.1",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    }
  }
});
