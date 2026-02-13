import React, { Component } from "react";
import MyButton from "./MyButton";

class Company extends Component {
  state = {
    loaded: false,
  };
  setLoaded = () => {
    this.setState({
      loaded: true,
    });
  };
  renderButtons = (type) => {
    switch (type) {
      case "website":
        return (
          <MyButton
            link={this.props.website}
            linkName="Website"
            id={`website${this.props.uid}`}
          />
        );
      case "pdf":
        return (
          <MyButton
            link={this.props.pdf}
            linkName="PDF"
            id={`pdf${this.props.uid}`}
          />
        );
      case "both":
        return (
          <div className="full">
            <div className="half-contaner">
              <MyButton
                link={this.props.website}
                linkName="Web"
                id={`website${this.props.uid}`}
              />
            </div>
            <div className="half-contaner">
              <MyButton
                link={this.props.pdf}
                linkName="PDF"
                id={`pdf${this.props.uid}`}
              />
            </div>
          </div>
        );
      case "withmail":
        return (
          <div>
            <div className="regular-btn-container">
              <MyButton
                link={this.props.website}
                linkName="Website"
                id={`website${this.props.uid}`}
              />
            </div>
            <div className="regular-btn-container">
              <MyButton
                link={this.props.pdf}
                linkName="PDF"
                id={`pdf${this.props.uid}`}
              />
            </div>
            <div className="regular-btn-container">
              <MyButton
                link={`mailto:${this.props.email}`}
                subject={`${this.props.subject}`}
                linkName="contact"
                id={`contact${this.props.uid}`}
              />
            </div>
          </div>
        );
    }
  };
  render() {
    return (
      <div className="company-card">
        <div className="company-card__name">
          <h2>{this.props.name}</h2>
        </div>
        <div className="company-card__img">
          <img
            src={this.props.logo}
            alt={this.props.name}
            style={!this.state.loaded ? { visibility: "hidden" } : {}}
            onLoad={() => this.setLoaded(true)}
          />
        </div>
        <div className="links-contanier">
          {this.renderButtons(this.props.type)}
        </div>
      </div>
    );
  }
}

export default Company;
