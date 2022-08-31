import React from "react";
import { useState } from "react";
import { DiceImage, DiceContainer, DiceButton} from "./DiceStyle"
import dice0 from "../img/dice0.png"
import dice1 from "../img/dice1.png"
import dice2 from "../img/dice2.png"
import dice3 from "../img/dice3.png"
import dice4 from "../img/dice4.png"
import dice5 from "../img/dice5.png"
import dice6 from "../img/dice6.png"

const Dice = () => {
    const [faces, setFaces] = useState(0)

    const diceRoller = () => {
        const result = Math.floor(Math.random() * 6 + 1)

        setFaces(result)
    }

    const setDiceImage = () => {
        switch (faces) {
            case 0:
                return <DiceImage src={dice0} alt="Imagem inicial do dado com valor 0" />
            case 1:
                return <DiceImage src={dice1} alt="Imagem do dado com valor 1" />
            case 2:
                return <DiceImage src={dice2} alt="Imagem do dado com valor 2" />
            case 3:
                return <DiceImage src={dice3} alt="Imagem do dado com valor 3" />
            case 4:
                return <DiceImage src={dice4} alt="Imagem do dado com valor 4" />
            case 5:
                return <DiceImage src={dice5} alt="Imagem do dado com valor 5" />
            case 6:
                return <DiceImage src={dice6} alt="Imagem do dado com valor 6" />
            default:
                return <p>Error</p>
        }
    }

    return (
        <DiceContainer>
            <h1>Sorteie o Dado</h1>
            {setDiceImage()}
            <DiceButton onClick={diceRoller}>Sortear</DiceButton>
        </DiceContainer>

    )
}

export default Dice