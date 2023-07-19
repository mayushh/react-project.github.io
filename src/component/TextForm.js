import React,{ useState } from 'react'
export default function TextForm(props) {
  
    const [text, setText] = useState("enter the text");
    function clickOn() {
        console.log("you have clicked on the button"+text)
       let  newText = text.toUpperCase()
         setText(newText)
         props.showAlert("succesfull converted to uppercase","success")


        
    }
    function clickOnTwo() {
        console.log("you have clicked on the button"+text)
       let  newText = text.toLowerCase()
         setText(newText)
         props.showAlert("succesfull converted to lowercase","success")

        
    }
  function changeOn(event){
    console.log("hii there")
    setText(event.target.value)
  }
  return (
    <div style={props.formStyle}>
 <div className="container" >
  <h1>{props.heading}</h1> {/*i have set state in value of the textarea also} */}
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.example}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"  value = {text} onChange={changeOn}></textarea>
</div>
<button type='button' className="btn btn-primary" onClick={clickOn} >toUpper</button>
<button type='button' className="btn btn-primary mx-4" onClick={clickOnTwo}  >toLower</button>
 </div>
 <div className="container my-4" >
  <h1>summary</h1>
  <p>words :-{text.split(" ").length}  characters:-{text.length}</p>
 </div>
 <div className="container">
  <h3>preview</h3>
  <pre>{text}</pre>
 </div>
</div>
)
  
}
TextForm.defaultProps = {
    heading:"this is top heading"
}
