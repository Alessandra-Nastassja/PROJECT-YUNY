
import { StyleSheet } from 'react-native';

const stylesMain = StyleSheet.create({
    title: {
        color: "#14AEED",
        fontSize: 32,
        fontFamily: "Montserrat_600SemiBold",
        maxWidth: 260,
        marginTop: 25,
        textAlign: "center",
    },
    description: {
        color: "#727272",
        fontSize: 22,
        marginTop: 16,
        fontFamily: "Montserrat_400Regular",
        lineHeight: 24,
        textAlign: "center",
    },
    buttonPrimary: {
        borderRadius: 20,
        height: 55,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    },
    buttonTextPrimary: {
        marginLeft: 8,
        fontSize: 20,
        fontFamily: "Montserrat_400Regular",
    },
    buttonSecondary: {
        borderRadius: 20,
        height: 55,
        marginTop: 25,
        paddingTop: 15,
        paddingBottom: 15,
        borderWidth: 1,
        borderColor: '#DADFE1',
    },
    buttonTextSecondary: {
        marginLeft: 8,
        fontSize: 20,
        fontFamily: "Montserrat_400Regular",
        textAlign: 'center',
    },
});

export default stylesMain;