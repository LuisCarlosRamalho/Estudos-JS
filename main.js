const caixaCurso = document.querySelector('.caixa')
const btnadd = document.querySelector('#btn_transferir')
const hadouken = [...document.querySelectorAll('.hadouken')]
const btnremove = document.querySelector('#excluir')


btnadd.addEventListener('click', adicionarCurso)
btnremove.addEventListener('click', removerCurso)

function adicionarCurso(){
    const NovoCurso = document.querySelector('.Add-curso').value
    const AddNovoCurso = document.createElement('div')

    caixaCurso.appendChild(AddNovoCurso)
    AddNovoCurso.setAttribute('class', 'curso')
    AddNovoCurso.innerHTML = NovoCurso  

    hadouken.map(()=>{
            AddNovoCurso.addEventListener('click', (elemento)=>{
                elemento.target.classList.toggle('testando')
        })
    })
}


function removerCurso(){
    const curso = document.querySelectorAll('.testando')
    caixaCurso.removeChild(curso[0])
}
