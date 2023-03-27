import { StatusBar, StyleSheet } from "react-native/types"

const style = StyleSheet({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
    },
    scrollView:{
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text:{
        fontSize: 42,
    },
});