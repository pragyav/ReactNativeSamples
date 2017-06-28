'use strict';
import React,
{
    Component,
    StyleSheet,
    ListView,
} from 'react-native';

import Todo from './TodoComponent';

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});


export default class TodoListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            })
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                this.props.todos
            )
        });
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
           dataSource : this.state.dataSource.cloneWithRows(nextProps.todos) 
        });
    }

    renderTodo(todo) {
        return (
            <Todo todo={todo} onDone={this.props.onDone}/>
        );
    }

    render() {
        return (
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderTodo.bind(this)}
                />
        );
    }
}

TodoListComponent.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
    onDone: React.PropTypes.func.isRequired,
};