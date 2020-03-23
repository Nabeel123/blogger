import React from "react"
// import { Link } from "gatsby"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"




class Products extends React.Component {

    state = {
        fetchedData: [],
    };

    componentDidMount() {
        fetch('https://reqres.in/api/users')
            .then(response => {
                return response.json()
            }).then(json =>
                this.setState({
                    fetchedData: json.data,
                }));
    }

    render() {
        const { fetchedData } = this.state
        console.log(fetchedData);
        return (
            <Layout>
                <SEO title="Products" />
                <h1> Products Page </h1>
                <div className="d-flex">

                    {fetchedData.map(person =>

                        <div key={person.id} className="card">
                            <img src={person.avatar} />
                            <p>{person.first_name}</p>
                            <p>{person.email}</p>
                        </div>

                    )}

                </div>
            </Layout>
        );

    };
}


export default Products