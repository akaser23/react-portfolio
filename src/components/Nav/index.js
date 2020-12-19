import React from 'react';

function Nav(props) {
   
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Anna Kaser
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick="">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio" onClick="">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact" onClick="">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume" onClick="">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

{/* <section>
<h1>A Bit About Me</h1>
<img src={coverImage} alt="cover"/>
<div>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
    </p>
</div>
</section> */}

export default Nav;