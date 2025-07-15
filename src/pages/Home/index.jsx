import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delAddress, fetchUsers, fetchUserById } from '../../redux/User/slice'


export function Home() {
  const [id, setId] = useState("")

  const { user, users, loading, userId } = useSelector((rootReducer ) => rootReducer.user)
  const dispatch = useDispatch()


  function handleDeleteAddress(){
    alert("Endereço deletado com sucesso!")
    dispatch(delAddress())
  }

  function handleFetchUser(){
    dispatch(fetchUsers())
  }

  function handleFecthUserId(){

    if(id < 1 || id > 10){
      alert("ID não encontrado")
      return
    }
    dispatch(fetchUserById(id))
  }

  console.log(user)

  return (
    <>
    <Header/>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user ? user.name : "Visitante"}, bem vindo!
            </h1>

            {user && (
              <>
              <span>Email: {user.email}</span>


              {user.address && (
                <>
                  <strong className={styles.addressLabel}>Endereço atual:</strong>
                  <div className={styles.address}>
                
                  
                    <p>{user.address.location}, N {user.address.number}</p>
                  
                    <button onClick={handleDeleteAddress}>Deletar endereço</button>
                  </div>
                  </>
                )}
              
            </>
          
          )} 

          <br />
          <hr />
          <br />

          <div>
            <h2>Lista de usuarios</h2>
            <button onClick={handleFetchUser}>Buscar</button>

            {loading && (
              <strong>Carregando usuarios...</strong>
            )}
              {!loading && users.map((user) => (
                <div key={user.id}>
                  <br />
                  <span>ID: {user.id}</span>
                  <br />
                  <span>Nome: {user.name}</span>
                  <br />
                  <span>Email: {user.email}</span>
                  <br />
                </div>
              
              ))}

          </div>

          <br />

          <div>
            <label>ID do usuario</label>
            <br />
            <input type="text" 
            value={id}
            onChange={(e) => setId(e.target.value)}
            />
            <br />
            <button onClick={handleFecthUserId}>Buscar</button>

            { userId && (
              <>
                <br />
                <br />
                <span>ID: {userId.id}</span>
                <br />
                <span>Nome: {userId.name}</span>
                <br />
                <span>Email: {userId.email}</span>
                <br />
                <span>Endereço: <br />

                Rua: {userId.address?.street}   
                <br />
                Cidade: {userId.address?.city}
                </span>
              </>

          )
            }
          </div>

          </div>

        </main>
      </div>
    </>
  )
}
