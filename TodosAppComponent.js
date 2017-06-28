import React,
{
    Component,
    StyleSheet,
    ToolbarAndroid,
    View,
} from 'react-native';

import AddTodo from './AddTodoComponent';
import TodoList from './TodoListComponent';
import Filter from './FilterTodoComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 50,
        backgroundColor: 'silver',
    },
});

let newId = 0;
const defaultTodos = [
    { id: newId++, text: 'Learn Redux', state: 'Pending' },
    { id: newId++, text: 'Learn Angular2', state: 'Pending' },
];

export default class TodosAppComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allTodos: defaultTodos,
            todos: defaultTodos,
            visibilityFilter: 'Pending',
        };
    }

    onNewTodo(todo) {
        this.state.allTodos.push({ id: newId++, text: todo, state:'Pending' });

        this.setState({
            allTodos: this.state.allTodos,
            todos: this.getFilteredTodos(this.state.visibilityFilter),
        });


    };

    onDoneTodo(id) {
        const mappedTodos = this.state.allTodos.map((t) => {
            if (t.id !== id) {
                return t;
            }

            return Object.assign({}, t, {
                state: 'Done',
            });
        });

        this.setState({
            allTodos: mappedTodos,
            todos: this.getFilteredTodos(this.state.visibilityFilter, mappedTodos),
        });        
    }

    onToggleChange() {
        let newState = this.state.visibilityFilter === 'Pending' ? 'Done' : 'Pending';


        this.setState({
            visibilityFilter: newState,
            todos: this.getFilteredTodos(newState),
        });
    }
    
    getFilteredTodos(state, todos = this.state.allTodos){
        return todos.filter((t) => t.state === state);
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid style={styles.toolbar}
                    title="Todos Demo" />
                <AddTodo onClick={this.onNewTodo.bind(this) }/>
                <Filter onClick={this.onToggleChange.bind(this) } value={this.state.visibilityFilter} count={this.state.todos.length}/>                
                <TodoList todos={this.state.todos} onDone={this.onDoneTodo.bind(this) }/>
            </View>
        );
    }
}