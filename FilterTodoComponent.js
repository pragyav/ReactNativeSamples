'use strict';
import React,
{
    Component,
    StyleSheet,
    View,
    Switch,
    Text,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems:'center'
    },


});

export default class FilterTodoComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillReceiveProps(){
        this.forceUpdate();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Switch onValueChange = {(v) => this.props.onClick() } value={ this.props.value === 'Done'}/>
                <Text>
                Showing {this.props.count} {this.props.value} todos
                </Text>
            </View>
        );
    }
}

FilterTodoComponent.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired,
    count:React.PropTypes.number.isRequired
}