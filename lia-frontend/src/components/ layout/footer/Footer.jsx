import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img src="../gpbm-f.png" alt="" width={180} height={31} />
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <i className="fas fa-map-marker-alt"></i>
            <ul>
              <li>
                <a href="/">64 ZAE du Trou Grillon</a>
              </li>
              <li>
                <a href="/">BP 49-91 280</a>
              </li>
              <li>
                <a href="/">St.Pierre du Perray, France</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <i className="fas fa-envelope-square"></i>
            <ul>
              <li>
                <a href="mailto:info@gpbmfrance.fr">info@gpbmfrance.fr</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <i className="fas fa-phone"></i>
            <ul>
              <li>
                <a href="ringto:+33169896200">Tel: +33 169 89 62 00</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="link">
        A devision of <a href="/">GPBM Nordic</a>
      </div>
    </div>
  );
}
