import React, { Component } from 'react';
import Article from '../components/Article';

const articles = [
    {id:1,
    title:"1",
    author:"Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt doloribus neque fugiat aut illo velit vel delectus voluptatibus cum, deserunt culpa minima? Exercitationem, rerum repellendus eaque porro consequatur quaerat!"  
},
    {id:2,
    title:"2",
    author:"Adam Miczkiewicz",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt doloribus neque fugiat aut illo velit vel delectus voluptatibus cum, deserunt culpa minima? Exercitationem, rerum repellendus eaque porro consequatur quaerat!"  
},
    {id:3,
    title:"3",
    author:"Antoni",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt doloribus neque fugiat aut illo velit vel delectus voluptatibus cum, deserunt culpa minima? Exercitationem, rerum repellendus eaque porro consequatur quaerat!"  
},
    {id:4,
    title:"Czwarty temat testowy",
    author:"xxxx",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt doloribus neque fugiat aut illo velit vel delectus voluptatibus cum, deserunt culpa minima? Exercitationem, rerum repellendus eaque porro consequatur quaerat!"  
},
]

const MainPage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return (
        <>
            <div className='home'>
                {artList}
            </div>
        </>
     );
}
 
export default MainPage;