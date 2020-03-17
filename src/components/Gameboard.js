import React, { Component } from 'react'
import Tile from './Tile'

//https://dev.to/spaciecat/keyboard-input-with-react-hooks-3dkm
function useKey(key) {
    // Keep track of key state
    const [pressed, setPressed] = useState(false)

    // Does an event match the key we're watching?
    const match = event => key.toLowerCase() == event.key.toLowerCase()

    // Event handlers
    const onDown = event => {
        if (match(event)) setPressed(true)
    }

    const onUp = event => {
        if (match(event)) setPressed(false)
    }

    // Bind and unbind events
    useEffect(() => {
        window.addEventListener("keydown", onDown)
        window.addEventListener("keyup", onUp)
        return () => {
            window.removeEventListener("keydown", onDown)
            window.removeEventListener("keyup", onUp)
        }
    }, [key])

    return pressed
}

export default class Gameboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            gameState: [
                0,0,0,0
            ]
        };
    }

    setValue(target, value){
        this.setState({
            target: value
        })
    }

    updateTiles(){

    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
