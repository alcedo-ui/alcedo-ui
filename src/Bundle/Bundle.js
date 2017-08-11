import React, {Component} from 'react';

export default class Bundle extends Component {

    constructor(props) {

        super(props);

        this.state = {
            module: null
        };

        this.load = this::this.load;

    }

    load(props = this.props) {

        this.setState({
            module: null
        });

        props.load(module => {
            this.setState({
                module: module.default ? module.default : module
            });
        });

    }

    componentWillMount() {
        this.load();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    render() {

        const {children} = this.props,
            {module} = this.state;

        return module ?
            children(module)
            :
            null;

    }
}