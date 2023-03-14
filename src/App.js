
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useEffect, useState } from 'react';



function App() {

  const baseUrl = "https://localhost:44369/api/alunos";//Endereço da URL para acessar o endpoint ára obter os alunos a partir da API

  const [data, setData] = useState([]); // Hook useState para tratar a mudança de estado na aplicação relacionada aos  dados do aluno 


  //define o request GET usando o axios com o endereço base e obtém a resposta 
  // e usando o setData atribui os dados recebidos 

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);

      })
  }


  // a função setData é responsável por alterar o estado de data e assim 
  // colocamos dentro do escopo da função useEffect, porque ela é a responsável 
  // por tratar os dados que vão modificar o estado da nossa aplicação.

  useEffect(() => {
    pedidoGet();
  })

  return (


    <div className='aluno-container'>
      <br />
      <h3>Cadastro de Alunos</h3>
      <header>
        <button className='btn btn-success'> Incluir Novo Aluno</button>
      </header>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>

          </tr>
        </thead>

        <tbody>
          {/* mapeia os dados recebidos dos alunos a partir do state data exibindo-os no corpo da tabela */}
          {data.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button className='btn btn-primary'>Editar</button>
                <button className='btn btn-danger'>Excluir</button>
              </td>




            





            
            </tr>
          ))}

        </tbody>


      </table>
    </div>
  );
}

export default App;
