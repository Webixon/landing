import React from "react";

const Article = (props) => {
    const styles = {
        marginTop: 40
    }

    return ( 
        <>
            <article style={styles}>
                <h3 style={{marginBottom:'3px', textTransform:'uppercase'}}>{props.title}</h3>
                <span style={{display:'block',fontSize:'14px', marginBottom:'10px'}}>{props.author}</span>
                <p style={{fontSize:'16px'}}>{props.text}</p>
            </article>
        </>
     );
}
 
export default Article;