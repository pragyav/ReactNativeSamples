'use strict';
import React,
{
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'lightslategray',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        flex: 5,
        margin: 5
    },
    button: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        margin: 5
    }
});

export default class TodoComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.todo.state === 'Done') {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.todo.text}</Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.todo.text}</Text>
                <TouchableHighlight
                    style={styles.button} onPress={this.onPressDone.bind(this) }>
                    <Text>Done</Text>
                </TouchableHighlight>
            </View>
        );
    }

    onPressDone() {        
        this.props.onDone(this.props.todo.id);
    }
}

TodoComponent.propTypes = {
    todo: React.PropTypes.object.isRequired,
    onDone: React.PropTypes.func.isRequired,
}