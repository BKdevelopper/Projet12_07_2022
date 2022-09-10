import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div className="Erreur">
      <div className="Erreur-Container">
        <p className="Erreur-Container-text1">404</p>
        <p className="Erreur-Container-text2">
          La connexion avec le serveur a été perdu, n'hésitez pas à verifier
          l'URL de l'api et à rafraichir la page.
        </p>
        <Link className="Erreur-Container-text3" to={'/'}>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}
export default ErrorPage
