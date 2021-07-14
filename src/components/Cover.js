import React, { Component } from 'react';

class Cover extends Component {
  render() {
    if(this.props.data){
        var name = this.props.data.name;
        var title = this.props.data.title;
        var quote = this.props.data.quote;
        var quoteauthor = this.props.data.author;
        var social = this.props.data.social.map(function(social){
          return <li key={social.name}><a href={social.url}><i className={social.className}>  </i></a></li>
        });
    }
    return (
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Menu on">Menu on</a>
	      <a className="mobile-btn" href="" title="Menu off">Menu off</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#projects">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3><span>{title}</span></h3>
            <br />
            <h4>"{quote}"</h4>
            <h6> - {quoteauthor}</h6>
            <hr />
            <ul className="social">
          {social}
            </ul>
         </div>
      </div>
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
   </header>
    );
  }
}

export default Cover;
