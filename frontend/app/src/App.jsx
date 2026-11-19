import { useState } from "react";
import "./App.css";
import {ShoppingCart, SquarePlus, HandCoins } from "lucide-react";




function App(){
  const [item , setItem] = useState("");
  const [resultado , setResultado] = useState([]);
  const [quantidade,setQuantidade] = useState("1");
  const [preco , setPreco]= useState("");

function cadastrarItem() {

const novoItem={
  id:Date.now(),
  item:item,
  quantidade:Number(quantidade),
  preco:Number(preco).toFixed(2)
};
setResultado([...resultado, novoItem])

setItem("");
setQuantidade("1");
setPreco("");

  
}

const total = resultado.reduce((soma, produto) => {
  return soma + (produto.quantidade * produto.preco);
}, 0);



return(
  <div className="principal">
    <h1>Lista de Compras</h1>
    
    <form className="formulario" onSubmit={(e)=>{
      e.preventDefault();
      cadastrarItem();
    }}>
     <label htmlFor="item"><ShoppingCart /></label>
     <input type="text"
     required
     value={item}
     placeholder="digite um item para comprar"
     onChange={(e)=>setItem(e.target.value)}/>
     <label htmlFor="quantidade">Quantidade:</label>
     <input type="number"
      className="Quantidade"
      value={quantidade}
      step={0.01}
      min={0.01}
      onChange={(e)=>setQuantidade(e.target.value)}
      />
     <label htmlFor="preco"><HandCoins /></label>
     <input type="number"
     step={0.01}
     min={0.01} 
     required
     placeholder="digite seu preço unitario"
     value={preco}
     onChange={(e)=>setPreco(e.target.value)}
     />

    <button type="submit"><SquarePlus /></button>
    </form>
    {resultado.map((produto)=>(
      <div className="resultado" key={produto.id}>
        <h3>{produto.item}</h3>
        <p>Quantidade:{produto.quantidade}</p>
        <p>Preço: {produto.preco}</p>
        <p>Valor total R$: {(produto.quantidade * produto.preco).toFixed(2)}</p>
        <p>Valor total da lista de compras: R$ {total.toFixed(2)}</p>
        </div>
    ))}
  </div>

  
)



}

export default App ;