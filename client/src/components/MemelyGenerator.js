import React, { Component } from 'react';
import axios from 'axios';
import Meme from './Meme';
import MemeForm from './MemeForm';
import MemeButtons from './MemeButtons'


export default class MemelyGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      memeId: '1bij',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemes: []
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    return this.setState({
      [name]: value.toUpperCase()
    });
  }
  handleGenerate = (event) => {
    const random = Math.floor(Math.random() * this.state.allMemes.length);
    this.setState({
      memeId: this.state.allMemes[random].id,
      randomImg: this.state.allMemes[random].url
    });
    event.preventDefault();
  }

  handleDownload = (event) => {
    const corsBypass = "https://cors-anywhere.herokuapp.com/";
    const postUrl = "https://api.imgflip.com/caption_image";
    axios.post(corsBypass + postUrl, null, {
      params: {
        template_id: this.state.memeId,
        username: process.env.REACT_APP_MEME_USERNAME,
        password: process.env.REACT_APP_MEME_PASSWORD,
        text0: this.state.topText,
        text1: this.state.bottomText
      }
    })
      .then(response => response.data)
      .then(response => {
        const { url } = response.data;
        this.setState({
          memeUrl: url
        })
        window.open(this.state.memeUrl, '_blank');
      })
    event.preventDefault();
  }

  componentDidMount() {
    axios.get("https://api.imgflip.com/get_memes")
      .then(response => response.data)
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemes: memes
        });
      });
  }

  render() {
    return (
      <>
        <MemeForm {...this.state} handleChange={this.handleChange} />
        <Meme {...this.state} />
        <MemeButtons handleGenerate={this.handleGenerate} handleDownload={this.handleDownload} />

      </>
    );
  }
}
