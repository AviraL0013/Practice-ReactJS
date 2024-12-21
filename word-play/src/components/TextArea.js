import React,{useState} from 'react'

export default function TextArea(props) {
    const [text,settext]=useState("");
    const handleUpClick=()=>{
        settext(text.toUpperCase())
        props.showalert("Converted to Uppercase","success")
    }
    const handleLoClick=()=>{
        settext(text.toLowerCase())
        props.showalert("Converted to Lowercase","success")
    }
    const handleClear=()=>{
        settext("")
        props.showalert("Text has been cleared","success")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
        props.showalert("Copied to clipboard","success")
    }
    const handleOnChange=(e)=>{
        settext(e.target.value)
    }
    let wordCount = 0;
    if (text.trim() === "") {
        wordCount = 0;
    } else {
        wordCount = text.trim().split(" ").filter(word => word !== "").length;
    }
    return (
        <div>
            <div className="mb-3" >
                <h2 style={{color: props.mode === 'dark' ? 'white' : '#042743' }}>{props.heading} </h2>
                <textarea className="form-control"value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2 my-2">UpperCase</button>
                <button type="button" onClick={handleLoClick} className="btn btn-primary mx-2 my-2">Lowercase</button>
                <button type="button" onClick={handleClear} className="btn btn-primary mx-2 my-2">ClearText</button>
                <button type="button" onClick={handleCopy} className="btn btn-primary mx-2 my-2">CopyText</button>
            </div>
            <div style={{color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h3 className='my-3'>Your Text Summary</h3>
            <p>{wordCount} Words {text.length} Characters</p>
            <p>{Math.round(0.008 * wordCount * 60)} Seconds to read</p>
            <h4>Preview</h4>
            <p>{text}</p>
            </div>
        </div>
    )
}
