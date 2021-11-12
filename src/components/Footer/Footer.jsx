import React from 'react';

const Footer = () => {
   return (
      <footer className="page-footer green lighten-4">
         <div className="footer-copyright">
            <div className="container">
               {new Date().getFullYear()} Copyright Text
               <a href="https://maxradchenko20.github.io/REACT_API--FORTNITE/" target="_blank"
                  className="grey-text text-lighten-4 right">Repo</a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
