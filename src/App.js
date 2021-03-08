import DarkMode from "./component/DarkMode";

function App() {
  return (
    <>
        <header className="rf-header" role="banner">
            <div className="rf-container">
                <div className="rf-header__body">
                    <div className="rf-header__brand">
                        <a className="rf-logo" href="#root" title="République française">
                            <span className="rf-logo__title">
                                République<br />
                                française
                            </span>
                        </a>
                    </div>
                    <div className="rf-header__navbar">
                        <div className="rf-service">
                            <a className="rf-service__title" href="#root" title="Nom du service">
                                Nom du service
                            </a>
                            <p className="rf-service__tagline">baseline - précisions sur l‘organisation</p>
                        </div>
                    </div>
                    <div className="rf-header__tools">
                        <div className="rf-shortcuts">
                            <ul className="rf-shortcuts__list">
                                <li className="rf-shortcuts__item">
                                    <a href="#root" className="rf-link rf-fi-add-circle-line rf-link--icon-left" target="_self">Créer un
                                        espace</a>
                                </li>
                                <li className="rf-shortcuts__item">
                                    <a href="#root" className="rf-link rf-fi-lock-line rf-link--icon-left" target="_self">Se
                                        connecter</a>
                                </li>
                                <li className="rf-shortcuts__item">
                                    <a href="#root" className="rf-link rf-fi-account-line" target="_self">S’enregistrer</a>
                                </li>
                                <li className="rf-shortcuts__item">
                                    <DarkMode />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  );
}

export default App;