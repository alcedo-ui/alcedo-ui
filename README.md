# Alcedo-UI

[![NPM Version][npm-image]][npm-url]
[![License][license-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/alcedo-ui.svg
[npm-url]: https://npmjs.org/package/alcedo-ui
[license-image]: https://img.shields.io/npm/l/alcedo-ui.svg

A set of React components.

<img src="https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true" width="200px" height="200px"/>

## Installation

**NPM**

```bash
$ npm install alcedo-ui --save
```

## Usage

```jsx
import React, {Component} from 'react';
import RaisedButton from 'alcedo-ui/RaisedButton';

export default class MyComponent extends Component {

    constructor(props) {
        super(props);
    }
    
    // ...
    
    render() {
        return (
            <RaisedButton value="Default"/>
        );
    }
    
}
```

## Examples

Examples can be found in the 
[examples folder](https://github.com/alcedo-ui/alcedo-ui/tree/master/examples).

**Run Demo**

```bash
$ npm run demo
```

## License

This project is licensed under the terms of the
[MIT license](https://github.com/alcedo-ui/alcedo-ui/blob/dev/LICENSE)

