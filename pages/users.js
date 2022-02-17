import Link from 'next/link';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {
  
     
    return (
        <MainContainer>
          <h1> Список пользователей</h1>
          <ul>
              {
                  users.map(user => 
                    <li key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        <a>{user.name}</a>
                    </Link>
                    </li>
                )
              }
          </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps (context) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()

    return {
        props: {users}
    }
}