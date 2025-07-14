import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delAddress } from '../../redux/User/slice'


export function Home() {

  const { user } = useSelector((rootReducer ) => rootReducer.user)
  const dispatch = useDispatch()


  function handleDeleteAddress(){
    alert("Endereço deletado com sucesso!")
    dispatch(delAddress())
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


              <strong className={styles.addressLabel}>Endereço atual:</strong>
              <div className={styles.address}>
                {user.address && (
                  <>
                    <p>{user.address.location}, N {user.address.number}</p>
                  
                    <button onClick={handleDeleteAddress}>Deletar endereço</button>
                  </>
                )}
              </div>
            </>
          
          )} 

          </div>

        </main>
      </div>
    </>
  )
}
