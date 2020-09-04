import React from 'react'

class Fade extends React.Component {
    constructor(props) {
      super(props);
      this.state = { style : true }
    }

    style = {transitionDuration : "2.5s", opacity : "0"}
    style2 = {transitionDuration : "2.5s", opacity : "1"}

    handleObserver(){
        if(window.scrollY > 450) {
            this.setState({ style : false });
            this.observer.unobserve(this.loadingRef)
        }
        
    };

    componentDidMount() {
        // Options
        var options = {
          root: null, // Page as root
          rootMargin: "0px",
          threshold: 0.2
        };
        // Create an observer
        this.observer = new IntersectionObserver(
          this.handleObserver.bind(this), //callback
          options
        );
        //Observ the `loadingRef`
        this.observer.observe(this.loadingRef);
      }
    render(){
        return(
            <div ref={loadingRef => (this.loadingRef = loadingRef)}>
                <div style={this.state.style === true ? this.style : this.style2}>{this.props.children}</div>
            </div>
        )
    }
}

export default Fade;