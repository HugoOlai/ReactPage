import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './AppNewLayout.css';
import {valores, estados} from './drops';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
  TooltipHost,
  
} from 'office-ui-fabric-react/lib/Tooltip';

function App() {
  const [valor, setvalor] = React.useState(0);
 
  const pegaDrop=(e, op)=>{
    console.log(op.text)
    setvalor(op.text);  
    console.log(valor)
  }
  
  return (
    <div className="App">
      
      <div className="container">
        <div className="top">
            <div className="title">
              
                <h1><div className="info">Espalhe o Bem!</div></h1>
                <p className="tituloTexto"><div className="info">Doe para ampliação de testagem</div></p> 
                <p className="tituloTexto"><div className="info">gratuita e ajude a salvar vidas</div></p>
              
              
            </div>
        </div>
        <div className="body">
          <div className="content1">
            <div className="contentLeft">

              <h1 className="titelComoFunciona"><div className="info">COMO FUNCIONA:</div></h1>
              <p>Lorem Ipsum is simply dummy text 
                of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an
                unknown printer took a galley of type and 
                scrambled it to make a type specimen book</p>

              <h1 className="titelLuta"><div className="info">ENTRE NA LUTA CONTRA</div></h1>
              <strong>A COVID-19:</strong>
              <small ><div className={"textoSmall1"}>Lorem Ipsum is simply dummy text</div></small>
              <p>Lorem Ipsum is simply dummy text 
                of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an
                unknown printer took a galley of type and 
                scrambled it to make a type specimen book.</p>

              <small><div className={"textoSmall2"}>Lorem Ipsum is simply dummy text</div></small>
              <p>Lorem Ipsum is simply dummy text 
              of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an
              unknown printer took a galley of type and 
              scrambled it to make a type specimen book.</p>

            </div>
            <div className="contentRigth">
                <div className="modal">
                  <h1 className="titelAjuda"> Ajuda a salvar vidas</h1>
                  <div className={"valores"}>
                    <div className="valueTitel">
                      <div className="text">Lorem Ipsum </div>
                      <div className="text">has been</div>
                    </div>
                    
                    <Dropdown
                    className="drop"
                    defaultSelectedKey={"1"}
                    onChange={pegaDrop}
                    onRenderCaretDown={()=>{return <Icon iconName="CirclePlus" />;}}
                    options={valores}
                    />
                  </div>
                  
                  <div className="TitleRegister">
                    <small className="textRegister"><div className="textRegisterT">texto texto</div></small> 
                   <small className="textRegister2"><div className="textRegisterT2">galley of type</div></small> 
                  </div>
                  
                  <div className="variosItensModal">
                  <div className="Nome"><TextField placeholder="Nome" /></div>
                    <div className="estadoCidade">
                      <div className="Cidade"><TextField placeholder="Cidade" /></div>
                      <div className="estado">
                        <Dropdown
                        className="drop2"
                        defaultSelectedKey={"1"}
                        onChange={pegaDrop}
                        onRenderCaretDown={()=>{return <Icon iconName="CirclePlus" />;}}
                        options={estados}
                        />
                      </div>
                    </div>
                    <div className="localizacao">
                      <div className="endereco"><TextField placeholder="endereco" /></div>
                      <div className="numero"><TextField placeholder="numero"  /></div>
                      <div className="referencia"><TextField placeholder="referencia"  /></div>
                    </div>
                  <div className="checkbox"><input type={"checkbox"} />Lorem Ipsum is simply dummy</div>
                  <div className="checkbox"><input type={"checkbox"} />Lorem Ipsum is simply dummy</div>

                  </div>

                  <div className="btn"><button className="btnCadastra"> cadastrar </button></div>

                </div>
            </div>
          </div>
          <div className="content2">
            
            <div className="contentLeft">
                <div className="itemComimg"></div>
            </div>
            <div className="contentRigth">
              <div className={"TitleContentRigth"}> DOE E VAMOS JUNTOS</div>
              <div className={"TitleContentRigth"}> COMBATER A PANDEMIA</div>
            <select name="perguntas" className="perguntas" >
              <option className="primeirapergunta" disabled selected hidden >PARA ONDE VAI MINHA DOAÇÃO?</option>              
            
            </select>
            
            <select name="perguntas" className="perguntas" >
              <option className="primeirapergunta" disabled selected hidden >QUEM ESTA POR TRAS DO DADOS DO BEM?</option>              
            
            </select>
            <hr/>
            <select name="perguntas" className="perguntas" >
              <option className="primeirapergunta" disabled selected hidden >ULTIMA PERGUNTA?</option>              
            
            </select>
            <hr/>
            </div>
          </div>
          <div className="content3">
            <div className="contentTop">              
              <div className="itemComimg2">
                <div className="valor">+892mil</div>
                <div className="valor">+692mil</div>
                <div className="valor">+113mil</div>
                <div className="valor">+17mil</div>
              </div>
            </div>
            <div className="contentBot">
            <div className="modal2">
                  <h1 className="titelAjuda"> Ajuda a salvar vidas</h1>
                  <div className={"valores"}>
                    <div className="valueTitel">
                      <div className="text">Lorem Ipsum </div>
                      <div className="text">has been</div>
                    </div>
                    
                    <Dropdown
                    className="drop"
                    defaultSelectedKey={"1"}
                    onChange={pegaDrop}
                    onRenderCaretDown={()=>{return <Icon iconName="CirclePlus" />;}}
                    options={valores}
                    />
                  </div>
                  
                  <div className="TitleRegister">
                    <small className="textRegister"><div className="textRegisterT">texto texto</div></small> 
                   <small className="textRegister2"><div className="textRegisterT2">galley of type</div></small> 
                  </div>
                  
                  <div className="variosItensModal">
                  <div className="Nome"><TextField placeholder="Nome" /></div>
                    <div className="estadoCidade">
                      <div className="Cidade"><TextField placeholder="Cidade" /></div>
                      <div className="estado">
                        <Dropdown
                        className="drop2"
                        defaultSelectedKey={"1"}
                        onChange={pegaDrop}
                        onRenderCaretDown={()=>{return <Icon iconName="CirclePlus" />;}}
                        options={estados}
                        />
                      </div>
                    </div>
                    <div className="localizacao">
                      <div className="endereco"><TextField placeholder="endereco" /></div>
                      <div className="numero"><TextField placeholder="numero"  /></div>
                      <div className="referencia"><TextField placeholder="referencia"  /></div>
                    </div>
                  <div className="checkbox"><input type={"checkbox"} />Lorem Ipsum is simply dummy</div>
                  <div className="checkbox"><input type={"checkbox"} />Lorem Ipsum is simply dummy</div>

                  </div>

                  <div className="btn"><button className="btnCadastra"> cadastrar </button></div>

                </div>
            
            </div>
          </div>
          <div className="bot">
            
          </div>
        </div>
       

      </div>
    </div>
  );
  
}



export default App;
