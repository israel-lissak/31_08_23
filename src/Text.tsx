import { useState } from 'react'

function Text() {
    const [render, setRender] = useState(true)

  return (
    <>
        { render && <div>text</div> }
        <button onClick={() => {setRender(!render)}}>
            render text
        </button>
        <br />
        <br />
    </>
  )
}

export default Text