import accounts from './accounts.json'

export function AccountCard() {

    return(
        <>
        <section>
            <h1>Usuarios</h1>
            {accounts.map(account =>(
                <div className='card' key={account.account}>
                    <h2>{account.account}</h2>
                    <a href={`https://twitter.com/${account.userName}`}>Perfil Usuario</a>
                </div>

            ))}
        </section>
        </>
    )
}