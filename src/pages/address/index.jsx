import { useState, useEffect } from 'react'
import styles from './address.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userAdress } from '../../redux/User/slice'


export function Address() {
  const [addressName, setAddressName] = useState("")
  const [addressNumber, setAddressNumber] = useState("")

  const { user } = useSelector((rootReduce) => rootReduce.user)

  const dispatch = useDispatch()


  function handleRegisterAddress(){
    console.log(addressName, addressNumber)

    dispatch(userAdress({
        location: addressName,
        number: addressNumber,
    }))


  }

  useEffect(() => {

    if(user?.address?.location && user?.address?.number){
      setAddressName(user.address.location)
      setAddressNumber(user.address.number)
    }

  }, [user])

  return (
    <>
    <Header/>
      <div className={styles.container}>

        <main className={styles.content}>
          <div>
            <Link to="/painel">
              Voltar para o painel
            </Link>
          </div>

          <section className={styles.address}>
           <h2>Meu endereço:</h2>

          <input 
            type="text" 
            className={styles.input}
            placeholder="Ex: Rua centro, x"
            value={addressName}
            onChange={ (e) => setAddressName(e.target.value) }
          />
          <input 
            type="text" 
            className={styles.input}
            placeholder="Numero"
            value={addressNumber}
            onChange={ (e) => setAddressNumber(e.target.value) }
          />

          <button className={styles.button} onClick={handleRegisterAddress}>
            Salvar Alteração
          </button>

          </section>
        </main>
      </div>
    </>
  )
}
