import { useState } from 'react';

interface Props{
    setColor: any
}

function Select(props: Props) {
    const [valForText, setValForText] = useState("");


    return (
      <>
        <label> {'change color '}
            <select onChange={(e) =>{props.setColor(e.target.value)} }>
                <option value={'white'}>-default-</option>
                <option value={'blue'}>blue</option>
                <option value={'green'}>green</option>
                <option value={'yellow'}>yellow</option>
                <option value={'pink'}>pink</option>
                <option value={valForText}>{`${valForText}`}</option>
            </select>
        </label>
        <br />
        <label> {'add new color '}
        <input type="text" value={ valForText } onChange={(e) => { setValForText(e.target.value) }}/>
        </label>
        <button onClick={ () => { setValForText(`${valForText}`) } }>change value</button>
    </>
  )
}

export default Select                