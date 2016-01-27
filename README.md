## Quickchat

A real-time chat application with Firebase and AngularJS

## Configuration

Start by cloning the repository:

```
$ git clone https://github.com/jamigibbs/quickchat.git <your-frontend-project-name>
```

The project uses Grunt to run tasks in development. To start, install the project dependencies by running:

```
$ npm install
```

### Run the Application

Run the application using the Grunt file's `default` task:

```
$ grunt
```

The default task runs a simple server on port 3000. To view it in a any browser, go to [http://localhost:3000](http://localhost:3000).

## Grunt plugins

A list of the Grunt plugins in this application:

#### Watch

[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches for changes to file content and then executes Grunt tasks when a change is detected.

#### Copy

[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from our development folders and puts them in the folder that will be served with the frontend of your application.

#### Clean

[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in your distribution folder (`dist`) so that logic in your stylesheets, templates, or scripts isn't accidentally overridden by previous code in the directory.

#### Firebase

[Firebase](https://www.npmjs.com/package/firebase) stores data in a Firebase database as JSON and synchronized in realtime to every connected client.

#### Angularfire

[Angularfire](https://www.firebase.com/docs/web/libraries/angular/) is the officially supported AngularJS binding for Firebase.

#### Angular
[Angular](https://www.npmjs.com/package/angular) is a structural framework for dynamic web apps.

#### Angular UI Router
[Angular UI Router](https://www.npmjs.com/package/angular-ui-router) a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine.

#### Angular Cookies

[Angular Cookies](https://www.npmjs.com/package/angular-cookies) provides a convenient wrapper for reading and writing browser cookies.

#### CSS Modal

[CSS Modal](https://github.com/drublic/css-modal) offers modals built out of pure CSS.

#### ngDialog

[ngDialog](https://github.com/likeastore/ngDialog) modals and popups provider for Angular.js applications.

#### Sass

[Grunt Sass](https://github.com/sindresorhus/grunt-sass) a Sass compiler.

#### Browserify
[Browserify](https://github.com/substack/node-browserify) will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single `<script>` tag.

#### Hapi

[Grunt Hapi](https://github.com/athieriot/grunt-hapi) runs a server using [`HapiJS`](http://hapijs.com/). Happi is a Node web application framework with robust configuration options.
