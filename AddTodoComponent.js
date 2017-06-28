'use strict';
import React,
{
    Component,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        margin: 10,
    },
    textInput: {
        flex: 2,
    },
    button: {
        backgroundColor: 'deepskyblue',
        flex: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default class AddTodoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTodo: '',
        };
    }

    onAddTodo() {
        if (this.state.newTodo !== '') {
            this.props.onClick(this.state.newTodo);

            this.setState({
                newTodo: '',
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.newTodo}
                    onChangeText={(text) => this.setState({ newTodo: text }) }
                    />
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.onAddTodo.bind(this) }>
                    <Text style={styles.buttonText}>Add Todo</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

AddTodoComponent.propTypes = {
    onClick: React.PropTypes.func.isRequired,
}