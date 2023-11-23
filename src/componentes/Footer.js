import {Link} from 'react-router-dom'
const Footer=()=> {
    return (
        <div>
            <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                   
                    <ul>
                        <img className="imagen-pie" src={require("../imagenes/radarvertical.png")} />

                        
                    </ul>
                    
                </div>
                <div className="footer-col">
                    <h4>Links</h4>
                    <ul>
                        <li><Link to={"#"}>Investigación</Link></li>
                        <li><Link to={"#"}>Desarrollo</Link></li>
                        <li><Link to={"#"}>Campaña 5.0</Link></li>
                        <li><Link to={"#"}>Inteligencia electoral</Link></li>
                        <li><Link to={"#"}>LidEresTú</Link></li>
                    </ul>
                    
                </div>
                <div className="footer-col">
                    <h4>Otros Links</h4>
                    <ul>
                        <li><Link to={"#"}>División Comercial</Link></li>
                        <li><Link to={"#"}>Aviso de privacidad para postularse</Link></li>
                        <li><Link to={"#"}>Investigadores de Campo</Link></li>
                        <li><Link to={"#"}>Contacto</Link></li>
                    </ul>
                    
                </div>
                <div className="footer-col">
                    <h4>Contáctanos</h4>
                    <div className="red-social">
                    <Link to={"https://www.facebook.com/holaimach"}><i class="fab fa-facebook"></i></Link>
                    <Link to={"https://twitter.com/holaimach"}><i class="fab fa-twitter"></i></Link>
                    <Link to={"https://www.linkedin.com/company/holaimach/"}><i class="fab fa-linkedin"></i></Link>
                </div>
                    
                </div>
            </div>
        </div>
        <div className="footer-copy">
                            <p>
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> Derechos Reservados | Imagen Consultores Hidalgo
                            </p>
                        </div>
                          
       
    </footer>


        </div>
         );
        }
    
    export default Footer;
    