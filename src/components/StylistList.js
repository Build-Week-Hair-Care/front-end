import React, { useEffect, useState } from "react";
import axios from 'axios';
import StylistCard from './StylistCard';
import SearchPage from './SearchPage';
import {ParentStyle} from './Styles';

const stylistApi = `/api/stylists/`;

export default function StylistList() {
//  return (
// <h2> hello world </h2>
//  )
  const [stylistData, setStylistData] = useState([]);
  const [url, setUrl] = useState(stylistApi);

  function search(formValues, actions){
    const name = formValues.name.toLowerCase();
    
    const newCharacters = stylistData.filter(character => `${character.first_name} ${character.last_name}`.toLowerCase().includes(name))
    setStylistData(newCharacters)
  }

  // useEffect(() => {
  //   axios.get(url)
  //     .then(res => {
  //       //console.log(res.data);
  //       setStylistData(res.data.data);
  //     })
  //     .catch(err => {
  //       //console.log(err);
  //     })
  // }, [url]);

  return (
    <section>
      <SearchPage onSubmit={search} />
        <ParentStyle>
          {
            stylistData.map(character => <StylistCard key={character.id} person={character} /> )
          }
        </ParentStyle>
    </section>
  );
}