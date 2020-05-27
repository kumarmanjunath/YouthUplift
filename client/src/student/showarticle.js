import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";
import "./art.css";
export default class showArticle extends Component {
  constructor(props) {
    super(props);

    // this.getUser = this.getUser;
    this.state = {
      article: [],

      //   profession: [],
    };
    // this.onLogout = this.onLogout.bind(this);
  }
  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/articles/`,
        config
      );
      this.setState({
        article: res.data.data,
        // profession: res.data.data.professions,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  render() {
    console.log(this.state.article);
    return (
      <div className='art-art'>
        {this.state.article.map((doc) => (
          <div className='card-art'>
            <img src={`${doc.photo}`} className='img1' alt=''></img>
            <div className='container-art'>
              <h4>
                <b>{doc.title}</b>
              </h4>
              <span>{doc.description}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
