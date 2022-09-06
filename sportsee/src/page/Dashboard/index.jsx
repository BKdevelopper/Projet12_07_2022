import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="container">
      <header>
        <a href="">
          <img src="../img/logo.png" alt="" />
        </a>
        <a href="">Acceuil</a>
        <a href="">Profil</a>
        <a href="">Réglage</a>
        <a href="">Communauté</a>
      </header>
      <aside>
        <nav>
          <img src="../img/nav.svg" alt="" />
          <p>Copyright, SportSee 2020</p>
        </nav>
      </aside>
      <main>
        <h2>
          Bonjour
          <span>Thomas</span>
        </h2>
        <div className="text">
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <Link to="/stats/12" className="user12Btn userBtn">
          User-12
        </Link>
        <Link to="/stats/18" className="user18Btn userBtn">
          User-18
        </Link>
      </main>
    </div>
  )
}
export default Dashboard
