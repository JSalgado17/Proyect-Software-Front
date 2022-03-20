import './Page.css';
const Page = ({ header: headerComponent, footer: footerComponent, children }) => {
    const hasHeader = headerComponent && true;
    const hasFooter = footerComponent && true;
    
    let pageClassNames = ['page_container'];
    if (!hasHeader) pageClassNames.push('no_header');
    if (!hasFooter) pageClassNames.push('no_footer');
    return (
        
        <section className={pageClassNames.join(' ')}>
            {
                hasHeader &&
                <header className="page_header">
                    {headerComponent}
                </header>
            }
            <main>
                {children}
            </main>
        
            </section>
      
    );
}

export default Page;