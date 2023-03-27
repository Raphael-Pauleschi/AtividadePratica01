import { StatusBar, StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
      backgroundColor: 'grey',
        flex:1,
        paddingTop:StatusBar.currentHeight,
    },
    scrollView:{
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    bigText:{
        fontSize: 42,
        textAlign: "center",
    },
    smallText:{
fontSize: 20,
    },
});