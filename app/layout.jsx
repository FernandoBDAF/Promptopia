import './globals.css';

export const metadata = {
    title: "Prompotopia",
    description: "Prompotopia is a platform for creating and sharing prompts for creative writing."
}

const Layout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"></div>
            </div>
            
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  );
};

export default Layout;
