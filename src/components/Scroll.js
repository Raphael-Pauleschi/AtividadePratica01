import { SafeAreaView, ScrollView, Text } from "react-native"
import Style from "./Style"
import Input from './Input';
import ViewWithText from "./ViewWithText"

const Scroll = () => {
    return (
        <SafeAreaView style={Style.container}>
            <ScrollView style={Style.scrollView}>
                <ViewWithText />
                <Text style={Style.smallText}>
                    Esse pokemon é bem inteligente e possue uma postura bem ousada.
                    Ele utiliza de seu martelo para lançar pedras, seu alvo são Corvinight
                    de passagem pelos céus.
                    <Input />
                </Text>

            </ScrollView>
        </SafeAreaView>)

}

export default Scroll;