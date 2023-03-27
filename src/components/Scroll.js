import { SafeAreaView, ScrollView, Text } from "react-native"
import Style from "./Style"

const Scroll = () =>{
    return(
     <SafeAreaView style={Style.container}>
    <ScrollView style={Style.scrollView}>
    <ViewWithText/>
     <Text style={Style.smallText}>
     Nesse pull request, a disposição dos
     elementos HTML complexificou o merge 
     de estados estáticos nos componentes da UI.
 </Text>
 </ScrollView>
 </SafeAreaView>)
    
 }
 
 export default Scroll;