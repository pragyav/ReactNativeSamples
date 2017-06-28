import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    TouchableHighlight,
    TextInput,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',        
    },
    text: {
        fontSize: 20,
    },
    button: {
        backgroundColor: 'deepskyblue',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 50,
        borderRadius: 3,
        margin: 10,
    },
    cancelButton: {
        backgroundColor: '#696969',
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',        
    },
    toolbar: {
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: 'silver',                
    },
});

export default class CounterComponent extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            value : 0,
        }
    }
    
    onIncrement(){
        this.setState({
           value : this.state.value +1 , 
        });
    }
    onTextChange(text){
         this.setState({
           value : parseInt(text) , 
        });
    }
    
    render() {
        return (
            <View style={styles.contianer}>
                <ToolbarAndroid style={styles.toolbar}
                    title="Counter Demo" />
                <Text style={styles.text}>{this.state.value}</Text>
                <TouchableHighlight                   
                    style={styles.button}
                    onPress={this.onIncrement.bind(this)}>
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableHighlight>
                <TextInput value={this.state.value.toString()} 
                    onChangeText={this.onTextChange.bind(this)}
                />
            </View>
        );
    }
}