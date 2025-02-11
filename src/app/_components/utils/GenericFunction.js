const propFilter = (text) =>{
const word = text.split("-").map((item)=>item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
return word;
}

export {propFilter};