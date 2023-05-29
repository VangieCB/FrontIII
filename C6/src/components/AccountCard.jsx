import accounts from './accounts.json'

/*Muestra la lista de links que muestren el nombre del usuario 
y redirijan a https://twitter.com/${account}*/

export function AccountCard() {

    return (
        <>
          <section>
                <h1>Usuarios</h1>
                {accounts.map(account =>(

                    <div className='card' key={account.account}>
                        <h2>{account.account}</h2>
                        <a href='https://twitter.com/${account.username}'></a>
                    </div>
                )
                    )}
       
            </section>
        </>


    )
}