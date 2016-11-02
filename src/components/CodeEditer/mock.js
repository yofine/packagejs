export const init = "{\n  \"name\": \" \",\n  \"version\": \"0.0.1\",\n  \"description\": \"\",\n  \"main\": \"index.js\",\n  \"author\": \"\",\n  \"license\": \"ISC\",\n  \"scripts\": {\n  \n  },\n  \"dependencies\": {\n  \n  },\n  \"devDependencies\": {  \n  \n  }\n}"
export const rekit = "{\n  \"name\": \"rekit-example\",\n  \"version\": \"0.0.1\",\n  \"description\": \"A sample app built with Rekit.\",\n  \"scripts\": {\n    \"start\": \"node ./tools/server.js\",\n    \"build\": \"node ./tools/build.js\",\n    \"codecov\": \"codecov\",\n    \"test\": \"node ./tools/run_test.js\",\n    \"test:app\": \"node ./tools/run_test.js app\",\n    \"test:cli\": \"node ./tools/run_test.js cli\",\n    \"test:rekit\": \"node ./test/cli/rekit.js\",\n    \"test:npm\": \"node ./test/cli/npm.js\",\n    \"build:test\": \"node ./tools/build_test_server.js\",\n    \"add:feature\": \"node ./tools/cli/add_feature.js\",\n    \"add:action\": \"node ./tools/cli/add_action.js\",\n    \"add:async-action\": \"node ./tools/cli/add_async_action.js\",\n    \"add:page\": \"node ./tools/cli/add_page.js\",\n    \"add:component\": \"node ./tools/cli/add_component.js\",\n    \"rm:feature\": \"node ./tools/cli/rm_feature.js\",\n    \"rm:action\": \"node ./tools/cli/rm_action.js\",\n    \"rm:async-action\": \"node ./tools/cli/rm_async_action.js\",\n    \"rm:page\": \"node ./tools/cli/rm_page.js\",\n    \"rm:component\": \"node ./tools/cli/rm_component.js\"\n  },\n  \"babel\": {\n    \"presets\": [\n      \"es2015\",\n      \"react\",\n      \"babel-preset-stage-0\"\n    ],\n    \"plugins\": [\n      \"lodash\",\n      [\n        \"module-resolver\",\n        {\n          \"alias\": {\n            \"src\": \"./src\",\n            \"features\": \"./src/features\"\n          }\n        }\n      ]\n    ],\n    \"env\": {\n      \"test\": {\n        \"plugins\": [\n          \"istanbul\"\n        ]\n      }\n    }\n  },\n  \"nyc\": {\n    \"include\": [\n      \"index.js\",\n      \"src/**/*.js\",\n      \"tools/cli/*.js\"\n    ],\n    \"exclude\": [\n      \"tools/**/templates\",\n      \".tmp\"\n    ],\n    \"reporter\": [\n      \"lcov\",\n      \"text-summary\"\n    ],\n    \"cache\": false,\n    \"sourceMap\": false,\n    \"instrument\": true\n  },\n  \"webpackDevServerPort\": 6076,\n  \"buildTestServerPort\": 6077,\n  \"dependencies\": {\n    \"babel-core\": \"^6.14.0\",\n    \"babel-polyfill\": \"^6.13.0\",\n    \"colors\": \"^1.1.2\",\n    \"isomorphic-fetch\": \"^2.2.1\",\n    \"leancloud-storage\": \"^1.3.3\",\n    \"lodash\": \"^4.15.0\",\n    \"memobind\": \"^0.5.0\",\n    \"react\": \"^15.3.1\",\n    \"react-dom\": \"^15.3.1\",\n    \"react-redux\": \"^4.4.5\",\n    \"react-router\": \"^2.8.0\",\n    \"react-router-redux\": \"^4.0.5\",\n    \"redux\": \"^3.6.0\",\n    \"redux-logger\": \"^2.6.1\",\n    \"redux-thunk\": \"^2.1.0\",\n    \"reselect\": \"^2.5.3\",\n    \"shelljs\": \"^0.7.4\",\n    \"style-loader\": \"^0.13.1\",\n    \"trash\": \"^3.4.1\"\n  },\n  \"devDependencies\": {\n    \"babel-eslint\": \"^6.1.2\",\n    \"babel-loader\": \"^6.2.5\",\n    \"babel-plugin-istanbul\": \"^2.0.1\",\n    \"babel-plugin-lodash\": \"^3.2.8\",\n    \"babel-plugin-module-resolver\": \"^2.2.0\",\n    \"babel-preset-es2015\": \"^6.14.0\",\n    \"babel-preset-react\": \"^6.11.1\",\n    \"babel-preset-stage-0\": \"^6.5.0\",\n    \"babel-register\": \"^6.14.0\",\n    \"chai\": \"^3.5.0\",\n    \"codecov\": \"^1.0.1\",\n    \"cross-env\": \"^2.0.1\",\n    \"css-loader\": \"^0.25.0\",\n    \"enzyme\": \"^2.4.1\",\n    \"eslint\": \"^3.5.0\",\n    \"eslint-config-airbnb\": \"^11.0.0\",\n    \"eslint-import-resolver-babel-module\": \"^2.0.1\",\n    \"eslint-plugin-import\": \"^1.14.0\",\n    \"eslint-plugin-jsx-a11y\": \"^2.2.1\",\n    \"eslint-plugin-react\": \"^6.2.0\",\n    \"estraverse\": \"^4.2.0\",\n    \"estraverse-fb\": \"^1.3.1\",\n    \"file-loader\": \"^0.9.0\",\n    \"gitbook-cli\": \"^2.3.0\",\n    \"jsdom\": \"^9.5.0\",\n    \"less\": \"^2.7.1\",\n    \"less-loader\": \"^2.2.3\",\n    \"lodash-webpack-plugin\": \"^0.10.0\",\n    \"mocha\": \"^3.0.2\",\n    \"mocha-webpack\": \"^0.6.0\",\n    \"nock\": \"^8.0.0\",\n    \"npm-run\": \"^4.1.0\",\n    \"nyc\": \"^8.1.0\",\n    \"react-addons-test-utils\": \"^15.3.1\",\n    \"react-hot-loader\": \"^1.3.0\",\n    \"redux-mock-store\": \"^1.2.0\",\n    \"sinon\": \"^1.17.5\",\n    \"url-loader\": \"^0.5.7\",\n    \"webpack\": \"^1.13.2\",\n    \"webpack-dashboard\": \"0.1.8\",\n    \"webpack-dev-server\": \"^1.15.1\",\n    \"webpack-node-externals\": \"^1.3.3\"\n  }\n}"