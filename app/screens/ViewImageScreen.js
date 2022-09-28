import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function Test(props){

    return(
        <Image source={require("../assets/chair.jpg")} style={styles.BackgroundImage} />

    )
}

const styles = StyleSheet.create({
    BackgroundImage:{
        width: "100%",
        height: "100%"
         

    }
})