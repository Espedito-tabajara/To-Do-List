let imput1 = document.getElementById("imput-01");
let submit =  document.getElementById("but-add");
let janela = document.getElementById("windows");
let cont = 0;



function actives(id){
    document.getElementById(id).innerHTML = "radio_button_checked";
    document.getElementById(id).style.color = "blue";   
}


function addtext(){
    let valorImput = imput1.value;
    if ( (valorImput !== "") && (valorImput !== null) && (valorImput  !== undefined)){
        ++cont;
        let newBloco = `
        <div id="container-bx${cont}" class = "container" onclick= (marcarTarefa("container-bx${cont}"))>
            <div id="check-bx${cont}" class = "check-bx"{>
                
                    <span class="material-symbols-outlined" id="circle${cont}" onclick=(actives("circle${cont}"))>
                        radio_button_unchecked
                    </span>
                
            </div>
            <div id="text-${cont}" class="text-02" onclick=(actives("circle${cont}"))>
            <p id="box-output${cont}" class="box-output">${imput1.value}</p>
            </div>
            <div id="but-del" onclick=(delet("container-bx${cont}"))>
                <span id="lixeira" class="material-symbols-outlined">
                    delete
                </span>
            </div>
            </div>
        </div>`;
        janela.innerHTML += newBloco;
        imput1.value = "";
        imput1.focus()
    }
    

}
function marcarTarefa(id){
    var item = document.getElementById(id);
    item.style.color = '#B7AFB7';
    item.style.backgroundColor = '#9FFA95';
    var paragrafo = item.querySelector('p.box-output');
    paragrafo.style.textDecoration = 'line-through';
    item.parentNode.appendChild(item)
   
    
     
}


imput1.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        submit.click();
    }
})

function delet(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}










