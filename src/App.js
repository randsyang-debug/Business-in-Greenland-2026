import React, { Component } from "react";
import "./App.css";
import Company from "./Components/Company";
import { companies } from "./Data/companies";
import Flip from "react-reveal/Flip";
import upBtn from "./Resourses/Images/up.svg";
import ScrollToTop from "react-scroll-up";
import Footer from "./Components/Footer";
import MyButton from "./Components/MyButton";
import logo from "./Resourses/Images/2024_Greenland UK_forside.jpg"
import { getYear } from "./utils";
class App extends Component {
  state = {
    companies: []
  };
  componentDidMount() {
    this.setState({
      companies: this.filterByName(companies)
    });
  }
  filterByName(companies) {
    const sortedArray = companies.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });
    return sortedArray;
  }
  showCompanies = companies =>
    companies
      ? companies.map(company => (
          <Flip top key={company.id}>
            <Company
              name={company.name}
              website={company.website}
              uid={company.id}
              pdf={company.pdf}
              email={company.email}
              logo={company.logo}
              type={company.type}
            />
          </Flip>
        ))
      : null;
  render() {
    return (
      <div>
        <main>
          <header className="header">
            <h1>Welcome to PDAC {getYear()}</h1>
            <section className="program-description-section-single"> 
              <div className="program-description">
                <h2>Greenland Magazine 2024 - 2025</h2>
                <img src={logo} alt="Greenland Magazine 2024-2025"/>
                <MyButton
                  link="https://www.e-pages.dk/plb/165"
                  linkName="DOWNLOAD"
                  id={`${this.props.uid}`}
                />
              </div>
            </section>
            <h2>Business in Greenland - ready to support you</h2>
          </header>
          <section className="cards">
            {this.showCompanies(this.state.companies)}
          </section>
        </main>

        <Footer />
        <ScrollToTop showUnder={500}>
          <img className="upBtn" src={upBtn} alt="go up" />
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
