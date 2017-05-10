# ng2-reduce-size

Apply AOT, Google Closure Compiler for a basic Angular2 app.

## Install

Run `npm install` .

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Checking

Run `npm start:prod` to build the project by Angular CLI. Navigate to `http://localhost:4200/`.

Run `npm start:aot` to build the project by Angular AOT (follow the https://angular.io/docs/ts/latest/cookbook/aot-compiler.html). Navigate to `http://localhost:8080/`.

Run `npm start:closure` to build the project via Google Closure Compiler. Navigate to `http://localhost:8080/`.

Notice: Open browser development tool to check the resources' file size.

## Clean

Run `./clean.sh` to clean all built files.