import React from "react";

type CityTemplateProps = {
    title: string,
}

const CityTemplate = ({title}: CityTemplateProps) => {
    return <section className="">
        {title}
        <h1>About us</h1>
        <h1>Class times</h1>
        <h1>Media</h1>
        <h1>Contact us</h1>
    </section>
}

export default CityTemplate;