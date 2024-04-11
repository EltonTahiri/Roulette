import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'white' } }, // green
    { option: '32', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '15', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '19', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '4', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '21', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '2', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '25', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '17', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '34', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '6', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '27', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '13', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '36', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '11', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '30', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '8', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '23', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '10', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '5', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '24', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '16', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '33', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '1', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '20', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '14', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '31', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '9', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '22', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '18', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '29', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '7', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '28', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '12', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '35', style: { backgroundColor: 'black', textColor: 'white' } }, // black
    { option: '3', style: { backgroundColor: 'red', textColor: 'white' } }, // red
    { option: '26', style: { backgroundColor: 'black', textColor: 'white' } }, // black
];

const Roulette = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [userInput, setUserInput] = useState('');

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = parseInt(userInput); // Use user input as prize number
            if (!isNaN(newPrizeNumber) && newPrizeNumber >= 0 && newPrizeNumber < data.length) {
                setPrizeNumber(newPrizeNumber);
                setMustSpin(true);
            } else {
                alert('Please enter a valid prize number between 0 and ' + (data.length - 1));
            }
        }
    }

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <input
                    type="number"
                    value={userInput}
                    onChange={handleChange}
                    placeholder="Enter Prize Number"
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: '2px solid #ccc',
                    }}
                />
                <button
                    onClick={handleSpinClick}
                    style={{
                        marginLeft: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    SPIN
                </button>
            </div>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={() => {
                    setMustSpin(false);
                }}
            />
        </>
    );
}



export default Roulette;