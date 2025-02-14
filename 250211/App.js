import React from "react"
import { Text, View } from "react-native"

function Aluno() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 12, color: "blue" }}>
                Lucas Resende Lima
            </Text>
            <Text style={{ fontSize: 12, color: "red" }}>
                RM: 556564
            </Text>
            <Text style={{ fontSize: 12, color: "green" }}>
                FIAP
            </Text>
            <Text style={{ fontSize: 12, color: "orange" }}>
                Análise e Desenvolvimento de Sistemas
            </Text>
            <Text style={{ fontSize: 12, color: "purple" }}>
                2TDSR
            </Text>
        </View>
    )
}

export default Aluno