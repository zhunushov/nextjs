import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from '../../styles/user.module.scss'


export default function User({userr}) {
    const { query } = useRouter()
    return (
        <MainContainer  keywords={userr.name}>
        <div className={styles.user}>
            <h1>
            Пользователь с id {query.id}
            </h1>
            <div>{userr.name} </div>
        </div>
        </MainContainer>
    )
}

export async function getServerSideProps ({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const userr = await res.json()

     return {
        props: {userr}
    }
}