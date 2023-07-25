import React from "react";

type CityTemplateProps = {
    title: string,
}

const CityTemplate = ({title}: CityTemplateProps) => {
    return <section className="">
        {title}

        {/* About Us*/}
        <section className="aboutUs" id="about-us">
            <h1>About us</h1>
        </section>

        {/* Class Times */}
        <section className="classTimes" id="class-times">
            <h1>Class Times</h1>
        </section>

        {/* Media */}
        <section className="media" id="media">
            <h1>Media</h1>
        </section>

        {/* Contact Us */}
        <section className="contactUs" id="contact-us">
            <h1>Contact Us</h1>
        </section>
    </section>
}

export default CityTemplate;